import React, { useState } from "react";
import { useRecruiter } from "../../contexts/recruiterContext";
import { useAuth } from "../../contexts/userContext";
import NavDropDown from "../NavDropDown/NavDropDown";
import NavUser from "../NavUser/NavUser";

//Component imports
import AuthComponent from "./AuthComponent";
import SearchComponent from "./SearchComponent";
import SocialsComponent from "./SocialsComponent";

export default function TopNavigation() {
  const [showDropDown, setShowDropDown] = useState(false);
  const { recruiterProfile } = useRecruiter();
  const { user } = useAuth();
  const name = user?.type === "recruiter" ? recruiterProfile.username : "User";

  return (
    <div className="top-navigation">
      <div className="position-relative container">
        <div className="d-flex align-items-center justify-content-between container">
          <div>
            <SearchComponent />
          </div>
          <div className="d-flex align-items-center py-2 ">
            <SocialsComponent />
            {user && (
              <NavUser
                setShowDropDown={setShowDropDown}
                showDropDown={showDropDown}
                name={name}
              />
            )}
            {!user && <AuthComponent />}
            {showDropDown && user && <NavDropDown />}
          </div>
        </div>
      </div>
    </div>
  );
}
