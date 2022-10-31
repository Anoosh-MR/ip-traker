import React from "react";
import "./resultBar.css";

const ResultBar = ({ result }) => {
  return (
    <div className="resultBar">
      {result && (
        <div className="box">
          <div className="content">
            <span className="heading">IP ADDRESS</span>
            <span className="result">{result?.ip}</span>
          </div>
          <div className="content">
            <span className="heading">LOCATION</span>
            <span className="result">
              {result?.location.country} , {result?.location.city}
            </span>
          </div>

          <div className="content">
            <span className="heading">Timezone</span>
            <span className="result">{result?.location.timezone}</span>
          </div>
          <div className="content">
            <span className="heading">ISP</span>
            <span className="result">{result?.isp}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultBar;
