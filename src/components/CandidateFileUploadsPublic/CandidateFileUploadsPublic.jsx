import React from "react";
import CandidateUploadsListItemPublic from "./CandidateUploadsListItemPublic";

export default function CandidateFileUploadsPublic({ candidateUploads }) {
  return (
    <div
      className="card container"
      id="cv"
      role="tabpanel"
      aria-labelledby="cv-tab"
    >
      <div className="merge-card">
        <div className="dashboard-header d-flex justify-content-between py-3 px-3">
          <h5 className="mb-0">Files</h5>
        </div>
        <div className="table-responsive p-3">
          <table className="table table-columned">
            <thead>
              <tr>
                <th>File Type</th>
                <th>File</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {candidateUploads.map((upload) => {
                return (
                  <CandidateUploadsListItemPublic
                    upload={upload}
                    key={upload.id}
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
