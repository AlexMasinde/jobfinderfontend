import React from "react";
import BottomNavigation from "../../components/BottomNavigation/BottomNavigation";
import TopNavigation from "../../components/TopNavigation/TopNavigation";
import AboutUsComponent from "../../components/AboutUsComponent/AboutUsComponent";

export default function AboutUsPage() {
  return (
    <div className="bg-main">
      <TopNavigation />
      <BottomNavigation />
      <AboutUsComponent />
    </div>
  );
}
