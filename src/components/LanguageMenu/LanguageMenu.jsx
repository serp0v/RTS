import { useOpen } from "../../utils/hooks";
import PullOut from "../Reuse/PullOut/PullOut";

import lang from "../../assets/language.svg";
import russia from "../../assets/russia.svg";
import uk from "../../assets/uk.svg";
import ua from "../../assets/ua.svg";

import "./LanguageMenu.css";

const LanguageMenu = () => {
  const { isOpen, toggleOpenStatus } = useOpen();

  return (
    <div onClick={toggleOpenStatus} className="nav-language">
      <img src={lang} alt="" />

      <PullOut isOpen={isOpen}>
        <div className="language-menu">
          <div className="menu-item">
            <img src={russia} alt="" />
          </div>
          <div className="menu-item">
            <img src={uk} alt="" />
          </div>
          <div className="menu-item">
            <img src={ua} alt="" />
          </div>
        </div>
      </PullOut>
    </div>
  );
};

export default LanguageMenu;
