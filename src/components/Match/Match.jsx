import PropTypes from "prop-types";

import "./Match.css";
import "./Match.adaptive.css";

const Match = ({ data }) => {
  const { id, matchInfo, firstPlayer, secondPlayer, score } = data;

  return (
    <div className="match">
      <div className="match-id">Match #{id}</div>
      <div className="match-name">
        {matchInfo.name} <br /> {matchInfo.date}
      </div>
      <div className="match-info">
        <div className="player first-player">{firstPlayer.nickname}</div>
        <div className="score">{score}</div>
        <div className="player second-player">{secondPlayer.nickname}</div>
      </div>
    </div>
  );
};

Match.propTypes = {
  data: PropTypes.object,
};

export default Match;
