import PropTypes from "prop-types";

import "./Tournament.css";

const Tournament = ({ date }) => {
  return (
    <div className="tournament">
      <div className="tournament-title">
        <p className="title-news">
          Firebird Reborn <span className="tank-class">HF WF</span>
        </p>
        <div className="subtitle">
          <p>Sandbox</p>
          <p>2-2</p>
        </div>
      </div>
      {date ? (
        <div className="date-box">
          <p className="date">{date.date}</p>
          <p className="quantity">{date.quantity}</p>
        </div>
      ) : null}
    </div>
  );
};

Tournament.propTypes = {
  date: PropTypes.object,
};

export default Tournament;
