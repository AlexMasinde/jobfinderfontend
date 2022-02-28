import React from "react";
import LatestJobsTable from "./LatestJobsTable";

export default function LatestJobs() {
  return (
    <div className="col-xl-8 col-md-8 pl-0 container pr-4">
      <div className="card">
        <div className="card-header border-top-blue p-3">
          <h5 className="text-default">Latest Jobs</h5>
        </div>
        <LatestJobsTable />
      </div>
    </div>
  );
}
