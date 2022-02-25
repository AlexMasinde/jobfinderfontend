import React from "react";

export default function TableListItem({ job }) {
  const { title, category, location, deadline, joblink } = job;

  const date = new Date(deadline);

  const status = date > new Date() ? "Active" : "Expired";
  return (
    <tr>
      {console.log(status)}
      <td>{title}</td>
      <td>{category}</td>
      <td>{status}</td>
      <td>{location}</td>
      <td>{deadline}</td>
      <td className="text-right">
        <a href={joblink} target="blank">
          <button
            type="button"
            className="btn btn-success btn-outline btn-sm"
            disabled={status === "Expired"}
          >
            Apply
          </button>
        </a>
      </td>
    </tr>
  );
}
