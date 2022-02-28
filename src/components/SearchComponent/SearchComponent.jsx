import React, { useRef, useState } from "react";
import { countries, locations } from "../../utils/lists";
import { categories } from "../../utils/jobCategories";
import JobsTable from "../JobsTable/JobsTable";
import { useSearch } from "../../contexts/searchContext";

export default function SearchComponent() {
  const {
    jobs,
    dispatch,
    searchJobsError: searchError,
    updateError,
  } = useSearch();
  const [keyword, setKeyword] = useState(null);
  const [location, setLocation] = useState(null);
  const [category, setCategory] = useState(null);
  const [country, setCountry] = useState(null);

  const locationRef = useRef();
  const countryRef = useRef();
  const categoryRef = useRef();
  const keywordRef = useRef();

  //show clear button
  const showClearButton =
    keyword || location || category || country || jobs.length > 0;

  //clear search
  function clearSearch() {
    setKeyword(null);
    setLocation(null);
    setCategory(null);
    setCountry(null);

    locationRef.current.value = null;
    keywordRef.current.value = null;
    categoryRef.current.value = null;
    countryRef.current.value = null;
    dispatch({
      type: "SET_JOBS",
      payload: [],
    });

    dispatch({
      type: "SET_SEARCH_JOBS",
      payload: null,
    });
    dispatch({
      type: "SET_SEARCH_JOBS_ERROR",
      payload: null,
    });
  }

  async function handleSearch(e) {
    console.log("searching");
    e.preventDefault();
    dispatch({
      type: "SET_SEARCH_JOBS_ERROR",
      payload: null,
    });
    const searchObject = {
      where: {
        ...(keyword && { title: { search: keyword } }),
        ...(location && { location: location }),
        ...(category && { category: category }),
        ...(country && { country: country }),
      },
    };

    if (Object.keys(searchObject.where).length === 0) {
      console.log("no search");
      dispatch({
        type: "SET_SEARCH_JOBS_ERROR",
        payload: "Please include at least one search field",
      });
      updateError();
      return;
    }

    dispatch({
      type: "SET_SEARCH_JOBS",
      payload: searchObject,
    });
  }

  return (
    <div className="row container mx-auto">
      <div className="col-xl-12 col-sm-12 px-0">
        <div className="card">
          <div className="card-header bg-light border-top-alert p-3">
            <h5 className="text-danger">Start Job Search</h5>
          </div>
          <form>
            <div className="card-body col=xs-12">
              <div className="form-row m-b-20">
                <div className="col-xs-3 col-md-3">
                  <input
                    className="form-control form-control-sm"
                    type="text"
                    placeholder="Key word..."
                    ref={keywordRef}
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                  <p className="card-text">Key word</p>
                </div>
                <div className="col-xs-3 col-md-3">
                  <select
                    className="custom-select custom-select-sm"
                    onChange={(e) => setCountry(e.target.value)}
                    ref={countryRef}
                  >
                    <option value={null} disabled selected></option>
                    {countries.map((country) => {
                      return <option>{country}</option>;
                    })}
                  </select>
                  <p className="card-text">Country</p>
                </div>
                <div className="col-xs-3 col-md-3">
                  <select
                    className="custom-select custom-select-sm"
                    onChange={(e) => setLocation(e.target.value)}
                    ref={locationRef}
                  >
                    <option value={null} disabled selected></option>
                    {locations.map((location) => {
                      return <option>{location}</option>;
                    })}
                  </select>
                  <p className="card-text">Location</p>
                </div>
                <div className="col-xs-3 col-md-3">
                  <select
                    className="custom-select custom-select-sm"
                    onChange={(e) => setCategory(e.target.value)}
                    ref={categoryRef}
                  >
                    <option selected disabled value={null}></option>
                    {categories.map((category) => {
                      return <option>{category}</option>;
                    })}
                  </select>
                  <p className="card-text">Category</p>
                </div>
              </div>
              <div className="mt-3">
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={handleSearch}
                >
                  Search Now
                </button>
                {showClearButton && (
                  <button
                    type="button"
                    className="btn btn-outline btn-sm text-warning"
                    onClick={clearSearch}
                  >
                    Clear search
                  </button>
                )}
              </div>
            </div>
            {searchError && (
              <h6 className="px-4 pb-2 text-danger">{searchError}</h6>
            )}
          </form>
          {jobs.length > 0 && <JobsTable data={jobs} />}
        </div>
      </div>
    </div>
  );
}
