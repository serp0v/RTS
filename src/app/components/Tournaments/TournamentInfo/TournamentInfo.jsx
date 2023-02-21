import { useState } from "react";

import warning from "../../../../assets/warning.svg";
import green from "../../../../assets/green-btn.svg";
import blue from "../../../../assets/blue-btn.svg";

import "./TournamentInfo.css";
import "./TournamentInfo.adaptive.css";
import Tournament from "../../Reuse/Tournament/Tournament";

const TournamentInfo = () => {
  const [isOpen, setOpen] = useState(false);

  const stichClickHandler = () => {
    setOpen((state) => !state);
  };

  return (
    <section className="main-container">
      <div className="tournament-list" style={{ margin: "2rem 0 0 0" }}>
        <div className="tournament-item">
          <div className="tournament-block">
            <div className="tournament-image">
              <Tournament
                tournament={{
                  id: Math.ceil(Math.random() * 10000),
                  title: "Firebird Reborn",
                  tankClass: "HF HF",
                  subtitle: "Sandbox",
                }}
                style={{
                  background: "#424242",
                  border: "none",
                  borderRadius: "25px",
                }}
              />
            </div>
            <div className="tournament-info">
              <div className="warning">
                <div className="warning-icon">
                  <img src={warning} alt="" />
                </div>
                <div className="warning-text">
                  The eSports checker anti-cheat software is required to take
                  part in this tournament.
                </div>
              </div>
              <div className="buttons-stage">
                <div className="tournaments-item-buttons">
                  <div className="tournaments-item-button green-button">
                    <img src={green} alt="" />
                    <p>PARTICIPATE</p>
                  </div>
                  <div className="tournaments-item-button blue-button">
                    <img src={blue} alt="" />
                    <p>RULES</p>
                  </div>
                </div>
                <div className="tournaments-item-stage">
                  <div className="stage-metric"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Вынести */}
          <div
            className={`tournament-more-info ${
              isOpen ? "tournament-anim" : ""
            }`}
          >
            <div className="tournament-info-button-box">
              <div id="tournament-button" className="tournament-info-button">
                Stage 1
              </div>
              <div className="tournament-info-button">Stage 2</div>
              <div className="tournament-info-button">Quater Final</div>
              <div className="tournament-info-button">Final</div>
            </div>
            <button onClick={stichClickHandler} className="stick"></button>
          </div>
          {/* Вынести */}
        </div>
      </div>
    </section>
  );
};

export default TournamentInfo;
