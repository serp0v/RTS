import Match from "../../components/Match/Match";
import UserProfile from "../../components/UserProfile/UserProfile";

import "./Profile.css";

const matches = [
  {
    firstPlayer: {
      nickname: "Iamia",
      type: "HR/VR",
    },
    secondPlayer: {
      nickname: "Mazu",
      type: "HR/VR",
    },
    score: "1:2",
    id: Math.random() * 100,
  },
  {
    firstPlayer: {
      nickname: "Darathl",
      type: "HR/VR",
    },
    secondPlayer: {
      nickname: "Nnanedel",
      type: "HR/VR",
    },
    score: "3:1",
    id: Math.random() * 100,
  },
  {
    firstPlayer: {
      nickname: "Siuse",
      type: "HR/VR",
    },
    secondPlayer: {
      nickname: "Comanaiam",
      type: "HR/VR",
    },
    score: "1:3",
    id: Math.random() * 100,
  },
  {
    firstPlayer: {
      nickname: "Xananet",
      type: "HR/VR",
    },
    secondPlayer: {
      nickname: "Denone",
      type: "HR/VR",
    },
    score: "2:2",
    id: Math.random() * 100,
  },
];

const Profile = () => {
  return (
    <section className="main-container">
      <UserProfile />
      <div className="matches-list">
        {matches.map((match) => (
          <Match key={match.id} data={match} />
        ))}
      </div>
    </section>
  );
};

export default Profile;
