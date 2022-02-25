import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../../contexts/userContext";
import UserProfileMenu from "../UserProfileMenu/UserProfileMenu";

export default function BottomNavigationAuth() {
  const [showUserProfileMenu, setShowUserProfileMenu] = useState(false);
  const { user } = useAuth();

  const isRecruiter = user.type === "recruiter";
  const isCandidate = user.type === "candidate";

  function renderUserMenu() {
    if (!showUserProfileMenu) {
      setShowUserProfileMenu(true);
    }
  }

  function removeUserMenu() {
    if (setShowUserProfileMenu) {
      setShowUserProfileMenu(false);
    }
  }

  return (
    <div className="bottomNavigationContainer">
      <div className="navigationLinkContainer">
        <Link to="/dashboard" className="linkContainer">
          <div className="linkImage">
            <i className="feather icon-home text-white"></i>
          </div>
          <div className="text-white ml-2">Dashboard</div>
        </Link>
        <Link to="/inbox" className="linkContainer">
          <div className="linkImage">
            <i className="feather icon-mail text-white"></i>
          </div>
          <div className="text-white ml-2">Messages</div>
        </Link>
        {isRecruiter && (
          <Link to="/recruiterjobs" className="linkContainer">
            <div className="linkImage">
              <i className="feather icon-shield text-white"></i>
            </div>
            <div className="text-white ml-2">My Jobs</div>
          </Link>
        )}
        <div
          onMouseOver={renderUserMenu}
          onMouseLeave={removeUserMenu}
          className="linkContainer user-menu"
        >
          <div className="linkImage">
            <i className="feather icon-user text-white"></i>
          </div>
          <div className="text-white ml-2">My Account</div>
          {showUserProfileMenu && (
            <div className="user-profile-menu-container">
              <UserProfileMenu />
            </div>
          )}
        </div>
        {isCandidate && (
          <Link to="/jobsearch" className="linkContainer">
            <div className="linkImage">
              <i className="feather icon-search text-white"></i>
            </div>
            <div className="text-white ml-2">Search for Jobs</div>
          </Link>
        )}
        {isRecruiter && (
          <Link to="/candidatesearch" className="linkContainer">
            <div className="linkImage">
              <i className="feather icon-search text-white"></i>
            </div>
            <div className="text-white ml-2">Search Candidates</div>
          </Link>
        )}
      </div>
    </div>
  );
}
