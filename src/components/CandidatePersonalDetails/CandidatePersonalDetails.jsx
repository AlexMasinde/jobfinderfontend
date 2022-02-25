import React, { useState } from "react";
import { useCandidate } from "../../contexts/candidateContext";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { countries } from "../../utils/lists";
import { locations } from "../../utils/lists";

export default function CandidatePersonalDetails() {
  const { candidateProfile } = useCandidate();

  const [editing, setEditing] = useState(true);
  const [fullName, setFullName] = useState(candidateProfile?.fullName || "");
  const [telephoneOne, setTelephoneOne] = useState(
    candidateProfile?.telephoneOne || ""
  );
  const [telephoneTwo, setTelephoneTwo] = useState(
    candidateProfile?.telephoneTwo || ""
  );
  const [identification, setIdentification] = useState(
    candidateProfile?.identification || "National ID"
  );
  const [identificationNumber, setIdentificationNumber] = useState(
    candidateProfile?.identificationNumber || ""
  );
  const [nationality, setNationality] = useState(
    candidateProfile?.nationality || "Kenya"
  );
  const [location, setLocation] = useState(
    candidateProfile?.location || "Nairobi"
  );
  const [gender, setGender] = useState(candidateProfile?.gender || "Male");
  const [dateOfBirth, setDateOfBirth] = useState(
    candidateProfile?.dateOfBirth || ""
  );

  const axiosPrivate = useAxiosPrivate();

  function handleName(e) {
    setFullName(e.target.value);
  }

  function handleTelephoneOne(e) {
    setTelephoneOne(e.target.value);
  }

  function handleTelephoneTwo(e) {
    setTelephoneTwo(e.target.value);
  }

  function handleIdentification(e) {
    setIdentification(e.target.value);
  }

  function handleIdentificationNumber(e) {
    setIdentificationNumber(e.target.value);
  }

  function handleNationality(e) {
    setNationality(e.target.value);
  }

  function handleLocation(e) {
    setLocation(e.target.value);
  }

  function handleGender(e) {
    setGender(e.target.value);
  }

  function handleDateOfBirth(e) {
    setDateOfBirth(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const dataObject = {
      fullName,
      telephoneOne,
      telephoneTwo,
      identification,
      identificationNumber,
      nationality,
      location,
      gender,
      dateOfBirth,
    };

    try {
      const response = await axiosPrivate.post(
        "/profiles/candidate-profile",
        JSON.stringify(dataObject)
      );
      console.log(response.data);
    } catch (err) {
      console.log(err.message);
    }
  }

  function toggleEditing() {
    setEditing(!editing);
  }
  return (
    <div className="card container" id="info" aria-labelledby="info-tab">
      <div className="d-flex justify-content-between dashboard-header py-3 px-5">
        <h5 className="mb-0">
          {editing && <span className="text-muted">Editing -</span>}
          Personal details
        </h5>
        <button
          type="button"
          className="btn btn-primary btn-sm rounded m-0 "
          aria-expanded="false"
          aria-controls="pro-det-edit-1 pro-det-edit-2"
          onClick={toggleEditing}
        >
          {editing && <i className="feather icon-x"></i>}
          {!editing && <i className="feather icon-edit"></i>}
        </button>
      </div>
      {editing && (
        <form className="px-5 mt-3">
          <div className="merge-card">
            <div className="form-group row">
              <div className="col font-weight-bold">Full Name</div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                  onChange={handleName}
                  value={fullName}
                />
              </div>
              <div className="col font-weight-bold">Where are you based?</div>
              <div className="col">
                <select
                  className="custom-select custom-select-sm"
                  onChange={handleLocation}
                  defaultValue={location}
                >
                  {locations.map((location) => {
                    return <option key={location}>{location}</option>;
                  })}
                </select>
              </div>
            </div>
            <div className="form-group row">
              <div className="col font-weight-bold">Telephone #1</div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Telephone #1"
                  value={telephoneOne}
                  onChange={handleTelephoneOne}
                />
              </div>
              <div className="col font-weight-bold">Telephone #2</div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Telephone #2"
                  value={telephoneTwo}
                  onChange={handleTelephoneTwo}
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col font-weight-bold">Nationality</div>
              <div className="col">
                <select
                  className="custom-select custom-select-sm"
                  onChange={handleNationality}
                  defaultValue={nationality}
                >
                  {countries.map((country) => {
                    return <option key={country}>{country}</option>;
                  })}
                </select>
              </div>
              <div className="col"></div>
              <div className="col"></div>
            </div>
            <div className="form-group row">
              <div className="col font-weight-bold">Identification</div>
              <div className="col">
                <select
                  className="form-control"
                  id="ddlIdentification"
                  onChange={handleIdentification}
                  defaultValue={identification}
                >
                  <option selected>National ID</option>
                  <option>Passport</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="col font-weight-bold">Number</div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Number"
                  value={identificationNumber}
                  onChange={handleIdentificationNumber}
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col font-weight-bold">Date of birth</div>
              <div className="col">
                <input
                  type="date"
                  className="form-control"
                  value={dateOfBirth}
                  onChange={handleDateOfBirth}
                />
              </div>
              <div className="col font-weight-bold">Gender</div>
              <div className="col">
                <select
                  className="form-control"
                  id="ddlGender"
                  onChange={handleGender}
                  defaultValue={gender}
                >
                  <option selected>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label"></label>
              <div className="col-sm-9">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
