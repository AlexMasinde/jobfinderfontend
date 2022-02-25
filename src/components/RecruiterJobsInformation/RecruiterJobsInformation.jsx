import React, { useState } from "react";
import { useRecruiter } from "../../contexts/recruiterContext";
import ModalBackground from "../ModalBackground/ModalBackground";
import RecruiterJobInformationModal from "../RecruiterJobInformationModal/RecruiterJobInformationModal";
import RecruiterJobList from "../RecruiterJobList/RecruiterJobList";

export default function RecruiterJobsInformation() {
  const { editingJob } = useRecruiter();
  const [addJob, setAddJob] = useState(false);
  function toggleAddJob() {
    console.log("toggleAddJob");
    setAddJob(true);
  }

  const showModal = addJob || editingJob;
  return (
    <div className="row container mx-auto mt-4">
      <div className="col-xl-12 col-sm-12">
        <div className="card">
          <div className="card-header bg-light border-top-alert p-3">
            <h5 className="text-primary">Jobs</h5>
            <button
              className="btn btn-rounded btn-danger btn-sm float-right"
              onClick={toggleAddJob}
            >
              Post Job
            </button>
          </div>
          <RecruiterJobList />
        </div>
      </div>
      {showModal && (
        <>
          <ModalBackground />
          <RecruiterJobInformationModal setAddJob={setAddJob} />
        </>
      )}
    </div>
  );
}
