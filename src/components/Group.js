import  groupCard from "./images/Infocard/groupCard.png";
import  brain from "./images/Infocard/brain.png";
import music from "./images/Infocard/music.png";
import "./Group.css"
function FeatureComponent() {
    return (
      <div className="feature-component">
        <div className="left-content">
          <h3>Why us</h3>
          <h1>What makes us stand out</h1>
        </div>
        <div className="logos-section">
          <div className="logo-item">
            <img src={music} alt="Logo 1" />
            <h2>Perfect Startegy</h2>
          </div>
          <p>Based on research and analysis, we plan to <br/>introduce revolutionary Solutions</p>
          <div className="logo-item">
            <img src={brain} alt="Logo 2" />
            <h2>Innovative Ideas</h2>
          </div>
          <p>We build electrified relation between products and humans</p>
          <div className="logo-item">
            <img src={brain} alt="Logo 3" />
            <h2>Effective Solutions</h2>
          </div>
          <p>prefected matched activities follow us to <br/>acheive the goals in short time</p>
        </div>
        <div className="right-content">
          <img src={groupCard} alt="none" />
        </div>
      </div>
    );
  }
  export default FeatureComponent;
  