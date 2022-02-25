import React from "react";
import BottomNavigation from "../../components/BottomNavigation/BottomNavigation";
import TopNavigation from "../../components/TopNavigation/TopNavigation";
import UserDashboard from "../../components/UserDashboard/UserDashboard";

export default function UserDashboardPage() {
  return (
    <div>
      <TopNavigation />
      <BottomNavigation />
      <div className="mt-4">
        <UserDashboard />
      </div>
    </div>
  );
}
