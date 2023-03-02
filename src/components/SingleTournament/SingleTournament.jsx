import PropTypes from "prop-types";

import tour from "../../assets/tour.png";

import "./SingleTournament.css";

const SingleTournament = ({ data }) => {
  return (
    <div className="single-tournament">
      <div className="tour-date">{data.date}</div>
      <div className="tour-info">
        <img src={tour} alt="" />
        <h3>{data.title}</h3>
      </div>
    </div>
  );
};

SingleTournament.propTypes = {
  data: PropTypes.object,
};

export default SingleTournament;
