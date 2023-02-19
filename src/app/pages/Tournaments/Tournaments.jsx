import { Link } from "react-router-dom";
import Tournament from "../../components/Reuse/Tournament/Tournament";

import "./Tournaments.css";
import "./Tournaments.adaptive.css";

const Tournaments = () => {
  return (
    <section className="main-container">
      <Link to="/tournaments" style={{ margin: "2rem 0" }}>
        <Tournament date={{ date: "31", quantity: "100" }} />
      </Link>

      <div className="tournaments-list">
        <div className="tournament-div">
          <Tournament />
        </div>
        <div className="tournament-div">
          <Tournament />
        </div>
        <div className="tournament-div">
          <Tournament />
        </div>
        <div className="tournament-div">
          <Tournament />
        </div>
      </div>
    </section>
  );
};

export default Tournaments;
