import React from "react";

//icon imports
import facebookicon from "../../assets/icons/facebook.svg";
import instagramicon from "../../assets/icons/instagram.svg";
import twittericon from "../../assets/icons/twitter.svg";

export default function SocialsComponent() {
  return (
    <div className="navigationIcons mr-4">
      <a href="http://www.facebook.com" target="blank">
        <img src={facebookicon} alt={facebookicon.split("i")[1]} />
      </a>
      <a className="ml-2" href="http://www.twitter.com" target="blank">
        <img src={twittericon} alt={twittericon.split("i")[1]} />
      </a>
      <a className="ml-2" href="http://www.instagram.com" target="blank">
        <img src={instagramicon} alt={instagramicon.split("i")[1]} />
      </a>
    </div>
  );
}
