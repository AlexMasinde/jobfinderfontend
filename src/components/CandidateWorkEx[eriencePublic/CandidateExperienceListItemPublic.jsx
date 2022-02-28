import React from "react";

import dateDifference from "../../utils/findDateDifference";

export default function CandidateExperienceListItemPublic({ experience }) {
  const { employer, position, from, to, remark } = experience;

  const difference = dateDifference(from, to);

  return (
    <tr>
      <td>
        <div className="d-inline-block align-middle">
          <div className="d-inline-block">
            <h6>{employer}</h6>
            <p className="text-muted m-b-0 m-l-5">{position}</p>
          </div>
        </div>
      </td>
      <td>{from}</td>
      <td>{to}</td>
      <td>{difference}</td>
      <td>
        <label className="text-muted small">
          <i>{remark}</i>
        </label>
      </td>
    </tr>
  );
}
