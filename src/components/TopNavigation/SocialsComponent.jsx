import React from "react";

//icon imports
import facebookicon from "../../assets/icons/facebook.svg";
import instagramicon from "../../assets/icons/instagram.svg";
import twittericon from "../../assets/icons/twitter.svg";

export default function SocialsComponent() {
  const icons = [facebookicon, twittericon, instagramicon];
  return (
    <div className="navigationIcons mr-4">
      {icons.map((icon) => {
        return <img src={icon} alt={icon.split("i")[1]} key={icon} />;
      })}
    </div>
  );
}
