import ua from "../../assets/UA.png";
import settings from "../../assets/settings.png";
import bg from "../../assets/bolgaria.svg";
import top from "../../assets/top.png";
import cup from "../../assets/cup.png";
import profile from "../../assets/profile.svg";

import "./UserProfile.css";
import "./UserProfile.adaptive.css";

const UserProfile = () => {
  return (
    <div className="profile">
      <div className="profile-info-block">
        <div className="profile-img">
          <img src={profile} alt="" />
        </div>

        <div className="profile-info">
          <div className="titles">
            <h2>EzSolo</h2>
            <h3>Death Sight</h3>
          </div>

          <div className="info">
            <img src={bg} alt="" />
            <div className="statistics">
              <p>158</p>
              <p>158</p>
            </div>
          </div>
        </div>
      </div>
      <div className="profile-awards">
        <h2>Достижения</h2>
        <div className="profile-line">
          <img src={top} alt="" />
          <img src={top} alt="" />
        </div>
        <div className="profile-line line-cups">
          <img src={cup} alt="" />
          <img src={cup} alt="" />
          <img src={cup} alt="" />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
