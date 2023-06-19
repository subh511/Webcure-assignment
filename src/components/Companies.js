import "./Companies.css";
import logo1 from "./images/logo/slack.png"
import logo2 from "./images/logo/stripe.png";
import logo3 from "./images/logo/razorpay.png";
import logo4 from "./images/logo/marketo.png";
import logo5 from "./images/logo/slack1.png";
import handSign from "./images/logoBody/hand.png";
import email from "./images/logoBody/email.png";
import speaker from "./images/logoBody/speaker.png"

//import InfoCard from "./InfoCard";
function Companies(){

    return(
        <div className="social-media">
        <h2>Trust Over 20 Companies</h2>
        <div className="logo-section">
        <img src={logo1} alt="Logo 1" />
        <img src={logo2} alt="Logo 2" />
        <img src={logo3} alt="Logo 3" />
        <img src={logo4} alt="Logo 4" />
        <img src={logo5} alt="Logo 5" />
        </div>
        <hr className="line"></hr>
        <div className="description">
        <p>Here How it Works</p>
        <h2>Simple process to Start With</h2>
        </div>
        <div className="logo-cards">
        <div className="card">
        <img src={handSign} alt="none"/>
        <h3>Digital Analysis</h3>
        <p>simply dummy text of the printing and typesetting industry Lorem ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>
        <div className="card">
        <img src={speaker} alt="none"/>
        <h3>Digital Analysis</h3>
        <p>simply dummy text of the printing and typesetting industry Lorem ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>
        <div className="card">
        <img src={email} alt="none"/>
        <h3>Digital Analysis</h3>
        <p>simply dummy text of the printing and typesetting industry Lorem ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>
        </div>
        <button className="top-button">Features</button>
        </div>
    )

}
export default Companies;