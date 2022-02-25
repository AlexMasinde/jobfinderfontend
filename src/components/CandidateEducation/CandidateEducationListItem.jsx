import React from "react";
import { useCandidate } from "../../contexts/candidateContext";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

export default function CandidateEducationListItem({ education }) {
  const { dispatch, candidateEducation } = useCandidate();
  const axiosPrivate = useAxiosPrivate();
  const { course, dateCompleted, level, qualification, institution } =
    education;

  function setEditingEducation() {
    dispatch({
      type: "SET_EDITING_EDUCATION",
      payload: education,
    });
  }

  async function handleDelete() {
    try {
      await axiosPrivate.delete(
        `/profiles/candidate-education/${education.id}`
      );

      const newEducationList = candidateEducation.filter(
        (listItem) => listItem.id !== education.id
      );

      dispatch({
        type: "SET_CANDIDATE_EDUCATION",
        payload: newEducationList,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <tr>
      <td>
        <div className="d-inline-block align-middle">
          <img
            src="assets/images/user/avatar-4.jpg"
            alt="designer-profile"
            className="img-radius wid-40 align-top m-r-15 hidden"
          />
          <div className="d-inline-block">
            <h6>{institution}</h6>
            <p className="text-muted m-b-0 m-l-5">{course}</p>
          </div>
        </div>
      </td>
      <td>{level}</td>
      <td>{dateCompleted}</td>
      <td>
        <label className="badge badge-light-info">{qualification}</label>
      </td>
      <td className="text-right">
        <button
          className="btn btn-outline-primary btn-sm mr-2"
          title="edit"
          onClick={setEditingEducation}
        >
          <i className="feather icon-edit"></i>
        </button>
        <button
          className="btn btn-outline-danger btn-sm"
          title="delete"
          onClick={handleDelete}
        >
          <i className="feather icon-delete"></i>
        </button>
      </td>
    </tr>
  );
}
