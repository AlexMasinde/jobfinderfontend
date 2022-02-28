import React from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useCandidate } from "../../contexts/candidateContext";
import { saveAs } from "file-saver";

export default function CandidateUploadsListItem({ upload }) {
  const { dispatch, candidateUploads } = useCandidate();
  const { fileName, fileType, fileURL } = upload;
  const axiosPrivate = useAxiosPrivate();

  async function deleteFile() {
    try {
      await axiosPrivate.delete(`/profiles/candidate-uploads/${upload.id}`);
      const newCandidateUploads = candidateUploads.filter(
        (listItem) => listItem.id !== upload.id
      );
      dispatch({
        type: "SET_CANDIDATE_UPLOADS",
        payload: newCandidateUploads,
      });
    } catch (err) {
      console.log(err);
    }
  }

  function downloadFile() {
    saveAs(fileURL, fileName);
  }

  return (
    <tr>
      <td className="font-weight-bold">{fileType}</td>
      {console.log(upload)}
      <td>{fileName}</td>
      <td className="text-right">
        <button
          className="btn btn-sm btn-outline-primary mr-2"
          onClick={downloadFile}
        >
          <i className="fas fa-download"></i> Download
        </button>
        <button className="btn btn-outline-danger btn-sm" onClick={deleteFile}>
          <i className="feather icon-delete"></i> Delete
        </button>
      </td>
    </tr>
  );
}
