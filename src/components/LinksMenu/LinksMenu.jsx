import { useOpen } from "../../utils/hooks";
import { Link } from "react-router-dom";
import PullOut from "../PullOut/PullOut";

import menu from "../../assets/menu.svg";

import "./LinksMenu.css";

const LinksMenu = () => {
  const { isOpen, toggleOpenStatus } = useOpen();

  return (
    <div onClick={toggleOpenStatus} className="nav-links">
      <img src={menu} alt="" />

      <PullOut isOpen={isOpen}>
        <div id="burgerMenu" className="menu">
          <div className="menu-item">
            <Link to="/">Главная</Link>
          </div>
          <div className="menu-item">
            <Link to="/tournaments">Турниры</Link>
          </div>
          <div className="menu-item">
            <Link to="/admin">Админка</Link>
          </div>
          <div className="menu-item">
            <Link to="/profile">Профиль</Link>
          </div>
          {/* <div className="menu-item"><a href="spisok_turnirov.html">Список турниров</a></div>
            <div className="menu-item">Кланы</div>
            <div className="menu-item">Игроки</div>
            <div className="menu-item">Поддержка</div>
            <div className="menu-item">eSports Checker</div> */}
        </div>
      </PullOut>
    </div>
  );
};

export default LinksMenu;
