import React from "react";
import { useAuth } from "../../contexts/userContext";
import CandidateProfilePage from "../../pages/CandidateProfilePage/CandidateProfilePage";
import RecruiterProfilePage from "../../pages/RecruiterProfilePage/RecruiterProfilePage";

export default function ProfilePageSelect() {
  const { user } = useAuth();
  const isRecruiter = user.type === "recruiter";
  return (
    <div>
      {isRecruiter ? <RecruiterProfilePage /> : <CandidateProfilePage />}
    </div>
  );
}
