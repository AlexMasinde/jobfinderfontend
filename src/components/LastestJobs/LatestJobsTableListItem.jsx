import React from "react";

export default function LatestJobsTableListItem({ job }) {
  const { recruiterName, title, location, joblink, deadline } = job;
  const date = new Date(deadline);
  const disabled = date < new Date();
  return (
    <tr>
      <td>{title}</td>

      <td>{location}</td>
      <td>{recruiterName}</td>
      <td className="text-right">
        <a href={joblink} target="blank">
          <button
            type="button"
            className="btn btn-success btn-outline btn-sm"
            disabled={disabled}
          >
            Apply
          </button>
        </a>
      </td>
    </tr>
  );
}
