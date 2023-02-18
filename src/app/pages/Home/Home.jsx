import showMore from "../../../assets/show-more.svg";

import "./Home.css";
import "./Home.adaptive.css";
import Tournament from "../../components/Tournament/Tournament";
import New from "../../components/New/New";

const news = [
  { title: "Hello world", subtitle: "World is mine", id: Math.random() * 100 },
  { title: "Hello world", subtitle: "World is mine", id: Math.random() * 100 },
  { title: "Hello world", subtitle: "World is mine", id: Math.random() * 100 },
  { title: "Hello world", subtitle: "World is mine", id: Math.random() * 100 },
];

const Home = () => {
  return (
    <section>
      <main className="main">
        <div className="main-container">
          <Tournament />
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
