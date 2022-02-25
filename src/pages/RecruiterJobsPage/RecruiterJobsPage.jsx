import React from "react";
import BottomNavigation from "../../components/BottomNavigation/BottomNavigation";
import RecruiterJobsInformation from "../../components/RecruiterJobsInformation/RecruiterJobsInformation";
import TopNavigation from "../../components/TopNavigation/TopNavigation";

export default function RecruiterJobsPage() {
  return (
    <div>
      <TopNavigation />
      <BottomNavigation />
      <div className="mt-4">
        <RecruiterJobsInformation />
      </div>
    </div>
  );
}
