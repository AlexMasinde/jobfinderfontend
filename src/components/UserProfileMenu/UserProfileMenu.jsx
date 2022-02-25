import React from "react";
import { Link } from "react-router-dom";

export default function UserProfileMenu() {
  return (
    <div className="card user-profile-menu position-absolute">
      <Link to="/profile" className="nav-link">
        &#62; Update Profile
      </Link>
      <Link to="/changepassword" className="nav-link">
        &#62; Change Password
      </Link>
    </div>
  );
}
