import { Link } from "react-router-dom";
import Auth from "../../components/Header/Auth/Auth";
import LanguageMenu from "../../components/Header/LanguageMenu/LanguageMenu";
import LinksMenu from "../../components/Header/LinksMenu/LinksMenu";

import logo from "../../../assets/logo.png";
import yt from "../../../assets/yt.svg";
import ds from "../../../assets/ds.svg";
import tg from "../../../assets/tg.svg";

import "./Header.css";
import "./Header.adaptive.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="header-container">
          <div className="logo-cont">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
          </div>

          <div className="middle-nav">
            <LinksMenu />

            <div className="nav-social">
              <Link
                to="https://www.youtube.com/channel/UC15bNHoYrAsQKRryzAYUTlA"
                className="nav-social-item"
              >
                <img src={yt} alt="" />
              </Link>
              <Link
                to="https://discord.com/invite/cZa9efxJCT"
                className="nav-social-item"
              >
                <img src={ds} alt="" />
              </Link>
              <Link to="https://t.me/IRTanks" className="nav-social-item">
                <img src={tg} alt="" />
              </Link>
            </div>

            <LanguageMenu />
          </div>

          <Auth />

          {/* <div id="headerProfile" className="header-profile dn">
            <div className="profile-image"></div>
            <div className="header-profile-text">
              <div className="nickname">EzSolo</div>
              <div id="exit" className="exit">
                Выйти
              </div>
            </div>
          </div> */}
        </nav>
      </header>
    </>
  );
};

export default Header;
