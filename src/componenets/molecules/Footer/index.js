import React from "react";
import {
  LogoBg,
  ICFacebook,
  ICInstagram,
  ICTelegram,
  ICTwitter,
  ICWhatsup,
  ICYoutube,
} from "../../../Assets";

import "./footer.scss";

const Icon = ({ img }) => {
  return (
    <div className="icon-wraper">
      <img className="icon-medsos" src={img} alt="icon" />
    </div>
  );
};
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div>
          <img className="logo" src={LogoBg} />
        </div>
        <div className="social-wraper">
          <Icon img={ICFacebook} />
          <Icon img={ICTwitter} />
          <Icon img={ICInstagram} />
          <Icon img={ICTelegram} />
          <Icon img={ICWhatsup} />
          <Icon img={ICYoutube} />
        </div>
      </div>
      <div className="copyright">
        <p>Copyright</p>
      </div>
    </div>
  );
};

export default Footer;
