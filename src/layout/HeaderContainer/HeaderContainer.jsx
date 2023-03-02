import { useLocation } from "react-router-dom";

import Header from "../Header/Header";

import tanks from "../../assets/tanks.mp4";

import "./HeaderContainer.css";
import "./HeaderContainer.adaptive.css";

const HeaderContainer = () => {
  const { pathname } = useLocation();

  const isHome = pathname === "/";

  return (
    <header
      className="header"
      style={{ backgroundColor: isHome ? "inherit" : "#2E3136" }}
    >
      {isHome ? (
        <div className="container-video">
          <Header />

          <video muted autoPlay loop>
            <source src={tanks} type="video/mp4" />
          </video>

          <div className="play-btn">
            <button>Play now</button>
          </div>
        </div>
      ) : (
        <Header />
      )}
    </header>
  );
};

export default HeaderContainer;

/* 

*/
