import React, { useState } from "react";

import placeholder from "../../assets/images/placeholder.png";
import { useAuth } from "../../contexts/userContext";
import axios from "../../api/axios";
import { Link } from "react-router-dom";

export default function NavDropDown({ name, setShowDropDown, profileImage }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { setAuth } = useAuth();

  async function handleLogout() {
    if (loading) return;
    setLoading(true);
    try {
      await axios.get("/users/logout", { withCredentials: true });
      setAuth(null);
    } catch (err) {
      console.log(err);
      setError("Please try again");
      clearError();
      setLoading(false);
    }
  }

  //clear error
  function clearError() {
    setTimeout(() => {
      setError(null);
    }, 3000);
  }

  return (
    <div className="dropdown-menu dropdown-menu-right profile-notification show py-0 dropdown">
      <div className="pro-head d-flex bg-red text-white p-3 justify-content-between pointer">
        {!error && (
          <>
            <div className="d-flex">
              <img
                className="nav-image"
                src={profileImage ?? placeholder}
                alt="profile"
              />
              <span>{name}</span>
            </div>
            {loading && (
              <div class="lds-spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            )}
            {!loading && (
              <div className="dud-logout" onClick={handleLogout}>
                <i className="feather icon-log-out"></i>
              </div>
            )}
          </>
        )}
        {error && <p className="p-0">{error}</p>}
      </div>

      <div className="px-3 dropdown-hoover">
        <div className="py-2 my-2 pointer">
          <Link to="/profile">
            <i className="feather icon-user mr-2"></i>Profile
          </Link>
        </div>

        {/* <div className="py-2 my-2 pointer">
          <i className="feather icon-lock mr-2"></i>Lock Screen
        </div> */}
      </div>
    </div>
  );
}
