import React from "react";
import { Link } from "react-router-dom";

export default function CandidateSearchtableListItem({ candidate }) {
  const { fullName, email, telephoneOne, location, candidateId } = candidate;
  return (
    <tr>
      <td>{fullName}</td>
      {console.log(candidate)}
      <td>{email}</td>
      <td>{telephoneOne}</td>
      <td>{location}</td>
      <td className="text-right">
        <Link to={`/candidatesearch/${candidateId}`}>
          <button type="button" className="btn btn-success btn-outline btn-sm">
            View
          </button>
        </Link>
      </td>
    </tr>
  );
}
