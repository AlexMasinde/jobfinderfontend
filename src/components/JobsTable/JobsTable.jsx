import React from "react";

import JobsTableListItem from "./JobsTableListItem";

export default function JobsTable({ data }) {
  return (
    <div className="table-responsive p-2 bg-icon">
      <table datatable className="table table-bordered table-sm datatables">
        <thead>
          <tr className="small bg-primary">
            <th>Name</th>
            <th>Category</th>
            <th>Status</th>
            <th>Location</th>
            <th>Deadline</th>
            <th className="text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((job) => {
            return <JobsTableListItem job={job} key={job.id} />;
          })}
        </tbody>
        <footer></footer>
      </table>
    </div>
  );
}
