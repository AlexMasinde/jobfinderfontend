import React from "react";
import { useCandidate } from "../../contexts/candidateContext";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import dateDifference from "../../utils/findDateDifference";

export default function CandidateExperienceListItem({ experience }) {
  const { dispatch, candidateExperience } = useCandidate();
  const { employer, position, from, to, remark } = experience;

  const axiosPrivate = useAxiosPrivate();

  const difference = dateDifference(from, to);

  function setEditingExperience() {
    dispatch({
      type: "SET_EDITING_EXPERIENCE",
      payload: experience,
    });
  }

  async function handleDelete() {
    try {
      await axiosPrivate.delete(
        `/profiles/candidate-experience/${experience.id}`
      );
      const newExperienceList = candidateExperience.filter(
        (listItem) => listItem.id !== experience.id
      );
      dispatch({
        type: "SET_CANDIDATE_EXPERIENCE",
        payload: newExperienceList,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <tr>
      <td>
        <div className="d-inline-block align-middle">
          <div className="d-inline-block">
            <h6>{employer}</h6>
            <p className="text-muted m-b-0 m-l-5">{position}</p>
          </div>
        </div>
      </td>
      <td>{from}</td>
      <td>{to}</td>
      <td>{difference}</td>
      <td>
        <label className="text-muted small">
          <i>{remark}</i>
        </label>
      </td>
      <td className="text-right">
        <button
          className="btn btn-outline-primary btn-sm mr-2"
          title="edit"
          onClick={setEditingExperience}
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
