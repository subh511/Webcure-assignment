import work from "./images/Infocard/infocard.png";
import "./InfoCard.css";

function InfoCard() {
  return (
    <div className="info-card">
      <div className="content">
        <h3>Web Solutions</h3>
        <h1>Stratgics experices ad Visual appeal</h1>
        <p>simply dummy text of the printing and typesetting industry.Lorem <br/> ipsum has been the industry's standard dummy text ever since the 1500s,<br/> simply dummy text of the printong anf typesetting industry.</p>
        <span className="read-more">Read More</span>
      </div>
      <div>
      <img src={work} alt="none" className="info-image" />
      </div>
    </div>
  );
}

export default InfoCard;
