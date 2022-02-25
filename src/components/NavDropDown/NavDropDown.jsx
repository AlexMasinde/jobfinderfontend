import React from "react";

import placeholder from "../../assets/images/logo.png";

export default function NavDropDown() {
  return (
    <div className="dropdown-menu dropdown-menu-right profile-notification show py-0 dropdown">
      <div className="pro-head d-flex bg-red text-white p-3 justify-content-between pointer">
        <div className="d-flex">
          <img className="nav-image" src={placeholder} alt="profile" />
          <span>User</span>
        </div>
        <div className="dud-logout ">
          <i className="feather icon-log-out"></i>
        </div>
      </div>
      <div className="px-3 dropdown-hoover">
        <div className="py-2 my-2 pointer">
          <i className="feather icon-user mr-2"></i>Profile
        </div>

        <div className="py-2 my-2 pointer">
          <i className="feather icon-lock mr-2"></i>Lock Screen
        </div>
      </div>
    </div>
  );
}
