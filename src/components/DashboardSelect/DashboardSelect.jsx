import React from "react";
import { useAuth } from "../../contexts/userContext";
import RecruiterDashboard from "../../pages/RecruiterDashboard/RecruiterDashboard";
import UserDashboardPage from "../../pages/UserDashboardPage/UserDashboardPage";
import UserDashboard from "../UserDashboard/UserDashboard";

export default function DashboardSelect() {
  const { user } = useAuth();
  return (
    <>
      {user.type === "candidate" ? (
        <UserDashboardPage />
      ) : (
        <RecruiterDashboard />
      )}
    </>
  );
}
