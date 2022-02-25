import React from "react";
import BottomNavigation from "../../components/BottomNavigation/BottomNavigation";
import RecruiterDashboardHeader from "../../components/RecruiterDashboardHeader/RecruiterDashboardHeader";
import TopNavigation from "../../components/TopNavigation/TopNavigation";

export default function RecruiterDashboard() {
  return (
    <div>
      <TopNavigation />
      <BottomNavigation />
      <div className="mt-4">
        <RecruiterDashboardHeader />
      </div>
    </div>
  );
}
