import { useOpen } from "../../utils/hooks";
import PullOut from "../PullOut/PullOut";

import "./LanguageMenu.css";

const LanguageMenu = () => {
  const { isOpen, toggleOpenStatus } = useOpen();

  return (
    <div onClick={toggleOpenStatus} className="nav-language">
      <img src="/src/app/assets/language.svg" alt="" />

      <PullOut isOpen={isOpen}>
        <div className="language-menu">
          <div className="menu-item">
            <img src="/src/app/assets/russia.svg" alt="" />
          </div>
          <div className="menu-item">
            <img src="/src/app/assets/uk.svg" alt="" />
          </div>
          <div className="menu-item">
            <img src="/src/app/assets/ua.svg" alt="" />
          </div>
        </div>
      </PullOut>
    </div>
  );
};

export default LanguageMenu;
