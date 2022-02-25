import React from "react";

//Components
import BottomNavigation from "../../components/BottomNavigation/BottomNavigation";
import BrowseCategories from "../../components/BrowseCategories/BrowseCategories";
import LatestJobs from "../../components/LastestJobs/LatestJobs";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
// import SubscribeToNewsLetter from "../../components/SubscribeToNewsletter/SubscribeToNewsLetter";
import TopNavigation from "../../components/TopNavigation/TopNavigation";

export default function HomePage() {
  return (
    <div className="bg-main">
      <TopNavigation />
      <BottomNavigation />
      <SearchComponent />
      {/* <div className="d-flex justify-content-between container padding-0 my-4"> */}
      <LatestJobs />
      {/* </div> */}
      <BrowseCategories />
    </div>
  );
}
