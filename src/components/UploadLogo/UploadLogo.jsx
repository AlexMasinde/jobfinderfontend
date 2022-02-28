import React, { useState, useRef } from "react";
import { useRecruiter } from "../../contexts/recruiterContext";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

export default function UploadLogo() {
  const axiosPrivate = useAxiosPrivate();
  const { dispatch, recruiterProfile } = useRecruiter();
  const [file, setFile] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fileRef = useRef();

  function handleFile(e) {
    if (error) {
      setError("");
    }
    const file = e.target.files[0];
    setFile(file);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!file) return setError("Please select a file to proceed");
    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);
      const { data } = await axiosPrivate.post(
        "/profiles/profile-image",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const newrecruiterProfile = { ...recruiterProfile, photoURL: data };
      dispatch({
        type: "SET_RECRUITER_PROFILE",
        payload: newrecruiterProfile,
      });
      fileRef.current.value = "";
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError("Could not upload logo! Please try again.");
      console.log(err);
    }
  }

  return (
    <div className="col-sm-6">
      <form>
        <input
          ref={fileRef}
          type="file"
          className="form-control"
          placeholder="Upload logo"
          onChange={handleFile}
        />

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right mt-3"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Uploading..." : "Upload"}
        </button>
      </form>
      {error && <p className="text-primary mt-2">{error}</p>}
    </div>
  );
}
