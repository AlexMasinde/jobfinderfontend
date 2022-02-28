import React from "react";
import { saveAs } from "file-saver";

export default function CandidateUploadsListItemPublic({ upload }) {
  const { fileName, fileType, fileURL } = upload;

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
      </td>
    </tr>
  );
}
