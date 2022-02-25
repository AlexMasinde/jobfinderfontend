import React, { useState } from "react";
import { useRecruiter } from "../../contexts/recruiterContext";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import UploadLogo from "../UploadLogo/UploadLogo";

export default function RecruiterHeader() {
  const { recruiterProfile, dispatch } = useRecruiter();
  const [editing, setEditing] = useState(false);
  const [about, setAbout] = useState(recruiterProfile.about || "");
  const [telephone, setTelephone] = useState(recruiterProfile.telephone || "");
  const [recruitmentEmail, setRecruitmentEmail] = useState(
    recruiterProfile.email || ""
  );
  const [website, setWebsite] = useState(recruiterProfile.website || "");
  const [address, setAddress] = useState(recruiterProfile.address || "");
  const [applicationMethod, setApplicationMethod] = useState(
    recruiterProfile.applicationMethod || "Recruiter Website"
  );

  const axiosPrivate = useAxiosPrivate();

  function handleAbout(e) {
    setAbout(e.target.value);
  }

  function handleTelephone(e) {
    setTelephone(e.target.value);
  }

  function handleRecruitmentEmail(e) {
    setRecruitmentEmail(e.target.value);
  }

  function handlewebsite(e) {
    setWebsite(e.target.value);
  }

  function handleAddress(e) {
    setAddress(e.target.value);
  }

  function handleApplicationMethod(e) {
    setApplicationMethod(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const allValues = {
      about,
      telephone,
      email: recruitmentEmail,
      website,
      address,
      applicationMethod,
    };

    const editedValues = {
      ...(recruiterProfile.about !== about && { about }),
      ...(recruiterProfile.telephone !== telephone && { telephone }),
      ...(recruiterProfile.email !== recruitmentEmail && {
        email: recruitmentEmail,
      }),
      ...(recruiterProfile.website !== website && { website }),
      ...(recruiterProfile.address !== address && { address }),
      ...(recruiterProfile.applicationMethod !== applicationMethod && {
        applicationMethod,
      }),
    };

    const dataObject = editing ? editedValues : allValues;

    try {
      const response = await axiosPrivate.post(
        "/profiles/recruiter-profile",
        JSON.stringify(dataObject)
      );
      dispatch({
        type: "SET_RECRUITER_PROFILE",
        payload: response.data,
      });
    } catch (err) {
      console.log(err.message);
    }
  }

  function toggleEditing() {
    setEditing(!editing);
  }

  return (
    <div className="card container">
      <div className="card-header d-flex justify-content-between bg-light border-top-alert p-3 m-b-10">
        <div>
          <h5 className="text-primary">Dashboard</h5>
          <small className="text-muted">
            This information is visible publicly about your account
          </small>
        </div>

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
      <form>
        <div className="card-body">
          <div className="form-group row">
            <div className="col-sm-2 font-weight-bold">Update logo</div>
            <div className="col-sm-4">
              <img
                className="logo-img"
                alt="recruiter-logo"
                src={recruiterProfile.photoURL}
              />
            </div>
            {editing && <UploadLogo />}
          </div>
          <div className="form-group row">
            <div className="col-sm-2 font-weight-bold">About Us</div>
            <div className="col">
              <textarea
                className="form-control"
                rows="4"
                value={about}
                placeholder="describe yourself..."
                onChange={handleAbout}
                disabled={!editing}
              ></textarea>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-2 font-weight-bold">Telephone</div>
            <div className="col-sm-4">
              <input
                type="text"
                value={telephone}
                className="form-control"
                placeholder="telephone number..."
                onChange={handleTelephone}
                disabled={!editing}
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-2 font-weight-bold">Email</div>
            <div className="col">
              <input
                type="email"
                value={recruiterProfile.primaryMail}
                className="form-control"
                disabled
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-2 font-weight-bold">Recruitment Email</div>
            <div className="col">
              <input
                type="email"
                value={recruitmentEmail}
                className="form-control"
                placeholder="Recruitment email"
                disabled={!editing}
                onChange={handleRecruitmentEmail}
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-2 font-weight-bold">Career Website</div>
            <div className="col">
              <input
                type="url"
                value={website}
                className="form-control"
                placeholder="website address..."
                onChange={handlewebsite}
                disabled={!editing}
              />
            </div>
          </div>
          <div className="form-group row mb-2">
            <div className="col-sm-2 font-weight-bold">Physical Address</div>
            <div className="col">
              <input
                type="text"
                value={address}
                className="form-control"
                placeholder="physical address..."
                onChange={handleAddress}
                disabled={!editing}
              />
            </div>
          </div>
          <div className="input-group">
            <span className="input-group-prepend" id="basic-addon3">
              <label className="input-group-text">Application Method</label>
            </span>
            <select
              id="applicationMethod"
              className="custom-select"
              onChange={handleApplicationMethod}
              defaultValue={applicationMethod}
              disabled={!editing}
            >
              <option value="Recruiter Website">Recruiter Website</option>
              <option value="Recruiter Email">Recruiter Email</option>
              <option value="Via the System">Via the System</option>
            </select>
          </div>

          {editing && (
            <div className="form-group row mt-4">
              <div className="col-sm-12 text-center">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                  disabled={!editing}
                >
                  Update
                </button>
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
