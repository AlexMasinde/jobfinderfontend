import { useContext, createContext, useReducer, useEffect } from "react";
import axios from "../api/axios";
import { useAuth } from "./userContext";

const CandidateContext = createContext();

export function useCandidate() {
  return useContext(CandidateContext);
}

function reducer(state, action) {
  switch (action.type) {
    case "SET_CANDIDATE_PROFILE":
      return { ...state, candidateProfile: action.payload };
    case "SET_CANDIDATE_EDUCATION":
      return { ...state, candidateEducation: action.payload };
    case "SET_CANDIDATE_EXPERIENCE":
      return { ...state, candidateExperience: action.payload };
    case "SET_CANDIDATE_UPLOADS":
      return { ...state, candidateUploads: action.payload };
    case "SET_EDITING_EDUCATION":
      return { ...state, editingEducation: action.payload };
    case "SET_EDITING_EXPERIENCE":
      return { ...state, editingExperience: action.payload };
    default:
      return state;
  }
}

const initialState = {
  candidateProfile: {},
  candidateExperience: [],
  candidateEducation: [],
  candidateUploads: [],
  editingEducation: null,
  editingExperience: null,
};

export default function CandidateContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;
    if (user?.type !== "candidate") return;

    let isMounted = true;
    const controller = new AbortController();

    async function fetchCandidate() {
      try {
        const { data } = await axios.get(
          `/profiles/candidate-profile/${user.userId}`,
          {
            signal: controller.signal,
          }
        );

        const { username, email, emailverified } = data;
        const candidateProfile = {
          ...data.candidate[0],
          username,
          email,
          emailverified,
        };

        if (isMounted) {
          dispatch({
            type: "SET_CANDIDATE_PROFILE",
            payload: candidateProfile,
          });
          dispatch({
            type: "SET_CANDIDATE_EDUCATION",
            payload: data.candidateEducation,
          });
          dispatch({
            type: "SET_CANDIDATE_EXPERIENCE",
            payload: data.candidateExperience,
          });
          dispatch({
            type: "SET_CANDIDATE_UPLOADS",
            payload: data.candidateUploads,
          });
        }
      } catch (err) {
        console.log(err);
      }
    }

    fetchCandidate();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [user]);

  const value = {
    ...state,
    dispatch,
  };

  return (
    <CandidateContext.Provider value={value}>
      {console.log(user)}
      {children}
    </CandidateContext.Provider>
  );
}
