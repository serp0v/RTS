import Tournament from "../../components/Tournament/Tournament";
import New from "../../components/New/New";

import showMore from "../../assets/show-more.svg";

import "./Home.css";
import "./Home.adaptive.css";

const news = [
  {
    title: "Hello world",
    subtitle: "World is mine",
    id: Math.ceil(Math.random() * 10000),
  },
  {
    title: "Hello world",
    subtitle: "World is mine",
    id: Math.ceil(Math.random() * 10000),
  },
  {
    title: "Hello world",
    subtitle: "World is mine",
    id: Math.ceil(Math.random() * 10000),
  },
  {
    title: "Hello world",
    subtitle: "World is mine",
    id: Math.ceil(Math.random() * 10000),
  },
];

const tournament = {
  id: Math.ceil(Math.random() * 10000),
  title: "Aenean euismod",
  tankClass: "HF HF",
  subtitle: "Feugiat non",
};

const Home = () => {
  return (
    <section>
      <main className="main">
        <div className="main-container">
          <Tournament tournament={tournament} style={{ margin: "2rem 0" }} />
          <div className="news-list">
            {news.map((singleNew) => (
              <New key={singleNew.id} singleNew={singleNew} />
            ))}
          </div>
        </div>

        <div className="show-more">
          <img src={showMore} alt="" />
        </div>
      </main>
    </section>
  );
};

export default Home;
