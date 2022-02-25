import React from "react";

import { useCandidate } from "../../contexts/candidateContext";
import CandidateEducationListItem from "./CandidateEducationListItem";

export default function CandidateEducation({ setAddEducation }) {
  const { candidateEducation } = useCandidate();

  function toggleEducationModal() {
    setAddEducation(true);
  }

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
          <button
            className="btn btn-rounded btn-success btn-sm"
            onClick={toggleEducationModal}
          >
            Add new
          </button>
        </div>
        <div className="table-responsive p-3">
          <table className="table table-hover mb-0">
            <thead>
              <tr>
                <th></th>
                <th>Level</th>
                <th>Date Completed</th>
                <th>Qualification</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {candidateEducation.map((education) => {
                return (
                  <CandidateEducationListItem
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
