import { Link } from "react-router-dom";
import Auth from "../../components/Auth/Auth";
import LanguageMenu from "../../components/LanguageMenu/LanguageMenu";
import LinksMenu from "../../components/LinksMenu/LinksMenu";

import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="header-container">
          <div className="logo-cont">
            <div className="logo">
              <img src="/public/assets/logo.png" alt="" />
            </div>
          </div>

          <div className="middle-nav">
            <LinksMenu />

            <div className="nav-social">
              <Link
                to="https://www.youtube.com/channel/UC15bNHoYrAsQKRryzAYUTlA"
                className="nav-social-item"
              >
                <img src="/public/assets/yt.svg" alt="" />
              </Link>
              <Link
                to="https://discord.com/invite/cZa9efxJCT"
                className="nav-social-item"
              >
                <img src="/public/assets/ds.svg" alt="" />
              </Link>
              <Link to="https://t.me/IRTanks" className="nav-social-item">
                <img src="/public/assets/tg.svg" alt="" />
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
