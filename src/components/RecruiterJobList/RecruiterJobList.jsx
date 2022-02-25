import React from "react";
import { useRecruiter } from "../../contexts/recruiterContext";
import RecruiterJobListItem from "./RecruiterJobListItem";

export default function RecruiterJobList({ setAddJob }) {
  const { recruiterJobs } = useRecruiter();

  return (
    <div className="table-responsive p-2 bg-icon">
      <table datatable className="table table-bordered table-sm datatables">
        <thead>
          <tr className="small">
            <th>Name</th>
            <th>Category</th>
            <th>Status</th>
            <th>Location</th>
            <th>Deadline</th>
            <th className="text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {recruiterJobs.map((job) => {
            return <RecruiterJobListItem key={job.id} job={job} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
