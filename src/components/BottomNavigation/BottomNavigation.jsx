import React from "react";

import { useAuth } from "../../contexts/userContext";

import BottomNavigationNormal from "./BottomNavigationNormal";
import BottomNavigationAuth from "./BottomNavigationAuth";

export default function BottomNavigation() {
  const { user } = useAuth();

  return (
    <div>
      {!user && <BottomNavigationNormal />}
      {user && <BottomNavigationAuth />}
    </div>
  );
}
