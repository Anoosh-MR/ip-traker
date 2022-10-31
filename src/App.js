import "./App.css";
import Map from "./components/map/Map";
import ResultBar from "./components/resultBar/ResultBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import axios from "axios";

function App() {
  const [address, setAddress] = useState();
  const [result, setResult] = useState();

  const handleClick = async () => {
    const { data } = await axios
      .get(
        `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_OmgUmEMBen16COQdzW0IQMBkkThq9&ipAddress=${address}`
      )
      .catch((err) => console.log(err));
    setResult(data);
  };
  return (
    <div className="App">
      <div>
        <div className="main">
          <span className="Heading">IP Address Tracker</span>
          <div className="searchContainer">
            <input
              type="text"
              className="textbox"
              placeholder="Search for any IP address or domain"
              onChange={(e) => setAddress(e.target.value)}
            />
            <button className="searchButton" onClick={handleClick}>
              <FontAwesomeIcon icon={faGreaterThan} />
            </button>
          </div>
        </div>
      </div>

      <ResultBar result={result} />
      <div className="map">
        <Map result={result} />
      </div>
    </div>
  );
}

export default App;
