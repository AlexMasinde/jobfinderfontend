import React, { useRef, useState } from "react";
import axios from "../../api/axios";
import { locations } from "../../utils/lists";
import { categories } from "../../utils/jobCategories";
import CandidateSearchTable from "./CandidateSearchTable";

export default function SearchCandidate() {
  const [name, setName] = useState(null);
  const [location, setLocation] = useState(null);
  const [category, setCategory] = useState(null);
  const [searchError, setSearchError] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const locationRef = useRef();
  const categoryRef = useRef();
  const nameRef = useRef();

  //show clear button
  const showClearButton = name || location || category;

  //clear search
  function clearSearch() {
    setSearchError(null);
    setName(null);
    setLocation(null);
    setCategory(null);

    setData([]);

    locationRef.current.value = null;
    nameRef.current.value = null;
    categoryRef.current.value = null;
  }

  function updateError() {
    setTimeout(() => {
      setSearchError(null);
    }, 3000);
  }

  async function handleSearch(e) {
    e.preventDefault();
    setSearchError(null);

    const searchObject = {
      where: {
        ...(name && { fullName: { search: name } }),
        ...(location && { location: location }),
        ...(category && { category: category }),
      },
    };

    if (Object.keys(searchObject.where).length === 0) {
      setSearchError("Please include at least one search field");
      updateError();
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        "/users/search",
        JSON.stringify(searchObject),
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.data.length === 0) {
        setSearchError("No results found");
        updateError();
      }
      console.log(response.data);
      setData(response.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setSearchError("Something went wrong! Try again");
      updateError();
      console.log(err);
    }
  }
  return (
    <div className="row container mx-auto mt-4 p-0">
      <div className="col-xl-12 col-sm-12 p-0">
        <div className="card">
          <div className="card-header bg-light border-top-blue p-3">
            <h5 className="text-blue">Find suitable candidates in minutes</h5>
          </div>
          <form>
            <div className="card-body col=xs-12">
              <div className="form-row m-b-20">
                <div className="col-xs-4 col-md-4">
                  <select
                    className="custom-select custom-select-sm"
                    onChange={(e) => setLocation(e.target.value)}
                    ref={locationRef}
                  >
                    <option value={null} disabled selected></option>
                    {locations.map((location) => {
                      return <option key={location}>{location}</option>;
                    })}
                  </select>
                  <p className="card-text">Location</p>
                </div>
                <div className="col-xs-4 col-md-4">
                  <select
                    className="custom-select custom-select-sm"
                    onChange={(e) => setCategory(e.target.value)}
                    ref={categoryRef}
                  >
                    <option value={null} disabled selected></option>
                    {categories.map((category) => {
                      return <option key={category}>{category}</option>;
                    })}
                  </select>
                  <p className="card-text">Category</p>
                </div>
                <div className="col-xs-4 col-md-4">
                  <input
                    className="form-control form-control-sm"
                    type="text"
                    placeholder="Name..."
                    onChange={(e) => setName(e.target.value)}
                    ref={nameRef}
                  />
                  <p className="card-text">Name</p>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={handleSearch}
                disabled={loading}
              >
                {loading ? "Searching..." : "Search Now"}
              </button>
              {showClearButton && (
                <button
                  type="button"
                  className="btn  btn-outline btn-sm text-warning"
                  onClick={clearSearch}
                >
                  Clear search
                </button>
              )}
            </div>
            {searchError && (
              <h6 className="px-4 pb-2 text-danger">{searchError}</h6>
            )}
          </form>
          {data.length > 0 && <CandidateSearchTable data={data} />}
        </div>
      </div>
    </div>
  );
}
