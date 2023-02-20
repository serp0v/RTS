import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./Tournament.css";

const Tournament = ({ tournament = {}, date, style }) => {
  const {
    id = 0,
    title = "SUKA",
    tankClass = "SUKA",
    subtitle = "SUKA",
  } = tournament;

  return (
    <Link to={`/tournaments/${id}`}>
      <div className="tournament" style={style}>
        <div className="tournament-title">
          <p className="title-news">
            {title}
            <span className="tank-class">{tankClass}</span>
          </p>
          <div className="subtitle">
            <p>{subtitle}</p>
          </div>
        </div>
        {date ? (
          <div className="date-box">
            <p className="date">{date.date}</p>
            <p className="quantity">{date.quantity}</p>
          </div>
        ) : null}
      </div>
    </Link>
  );
};

Tournament.propTypes = {
  tournament: PropTypes.object,
  date: PropTypes.object,
  style: PropTypes.object,
};

export default Tournament;
