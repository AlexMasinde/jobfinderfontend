import React, { useState } from "react";
import { useCandidate } from "../../contexts/candidateContext";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

import placeholder from "../../assets/images/placeholder.png";

export default function CandidateProfileHeader({ setSelected, selected }) {
  const { candidateProfile, dispatch } = useCandidate();

  const [fileError, setFileError] = useState(null);
  const [uploading, setUploading] = useState(false);

  const axiosPrivate = useAxiosPrivate();

  const {
    dateOfBirth,
    email,
    username,
    telephoneOne,
    telephoneTwo,
    photoURL,
    location,
  } = candidateProfile;

  const phoneAvailable = telephoneOne || telephoneTwo;
  function selectInformation() {
    setSelected("information");
  }
  function selectEducation() {
    setSelected("education");
  }
  function selectWorkExperience() {
    setSelected("workExperience");
  }
  function selectUploads() {
    setSelected("uploads");
  }

  function updateError() {
    setTimeout(() => {
      setFileError(null);
    }, 3000);
  }

  async function handleImage(e) {
    setFileError(null);
    const file = e.target.files[0];
    if (!file) return;
    const fileType = file.type.split("/")[0];
    if (fileType !== "image") {
      setFileError("Only images allowed");
      updateError();
      return;
    }
    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    try {
      const { data } = await axiosPrivate.post(
        "/profiles/profile-image",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const newCandidateProfile = { ...candidateProfile, photoURL: data };
      dispatch({
        type: "SET_CANDIDATE_PROFILE",
        payload: newCandidateProfile,
      });
      setUploading(false);
    } catch (err) {
      setFileError(null);
      setUploading(false);
      console.log(err);
    }
  }

  return (
    <div className="card container">
      <div className="card-header bg-light border-top-alert p-3 m-b-10">
        <h5 className="text-primary">Candidate's Profile</h5>
      </div>
      <div className="user-card">
        <div className="card-body py-0">
          <div className="user-about-block m-0">
            <div className="row">
              <div className="col-md-4 text-center">
                <div>
                  <div>
                    <img
                      className="logo-img"
                      src={photoURL ? photoURL : placeholder}
                      alt="user display"
                    />
                    <h6 className="mt-2">{fileError ?? username}</h6>
                  </div>
                  <div>
                    <label className="btn btn-rounded btn-success btn-small py-0">
                      <input
                        className="hidden"
                        type="file"
                        onChange={handleImage}
                        disabled={uploading}
                      />
                      {photoURL ? "Update" : "Upload"}
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-md-8 mt-md-4">
                <div className="row">
                  <div className="col-md-6">
                    <div className="clearfix"></div>
                    {email && (
                      <a
                        href="mailto:{{ authUser.email }}"
                        className="mb-1 text-muted d-flex align-items-end text-h-primary"
                      >
                        <i className="feather icon-mail mr-2 f-18"></i>
                        {email}
                      </a>
                    )}
                    <div className="clearfix"></div>
                    {phoneAvailable && (
                      <span className="mb-1 text-muted d-flex align-items-end text-h-primary">
                        <i className="feather icon-phone mr-2 f-18"></i>
                        {telephoneOne ?? telephoneTwo}
                      </span>
                    )}
                  </div>
                  <div className="col-md-6">
                    {location && (
                      <div className="media d-flex align-items-center">
                        <span className="mb-1 text-muted d-flex align-items-end text-h-primary">
                          <i className="feather icon-map-pin mr-2 f-18"></i>
                          {location}
                        </span>
                      </div>
                    )}
                    {dateOfBirth && (
                      <div className="media d-flex align-items-center">
                        <span className="mb-1 text-muted d-flex align-items-end text-h-primary">
                          <i className="feather icon-calendar mr-2 f-18"></i>
                          {dateOfBirth}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <ul
                  className="nav nav-tabs profile-tabs nav-fill mt-3"
                  id="myTab"
                  role="tablist"
                >
                  <li
                    className={`nav-item nav-link text-reset pointer ${
                      selected === "information" ? "active" : ""
                    }`}
                    onClick={selectInformation}
                  >
                    <i className="feather icon-user mr-2"></i>Information
                  </li>
                  <li
                    className={`nav-item nav-link text-reset pointer ${
                      selected === "education" ? "active" : ""
                    }`}
                    onClick={selectEducation}
                  >
                    <i className="feather icon-book mr-2"></i>Education
                  </li>
                  <li
                    className={`nav-item nav-link text-reset pointer ${
                      selected === "workExperience" ? "active" : ""
                    }`}
                    onClick={selectWorkExperience}
                  >
                    <i className="feather icon-globe mr-2"></i>Work Experience
                  </li>
                  <li
                    className={`nav-item nav-link text-reset pointer ${
                      selected === "uploads" ? "active" : ""
                    }`}
                    onClick={selectUploads}
                  >
                    <i className="feather icon-upload mr-2"></i>CV Uploads
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
