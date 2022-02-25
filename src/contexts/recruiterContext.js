import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "../api/axios";
import { useAuth } from "./userContext";

const RecruiterContext = createContext();

export function useRecruiter() {
  return useContext(RecruiterContext);
}

function reducer(state, action) {
  switch (action.type) {
    case "SET_RECRUITER_PROFILE":
      return { ...state, recruiterProfile: action.payload };
    case "SET_RECRUITER_JOBS":
      return { ...state, recruiterJobs: action.payload };
    case "SET_EDITING":
      return { ...state, editingJob: action.payload };
    default: {
      return { ...state };
    }
  }
}

const initialState = {
  recruiterProfile: {},
  recruiterJobs: [],
  editingJob: null,
};

export default function RecruiterContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { user } = useAuth();

  //fetch recruiter details
  useEffect(() => {
    if (!user) return;
    if (user?.type !== "recruiter") return;
    let isMounted = true;
    const controller = new AbortController();

    async function fetchrecruiterprofile() {
      try {
        const { data } = await axios.get(
          `/profiles/recruiter-profile/${user.userId}`,
          {
            signal: controller.signal,
          }
        );

        console.log(data);

        const { email, username, emailverified } = data;
        const recruiterProfile = {
          ...data.recruiter[0],
          primaryMail: email,
          username,
          emailverified,
        };

        const recruiterJobs = data.jobs;

        if (isMounted) {
          dispatch({
            type: "SET_RECRUITER_PROFILE",
            payload: recruiterProfile,
          });
          dispatch({ type: "SET_RECRUITER_JOBS", payload: recruiterJobs });
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchrecruiterprofile();

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
    <RecruiterContext.Provider value={value}>
      {children}
    </RecruiterContext.Provider>
  );
}
