import React from "react";
import { useRecruiter } from "../../contexts/recruiterContext";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

export default function RecruiterJobListItem({ job }) {
  const { dispatch, recruiterJobs } = useRecruiter();
  const axiosPrivate = useAxiosPrivate();

  const date = new Date(job.deadline);
  const status = date > new Date() ? "Active" : "Expired";

  function setEditingJob() {
    dispatch({ type: "SET_EDITING", payload: job });
  }

  async function deleteJob() {
    try {
      await axiosPrivate.delete(`/jobs/${job.id}`);
      const newJobs = recruiterJobs.filter((j) => j.id !== job.id);
      dispatch({ type: "SET_RECRUITER_JOBS", payload: newJobs });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <tr>
      <td>{job.title}</td>
      <td>{job.category}</td>
      <td>{status}</td>
      <td>{job.location}</td>
      <td>{job.deadline}</td>

      <td className="text-right">
        <button
          className="btn btn-outline-primary btn-sm mr-2"
          title="edit"
          onClick={setEditingJob}
        >
          <i className="feather icon-edit"></i>{" "}
        </button>
        <button
          className="btn btn-outline-danger btn-sm "
          title="delete"
          onClick={deleteJob}
        >
          <i className="feather icon-delete"></i>{" "}
        </button>
      </td>
    </tr>
  );
}
