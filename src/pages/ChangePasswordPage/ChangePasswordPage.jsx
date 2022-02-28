import React from "react";
import BottomNavigation from "../../components/BottomNavigation/BottomNavigation";
import TopNavigation from "../../components/TopNavigation/TopNavigation";
import ChangePassword from "../ChangePassword/ChangePassword";

export default function ChangePasswordPage() {
  return (
    <div>
      <TopNavigation />
      <BottomNavigation />
      <ChangePassword />
    </div>
  );
}
