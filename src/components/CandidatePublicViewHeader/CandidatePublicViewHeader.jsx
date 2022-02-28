import React from "react";

import placeholder from "../../assets/images/placeholder.png";

export default function CandidatePublicViewProfileHeader({
  setSelected,
  selected,
  candidateProfile,
}) {
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

  return (
    <div className="card container">
      {console.log(candidateProfile)}
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
                    <h6 className="mt-2">{username}</h6>
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
