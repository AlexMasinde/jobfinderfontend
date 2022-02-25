import React from "react";
import BottomNavigation from "../../components/BottomNavigation/BottomNavigation";
import SearchCandidate from "../../components/SearchCandidate/SearchCandidate";
import TopNavigation from "../../components/TopNavigation/TopNavigation";

export default function CandidateSearchPage() {
  return (
    <div>
      <TopNavigation />
      <BottomNavigation />
      <div className="mt-4">
        <SearchCandidate />
      </div>
    </div>
  );
}
