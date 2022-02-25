import React from "react";
import { Link } from "react-router-dom";

export default function AuthComponent() {
  return (
    <div>
      <Link to="/signin">
        <button className="btn btn-success text-white btn-sm mr-2">
          Sign In
        </button>
      </Link>
      <Link to="/signup">
        <button className="btn btn-warning text-white btn-sm">Sign Up</button>
      </Link>
    </div>
  );
}
