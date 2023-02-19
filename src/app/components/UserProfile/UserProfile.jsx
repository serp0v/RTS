import ua from "../../../assets/UA.png";
import settings from "../../../assets/settings.png";
import top from "../../../assets/top.png";
import cup from "../../../assets/cup.png";

import "./UserProfile.css";
import "./UserProfile.adaptive.css";

const UserProfile = () => {
  return (
    <div className="profile">
      <div className="profile-info-block">
        <div className="profile-img"></div>
        <div className="profile-info">
          <div className="row title-row">
            <h2 className="profile-title">Консерватор</h2>
            <img src={ua} alt="" />
          </div>
          <div className="row subtitle-row">
            <h3 className="profile-subtitle">Conservative</h3>
            <div className="statistics">
              <p>124</p>
              <p>845</p>
            </div>
          </div>
          <button className="profile-settings">
            Settings
            <img src={settings} alt="" />
          </button>
        </div>
      </div>
      <div className="profile-awards">
        <div className="profile-line">
          <img src={top} alt="" />
        </div>
        <div className="profile-line">
          <img src={cup} alt="" />
          <img src={cup} alt="" />
          <img src={cup} alt="" />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
