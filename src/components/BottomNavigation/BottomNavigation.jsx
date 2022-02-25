import React from "react";

import { useAuth } from "../../contexts/userContext";

import BottomNavigationNormal from "./BottomNavigationNormal";
import BottomNavigationAuth from "./BottomNavigationAuth";

export default function BottomNavigation() {
  const { user } = useAuth();
  const recruiter = user && user.type === "recruiter";
  const candidate = user && user.type === "candidate";

  return (
    <div>
      {!user && <BottomNavigationNormal />}
      {user && <BottomNavigationAuth />}
    </div>
  );
}
