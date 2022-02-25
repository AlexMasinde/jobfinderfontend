import React from "react";
import { useCandidate } from "../../contexts/candidateContext";
import CandidateUploadsListItem from "./CandiateFileUploadsListItem";

export default function CandidateFileUploads({ setAddFile }) {
  const { candidateUploads } = useCandidate();

  function toggleFileUploadModal() {
    setAddFile(true);
  }
  return (
    <div
      className="card container"
      id="cv"
      role="tabpanel"
      aria-labelledby="cv-tab"
    >
      <div className="merge-card">
        <div className="dashboard-header d-flex justify-content-between py-3 px-3">
          <h5 className="mb-0">CV Uploads</h5>
          <button
            className="btn btn-rounded btn-success btn-sm"
            onClick={toggleFileUploadModal}
          >
            Upload
          </button>
        </div>
        <div className="table-responsive p-3">
          <table className="table table-columned">
            <thead>
              <tr>
                <th>File Type</th>
                <th>File</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {candidateUploads.map((upload) => {
                return (
                  <CandidateUploadsListItem upload={upload} key={upload.id} />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
