import React from "react";

export default function NavUser({ setShowDropDown, showDropDown, name }) {
  function toggleDropDown() {
    setShowDropDown(!showDropDown);
  }
  return (
    <div className="text-danger pointer" onClick={toggleDropDown}>
      <a>
        <i className="fas fa-user mr-2" aria-hidden="true"></i>
        {name}
      </a>
    </div>
  );
}
