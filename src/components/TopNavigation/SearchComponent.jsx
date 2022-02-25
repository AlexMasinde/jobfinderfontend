import React from "react";

//Icon imports
import searchIcon from "../../assets/icons/search.svg";

export default function SearchComponent() {
  return (
    <div>
      <img
        src={searchIcon}
        alt="Seacrhc"
        style={{ width: "20px", height: "20px", cursor: "pointer" }}
      />
    </div>
  );
}
