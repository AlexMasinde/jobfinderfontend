import React from "react";

export default function CandidatePublicViewPersonalDetails({
  candidateProfile,
}) {
  const {
    fullName,
    telephoneOne,
    telephoneTwo,
    identification,
    identificationNumber,
    nationality,
    location,
    gender,
    dateOfBirth,
  } = candidateProfile;

  return (
    <div className="card container" id="info" aria-labelledby="info-tab">
      <div className="d-flex justify-content-between dashboard-header py-3 px-5">
        <h5 className="mb-0">Personal details</h5>
      </div>

      <form className="px-5 mt-3">
        <div className="merge-card">
          <div className="form-group row">
            <div className="col font-weight-bold">Full Name</div>
            <div className="col">
              <p>{fullName}</p>
            </div>
            <div className="col font-weight-bold">Location</div>
            <div className="col">
              <p>{location}</p>
            </div>
          </div>
          <div className="form-group row">
            <div className="col font-weight-bold">Telephone #1</div>
            <div className="col">
              <p>{telephoneOne}</p>
            </div>
            <div className="col font-weight-bold">Telephone #2</div>
            <div className="col">
              <p>{telephoneTwo}</p>
            </div>
          </div>
          <div className="form-group row">
            <div className="col font-weight-bold">Nationality</div>
            <div className="col">
              <p>{nationality}</p>
            </div>
            <div className="col"></div>
            <div className="col"></div>
          </div>
          <div className="form-group row">
            <div className="col font-weight-bold">Identification</div>
            <div className="col">
              <p>{identification}</p>
            </div>
            <div className="col font-weight-bold">Number</div>
            <div className="col">
              <p>{identificationNumber}</p>
            </div>
          </div>
          <div className="form-group row">
            <div className="col font-weight-bold">Date of birth</div>
            <div className="col">
              <p>{dateOfBirth}</p>
            </div>
            <div className="col font-weight-bold">Gender</div>
            <div className="col">
              <p>{gender}</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
