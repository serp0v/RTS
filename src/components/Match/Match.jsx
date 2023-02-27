import PropTypes from "prop-types";
import player from "../../assets/player.png";

import "./Match.css";
import "./Match.adaptive.css";

const Match = ({ data }) => {
  const { firstPlayer, secondPlayer, score } = data;

  return (
    <div className="match">
      <div className="first-player player">
        <img src={player} alt="" />
        <div className="player-info">
          <h3 className="player-nickname">{firstPlayer.nickname}</h3>
          <h4 className="player-type">{firstPlayer.type}</h4>
        </div>
      </div>
      <div className="score">{score}</div>
      <div className="second-player player player-reverted">
        <img src={player} alt="" />
        <div className="player-info">
          <h3 className="player-nickname">{secondPlayer.nickname}</h3>
          <h4 className="player-type">{secondPlayer.type}</h4>
        </div>
      </div>
    </div>
  );
};

Match.propTypes = {
  data: PropTypes.object,
};

export default Match;
