import React from "react";

import { socialIcons } from "../../../../img/index";

function SocialLinks() {
  return (
    <ul className="Social-links">
      <li>
        <a href="https://t.me/ddma_official" target="_blank" rel="noreferrer">
          <img src={socialIcons.telegramIco} alt="" />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/ddma_official/" target="_blank" rel="noreferrer">
          <img src={socialIcons.instagramIco} alt="" />
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/ddma.kramatorsk/" target="_blank" rel="noreferrer">
          <img src={socialIcons.facebookIco} alt="" />
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/user/mediagrupaAcademia" target="_blank" rel="noreferrer">
          <img src={socialIcons.youtubeIco} alt="" />
        </a>
      </li>
    </ul>
  );
}

export default SocialLinks;
