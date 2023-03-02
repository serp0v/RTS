import Match from "../../components/Match/Match";
import UserProfile from "../../components/UserProfile/UserProfile";

import "./Profile.css";

const matches = [
  {
    matchInfo: {
      name: "Masters Of The Sword",
      date: "2023.28.01 - 10:00 MSK",
    },
    firstPlayer: {
      nickname: "Iamia",
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
      date: "2023.28.01 - 10:00 MSK",
    },
    firstPlayer: {
      nickname: "Darathl",
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
      date: "2023.28.01 - 10:00 MSK",
    },
    firstPlayer: {
      nickname: "Siuse",
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
      nickname: "Xananet",
    },
    secondPlayer: {
      nickname: "Denone",
    },
    score: "2:2",
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
          <div className="tournaments-list"></div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
