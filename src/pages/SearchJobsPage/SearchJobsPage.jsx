import React from "react";
import BottomNavigation from "../../components/BottomNavigation/BottomNavigation";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import TopNavigation from "../../components/TopNavigation/TopNavigation";

export default function SearchJobsPage() {
  return (
    <div className="bg-main">
      <TopNavigation />
      <BottomNavigation />
      <SearchComponent />
    </div>
  );
}
