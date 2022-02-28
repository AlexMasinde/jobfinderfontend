import React from "react";

import CandidateEducationListItemPublic from "./CandidateEducationListItemPublic";

export default function CandidateEducationPublic({ candidateEducation }) {
  return (
    <div
      className="card container"
      id="edu"
      role="tabpanel"
      aria-labelledby="edu-tab"
    >
      <div className="merge-card">
        <div className="d-flex justify-content-between py-3 px-3 dashboard-header">
          <h5 className="mb-0">Education History</h5>
        </div>
        <div className="table-responsive p-3">
          <table className="table table-hover mb-0">
            <thead>
              <tr>
                <th></th>
                <th>Level</th>
                <th>Date Completed</th>
                <th>Qualification</th>
              </tr>
            </thead>
            <tbody>
              {candidateEducation.map((education) => {
                return (
                  <CandidateEducationListItemPublic
                    education={education}
                    key={education.id}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
