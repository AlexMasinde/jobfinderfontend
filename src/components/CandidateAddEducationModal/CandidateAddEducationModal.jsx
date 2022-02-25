import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useCandidate } from "../../contexts/candidateContext";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { institutions } from "../../utils/lists";

export default function CandidateAddEducationModal({ setAddEducation }) {
  const { dispatch, candidateEducation, editingEducation } = useCandidate();
  const [institution, setInstitution] = useState(
    editingEducation?.institution || "University of Nairobi"
  );
  const [course, setCourse] = useState(editingEducation?.course || "");
  const [level, setLevel] = useState(editingEducation?.level || "");
  const [dateCompleted, setDateCompleted] = useState(
    editingEducation?.dateCompleted || "2020-01-01"
  );
  const [qualification, setQualification] = useState(
    editingEducation?.qualification || ""
  );

  const axiosPrivate = useAxiosPrivate();

  function handleInstitution(e) {
    setInstitution(e.target.value);
  }

  function handleCourse(e) {
    setCourse(e.target.value);
  }

  function handleLevel(e) {
    setLevel(e.target.value);
  }

  function handleDateCompleted(e) {
    setDateCompleted(e.target.value);
  }

  function handleQualification(e) {
    setQualification(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const id = editingEducation?.id || `${uuidv4()}${Date.now()}`;

    const dataObject = {
      id,
      institution,
      course,
      level,
      dateCompleted,
      qualification,
    };

    try {
      const { data } = await axiosPrivate.post(
        "/profiles/candidate-education",
        JSON.stringify(dataObject)
      );

      function newEducationArray() {
        if (editingEducation) {
          return candidateEducation.map((education) => {
            if (education.id === editingEducation.id) {
              return data;
            } else {
              return education;
            }
          });
        } else {
          return [...candidateEducation, data];
        }
      }

      const newEducationList = newEducationArray();
      dispatch({
        type: "SET_CANDIDATE_EDUCATION",
        payload: newEducationList,
      });
      toggleEducationModal();
    } catch (error) {
      console.log(error);
    }
  }

  function toggleEducationModal() {
    setAddEducation(false);
    if (editingEducation) {
      dispatch({
        type: "SET_EDITING_EDUCATION",
        payload: null,
      });
    }
  }
  return (
    <div className="card modal-container">
      <div className="modal-header">
        <h5 className="modal-title">New Education Information...</h5>
        <button
          type="button"
          className="close basic-close"
          onClick={toggleEducationModal}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="app-modal-body text-center">
        <form>
          <div className="input-group">
            <span className="input-group-prepend" id="basic-addon1">
              <label className="input-group-text">Institution</label>
            </span>
            <select
              className="form-control"
              formControlName="educInstitution"
              defaultValue={institution}
              onChange={handleInstitution}
            >
              {institutions.map((institution) => (
                <option key={institution}>{institution}</option>
              ))}
            </select>
          </div>
          <div className="input-group">
            <span className="input-group-prepend" id="basic-addon2">
              <label className="input-group-text">Course</label>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Course taken"
              value={course}
              onChange={handleCourse}
            />
          </div>
          <div className="input-group">
            <span className="input-group-prepend" id="basic-addon3">
              <label className="input-group-text">Level</label>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Education level"
              value={level}
              onChange={handleLevel}
            />
          </div>
          <div className="input-group">
            <span className="input-group-prepend" id="basic-addon4">
              <label className="input-group-text">Completion Date</label>
            </span>
            <input
              type="date"
              className="form-control"
              placeholder="Date completed"
              defaultValue={dateCompleted}
              onChange={handleDateCompleted}
            />
          </div>
          <div className="input-group">
            <span className="input-group-prepend" id="basic-addon5">
              <label className="input-group-text">Qualification</label>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Grades attained"
              value={qualification}
              onChange={handleQualification}
            />
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-danger btn-sm mr-2"
          onClick={toggleEducationModal}
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
