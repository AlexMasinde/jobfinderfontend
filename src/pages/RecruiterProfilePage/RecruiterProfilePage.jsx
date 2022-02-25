import React, { useEffect } from "react";
import BottomNavigation from "../../components/BottomNavigation/BottomNavigation";

import RecruiterProfile from "../../components/RecruiterProfile/RecruiterProfile";
import TopNavigation from "../../components/TopNavigation/TopNavigation";

export default function RecruiterProfilePage() {
  useEffect(() => {
    const allCookies = document.cookie;
    console.log(allCookies);
  });
  return (
    <div>
      <TopNavigation />
      <BottomNavigation />
      <div className="mt-4">
        <RecruiterProfile />
      </div>
    </div>
  );
}
