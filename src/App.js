// import './App.css';

import Body from "./components/Body";
import Navbar from "./components/Navbar";
import Companies from "./components/Companies";
import InfoCard from "./components/InfoCard";
import Butt from "./components/Butt";
import FeatureComponent from "./components/Group";
//import InfoCard from "./components/InfoCard";

function App() {
  return (
    <div>
    <Navbar/>
    <Body/>
    <Companies/>
    <InfoCard/>
    <Butt/>
    <FeatureComponent/>
    </div>
  );
}

export default App;
