import React, { createContext, useContext, useReducer } from "react";
import { useEffect } from "react";
import axios from "../api/axios";

const SearchContext = createContext();

export function useSearch() {
  return useContext(SearchContext);
}

function reducer(state, action) {
  switch (action.type) {
    case "SET_SEARCH_JOBS":
      return { ...state, searchJobsObject: action.payload };
    case "SET_JOBS":
      return { ...state, jobs: action.payload };
    case "SET_SEARCH_JOBS_ERROR":
      return { ...state, searchJobsError: action.payload };
    default:
      return state;
  }
}

const initialState = {
  searchJobsObject: null,
  searchCandidatesObject: null,
  jobs: [],
  candidates: [],
  searchJobsError: null,
};

export default function SearchContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const searchJobsObject = state.searchJobsObject;

  useEffect(() => {
    if (!searchJobsObject) return;
    async function searchJobs() {
      try {
        const { data } = await axios.post(
          "/jobs/search",
          JSON.stringify(searchJobsObject),
          {
            headers: { "Content-Type": "application/json" },
          }
        );

        if (data.length === 0) {
          dispatch({
            type: "SET_JOBS",
            payload: [],
          });
          dispatch({
            type: "SET_SEARCH_JOBS_ERROR",
            payload: "No results found",
          });
          updateError();
          return;
        }

        dispatch({
          type: "SET_JOBS",
          payload: data,
        });
      } catch (err) {
        console.log(err);
      }
    }
    searchJobs();
  }, [searchJobsObject]);

  function updateError() {
    setTimeout(() => {
      dispatch({
        type: "SET_SEARCH_JOBS_ERROR",
        payload: null,
      });
    }, 3000);
  }

  const value = {
    ...state,
    updateError,
    dispatch,
  };
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}
