// import ReturnButton from "../src/ReturnButton";
import { useState } from "react";


export default function Explanations() {
  
  const [Open0, setOpen0] = useState(false);
  const [Open1, setOpen1] = useState(false);
  // const [Open2, setOpen2] = useState(false);
  // const [Open3, setOpen3] = useState(false);



  return (
    <div className="container" >


      <div>
        <h1>Calculations Explained</h1>   <br /><br />

        <div className="collapsible-container">
          <button onClick={() => setOpen0(!Open0)} className="collapsible-header">
            <span className="header-text">Used Values</span>
            <span>{Open0 ? "▲" : "▼"}</span>
          </button>

          <div className={`collapsible-content ${Open0 ? "is-open" : ""}`}>
            <p>Average Weights:</p>
            <ol>
              <li>Average Male Weight- 83</li>
              <li>Average Female Weight- 68</li>
              <li>Average Children Weight- 35</li>
              <li>Average Infant Weight- 10</li>
              <li>Average Baggage Weight- 20</li>
            </ol>
          </div>
        </div>


        <br />

        <div className="collapsible-container">
          <button onClick={() => setOpen1(!Open1)} className="collapsible-header">
            <span className="header-text">Calculations Explained</span>
            <span>{Open1 ? "▲" : "▼"}</span>
          </button>

          <div className={`collapsible-content ${Open1 ? "is-open" : ""}`}>
            <p>Calculations Explained:</p>
            <ol>
              <li>Each unit of baggage is calculated based on an average weight of 20 kg, with a 20% reduction applied</li>

            </ol>

          </div>
        </div>

        <br />
{/* 
        <div className="collapsible-container">
          <button onClick={() => setOpen3(!Open3)} className="collapsible-header">
            <span className="header-text">Calculations Explained</span>
            <span>{Open3 ? "▲" : "▼"}</span>
          </button>

          <div className={`collapsible-content ${Open3 ? "is-open" : ""}`}>
            <p>The earliest of these is the legal cutoff:</p>
            <ol>
              <li>Updated report time + FDP</li>
              <li>Scheduled report time + FDP + 4 hours</li>
              <li>Scheduled report time + 16 hours</li>
            </ol>

          </div>
        </div>


        <br />



        <div className="collapsible-container">
          <button onClick={() => setOpen2(!Open2)} className="collapsible-header">
            <span className="header-text">Updated Report Time Required</span>
            <span>{Open2 ? "▲" : "▼"}</span>
          </button>

          <div className={`collapsible-content ${Open2 ? "is-open" : ""}`}>
            <ol>
              <li>When reporting from standby duty-<br /> the scheduled report time = standby start time<br /> updated report time = report time to relevant flight.</li>
              <br />
              <li>When a delay was announced less than 10 hours before the scheduled report time.</li>
            </ol>
          </div>
        </div> */}



      </div>

    </div >


  );
}