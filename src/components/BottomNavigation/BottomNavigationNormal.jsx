import React, { useState } from "react";

import { Link } from "react-router-dom";

//icon imports
import abouticon from "../../assets/icons/bookwhite.svg";
import homeicon from "../../assets/icons/homewhite.svg";
import contacticon from "../../assets/icons/mailwhite.svg";
import searchicon from "../../assets/icons/searchwhite.svg";
import shieldicon from "../../assets/icons/shield.svg";
import usericon from "../../assets/icons/user.svg";
import { useAuth } from "../../contexts/userContext";
import UserProfileMenu from "../UserProfileMenu/UserProfileMenu";

export default function BottomNavigationNormal() {
  const [showUserProfileMenu, setShowUserProfileMenu] = useState(false);
  const { user } = useAuth();

  const recruiterLinks = [
    {
      name: "Dashboard",
      icon: homeicon,
      url: "/dashboard",
    },
    {
      name: "Messages",
      icon: contacticon,
      url: "/inbox",
    },
    {
      name: "My Jobs",
      icon: shieldicon,
      url: "/recruiterjobs",
    },
    {
      name: "My Account",
      icon: usericon,
      url: "/recruiterprofile",
    },
    {
      name: "Search Candidates",
      icon: searchicon,
      url: "/candidatesearch",
    },
  ];

  const candidateLinks = [
    {
      name: "Dashboard",
      icon: homeicon,
      url: "/dashboard",
    },
    {
      name: "Messages",
      icon: contacticon,
      url: "/inbox",
    },
    {
      name: "My Account",
      icon: usericon,
      url: "/profile",
    },
    {
      name: "Search for Jobs",
      icon: searchicon,
      url: "/jobsearch",
    },
  ];

  return (
    <div className="bottomNavigationContainer">
      <div className="navigationLinkContainer">
        <Link to="/" className="linkContainer">
          <div className="linkImage">
            <i className="feather icon-home text-white"></i>
          </div>
          <div className="text-white ml-2">Home</div>
        </Link>
        <Link to="/jobsearch" className="linkContainer">
          <div className="linkImage">
            <i className="feather icon-search text-white"></i>
          </div>
          <div className="text-white ml-2">Search for Jobs</div>
        </Link>
        <Link to="/about" className="linkContainer">
          <div className="linkImage">
            <i className="feather icon-book text-white"></i>
          </div>
          <div className="text-white ml-2">About Us</div>
        </Link>
        <Link to="/contact" className="linkContainer">
          <div className="linkImage">
            <i className="feather icon-mail text-white"></i>
          </div>
          <div className="text-white ml-2">Contact Us</div>
        </Link>
      </div>
    </div>
  );
}
