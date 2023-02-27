import Tournament from "../../components/Tournament/Tournament";

import "./Tournaments.css";
import "./Tournaments.adaptive.css";

const tournaments = [
  {
    id: Math.ceil(Math.random() * 10000),
    title: "Nulla eget",
    tankClass: "HF HF",
    subtitle: "Fermentum vel",
  },
  {
    id: Math.ceil(Math.random() * 10000),
    title: "Integer sem",
    tankClass: "HF HF",
    subtitle: "Vestibulum nec",
  },
  {
    id: Math.ceil(Math.random() * 10000),
    title: "Morbi quis",
    tankClass: "HF HF",
    subtitle: "Nunc quis",
  },
  {
    id: Math.ceil(Math.random() * 10000),
    title: "Vehicula risus",
    tankClass: "HF HF",
    subtitle: "Nulla eget",
  },
  {
    id: Math.ceil(Math.random() * 10000),
    title: "Fusce",
    tankClass: "HF HF",
    subtitle: "Imperdiet non",
  },
];

const Tournaments = () => {
  return (
    <section className="main-container">
      <Tournament
        tournament={tournaments[0]}
        date={{ date: "31", quantity: "100" }}
        style={{ margin: "2rem 0" }}
      />

      <div className="tournaments-list">
        {tournaments.map((tour, idx) => {
          if (idx === 0) return null;
          else
            return (
              <div key={tour.id} className="tournament-div">
                <Tournament tournament={tour} />
              </div>
            );
        })}
      </div>
    </section>
  );
};

export default Tournaments;
