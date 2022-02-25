import React, { useState } from "react";
import { useRecruiter } from "../../contexts/recruiterContext";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

export default function UploadLogo() {
  const axiosPrivate = useAxiosPrivate();
  const { dispatch, recruiterProfile } = useRecruiter();
  const [file, setFile] = useState();

  function handleFile(e) {
    const file = e.target.files[0];
    setFile(file);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);

    try {
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
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="col-sm-6">
      <form>
        <input
          type="file"
          className="form-control"
          placeholder="Upload logo"
          onChange={handleFile}
        />
        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right mt-3"
          onClick={handleSubmit}
        >
          Upload
        </button>
      </form>
    </div>
  );
}
