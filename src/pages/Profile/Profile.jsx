import Match from "../../components/Match/Match";
import SingleTournament from "../../components/SingleTournament/SingleTournament";
import UserProfile from "../../components/UserProfile/UserProfile";

import "./Profile.css";

const matches = [
  {
    matchInfo: {
      name: "Masters Of The Sword",
      date: "2023.01.01 - 20:00 MSK",
    },
    firstPlayer: {
      nickname: "CoolDown",
    },
    secondPlayer: {
      nickname: "Mazu",
    },
    score: "1:2",
    id: Math.ceil(Math.random() * 10000),
  },
  {
    matchInfo: {
      name: "Masters Of The Sword",
      date: "2023.12.01 - 14:00 MSK",
    },
    firstPlayer: {
      nickname: "CoolDown",
    },
    secondPlayer: {
      nickname: "Nnanedel",
    },
    score: "3:1",
    id: Math.ceil(Math.random() * 10000),
  },
  {
    matchInfo: {
      name: "Masters Of The Sword",
      date: "2023.16.01 - 12:00 MSK",
    },
    firstPlayer: {
      nickname: "CoolDown",
    },
    secondPlayer: {
      nickname: "Comanaiam",
    },
    score: "1:3",
    id: Math.ceil(Math.random() * 10000),
  },
  {
    matchInfo: {
      name: "Masters Of The Sword",
      date: "2023.28.01 - 10:00 MSK",
    },
    firstPlayer: {
      nickname: "CoolDown",
    },
    secondPlayer: {
      nickname: "Denone",
    },
    score: "2:2",
    id: Math.ceil(Math.random() * 10000),
  },
];

const tournaments = [
  {
    date: "2023.01.01 - 2023.02.01",
    title: "Masters Of The Sword",
    id: Math.ceil(Math.random() * 10000),
  },
  {
    date: "2023.01.01 - 2023.02.01",
    title: "Coming soon",
    id: Math.ceil(Math.random() * 10000),
  },
  {
    date: "2023.01.01 - 2023.02.01",
    title: "Coming soon",
    id: Math.ceil(Math.random() * 10000),
  },
  {
    date: "2023.01.01 - 2023.02.01",
    title: "Coming soon",
    id: Math.ceil(Math.random() * 10000),
  },
];

const Profile = () => {
  return (
    <section className="main-container">
      <UserProfile />

      <div className="history">
        <div className="history-item">
          <h2>Матчи</h2>
          <div className="matches-list">
            {matches.map((match) => (
              <Match key={match.id} data={match} />
            ))}
          </div>
        </div>

        <div className="history-item">
          <h2>Турниры</h2>
          <div className="tournaments-list">
            {tournaments.map((tour) => (
              <SingleTournament data={tour} key={tour.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
