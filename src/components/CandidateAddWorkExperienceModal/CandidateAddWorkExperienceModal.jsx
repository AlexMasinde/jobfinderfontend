import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useCandidate } from "../../contexts/candidateContext";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

export default function CandidateAddWorkExperienceModal({
  setAddWorkExperience,
}) {
  const { editingExperience, dispatch, candidateExperience } = useCandidate();
  const [employer, setEmployer] = useState(editingExperience?.employer || "");
  const [position, setPosition] = useState(editingExperience?.position || "");
  const [from, setFrom] = useState(editingExperience?.from || "2020-01-01");
  const [to, setTo] = useState(editingExperience?.to || "2020-01-01");
  const [remark, setRemark] = useState(editingExperience?.remark || "");

  const axiosPrivate = useAxiosPrivate();

  async function handleSubmit(e) {
    e.preventDefault();
    const id = editingExperience?.id || `${uuidv4()}${Date.now()}`;
    const dataObject = {
      id,
      employer,
      position,
      from,
      to,
      remark,
    };

    try {
      const { data } = await axiosPrivate.post(
        "/profiles/candidate-experience",
        JSON.stringify(dataObject)
      );

      function newExperienceArray() {
        if (editingExperience) {
          return candidateExperience.map((experience) => {
            if (experience.id === editingExperience.id) {
              return data;
            } else {
              return experience;
            }
          });
        } else {
          return [...candidateExperience, data];
        }
      }

      const newExperienceList = newExperienceArray();

      dispatch({
        type: "SET_CANDIDATE_EXPERIENCE",
        payload: newExperienceList,
      });
      toggleWorkExperienceModal();
    } catch (error) {
      console.log(error);
    }
  }

  function toggleWorkExperienceModal() {
    setAddWorkExperience(false);
    if (editingExperience) {
      dispatch({
        type: "SET_EDITING_EXPERIENCE",
        payload: null,
      });
    }
  }
  return (
    <div className="modal-container card">
      <div className="modal-header">
        <h5 className="modal-title">New Work Experience...</h5>
        <button
          type="button"
          className="close basic-close"
          onClick={toggleWorkExperienceModal}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="app-modal-body">
        <form>
          <div className="input-group">
            <span className="input-group-prepend" id="basic-addon1">
              <label className="input-group-text">Employer</label>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Name of the employer"
              value={employer}
              onChange={(e) => setEmployer(e.target.value)}
            />
          </div>
          <div className="input-group">
            <span className="input-group-prepend" id="basic-addon2">
              <label className="input-group-text">Position</label>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Position held"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </div>
          <div className="input-group">
            <span className="input-group-prepend" id="basic-addon4">
              <label className="input-group-text">From</label>
            </span>
            <input
              type="date"
              className="form-control"
              placeholder="Start of new position"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
          </div>
          <div className="input-group">
            <span className="input-group-prepend" id="basic-addon4">
              <label className="input-group-text">To</label>
            </span>
            <input
              type="date"
              className="form-control"
              placeholder="End of the position "
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
          </div>
          <div className="input-group">
            <span className="input-group-prepend" id="basic-addon5">
              <label className="input-group-text">Remarks</label>
            </span>
            <input
              type="text"
              className="form-control"
              multiple="3"
              placeholder="Performance Achievements"
              value={remark}
              onChange={(e) => setRemark(e.target.value)}
            />
          </div>
        </form>
      </div>

      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-danger btn-sm mr-2"
          onClick={toggleWorkExperienceModal}
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
