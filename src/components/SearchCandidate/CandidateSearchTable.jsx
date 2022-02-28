import React from "react";
import CandidateSearchTableListItem from "./CandidateSearchTableListItem";

export default function CandidateSearchTable({ data }) {
  return (
    <div className="table-responsive p-2 bg-icon">
      <table datatable className="table table-bordered table-sm datatables">
        <thead>
          <tr className="small bg-primary">
            <th>Name</th>
            <th>Email</th>
            <th>Telephone</th>
            <th>Location</th>
            <th className="text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((candidate) => {
            return <CandidateSearchTableListItem candidate={candidate} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
