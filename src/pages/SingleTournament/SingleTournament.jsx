import Participants from "../../components/Participants/Participants";
import TournamentInfo from "../../components/TournamentInfo/TournamentInfo";

const SingleTournament = () => {
  return (
    <section className="main-container">
      <div className="tournament-list" style={{ margin: "2rem 0 0 0" }}>
        <TournamentInfo />
      </div>
      <Participants />
    </section>
  );
};

export default SingleTournament;
