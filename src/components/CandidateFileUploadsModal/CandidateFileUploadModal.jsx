import React, { useState } from "react";
import { useCandidate } from "../../contexts/candidateContext";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

export default function CandidateFileUploadModal({ setAddFile }) {
  const { dispatch, candidateUploads } = useCandidate();
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");
  const [fileType, setFileType] = useState("CV");

  const axiosPrivate = useAxiosPrivate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();

    formData.append("file", file);
    formData.append("fileName", fileName);
    formData.append("fileType", fileType);

    try {
      const { data } = await axiosPrivate.post(
        "/profiles/candidate-uploads",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      dispatch({
        type: "SET_CANDIDATE_UPLOADS",
        payload: [...candidateUploads, data],
      });
      toggleFileModal();
    } catch (err) {
      console.log(err);
    }
  }

  function toggleFileModal() {
    setAddFile(false);
  }
  return (
    <div className="modal-container card">
      <div className="modal-header">
        <h5 className="modal-title">New File Upload</h5>
        <button
          type="button"
          className="close basic-close"
          aria-label="Close"
          onClick={toggleFileModal}
        >
          <span aria-hidden="false">&times;</span>
        </button>
      </div>
      <div className="app-modal-body">
        <form className="px-3">
          <div className="row">
            <div className="col-sm-2 font-weight-bold">Type</div>
            <div className="col-sm-10">
              <select
                className="form-control"
                id="cvFileType"
                defaultValue={fileType}
                onChange={(e) => setFileType(e.target.value)}
              >
                <option selected>CV</option>
                <option>Certifications</option>
                <option>Cover Letter</option>
                <option>Recommendation Letters</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2 font-weight-bold">File Name</div>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="cvFile"
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
              />
            </div>
          </div>
          <div className="row my-3">
            <div className="col-sm-2 font-weight-bold">File</div>
            <div className="col-sm-8">
              <input
                type="file"
                className="form-control-file"
                id="cvFile"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-danger btn-sm mr-2"
          onClick={toggleFileModal}
        >
          Close
        </button>
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
    </div>
  );
}
