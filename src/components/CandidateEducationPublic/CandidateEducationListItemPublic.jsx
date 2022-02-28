import React from "react";

export default function CandidateEducationListItemPublic({ education }) {
  const { course, dateCompleted, level, qualification, institution } =
    education;

  return (
    <tr>
      <td>
        <div className="d-inline-block align-middle">
          <img
            src="assets/images/user/avatar-4.jpg"
            alt="designer-profile"
            className="img-radius wid-40 align-top m-r-15 hidden"
          />
          <div className="d-inline-block">
            <h6>{institution}</h6>
            <p className="text-muted m-b-0 m-l-5">{course}</p>
          </div>
        </div>
      </td>
      <td>{level}</td>
      <td>{dateCompleted}</td>
      <td>
        <label className="badge badge-light-info">{qualification}</label>
      </td>
    </tr>
  );
}
