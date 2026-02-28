import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./main-page.css";



export default function MainPage() {


  // Average weights (in kg)
  const avgMale = 83;
  const avgFemale = 68;
  const avgChildren = 35;
  const avgInfant = 10;
  const avgBaggage = 20;


  // Initialize directly from localStorage (so it's immediate)
  const [male, setMale] = useState<string>(() => {
    const saved = localStorage.getItem("male");
    return saved ?? "0";
  });
  const [female, setFemale] = useState<string>(() => {
    const saved = localStorage.getItem("female");
    return saved ?? "0";
  });
  const [children, setChildren] = useState<string>(() => {
    const saved = localStorage.getItem("children");
    return saved ?? "0";
  });
  const [infant, setInfant] = useState<string>(() => {
    const saved = localStorage.getItem("infant");
    return saved ?? "0";
  });
  const [baggage, setBaggage] = useState<string>(() => {
    const saved = localStorage.getItem("baggage");
    return saved ?? "0";
  });
  const [totalWeight, setTotalWeight] = useState<number | null>(() => {
    const saved = localStorage.getItem("totalWeight");
    return saved ? Number(saved) : null;
  });
  const [AvgPassW, setAvgPassW] = useState<number | null>(() => {
    const saved = localStorage.getItem("AvgPassW");
    return saved ? Number(saved) : null;
  });
  const [AdjBagWeight, setAdjBagWeight] = useState<number | null>(() => {
    const saved = localStorage.getItem("AdjBagWeight");
    return saved ? Number(saved) : null;
  });



  //saving the data every time it changes
  useEffect(() => {
    localStorage.setItem("male", male.toString());
    localStorage.setItem("female", female.toString());
    localStorage.setItem("children", children.toString());
    localStorage.setItem("infant", infant.toString());
    localStorage.setItem("baggage", baggage.toString());
    if (totalWeight !== null) {
      localStorage.setItem("totalWeight", totalWeight.toString());
    }
    if (AvgPassW !== null) {
      localStorage.setItem("AvgPassW", AvgPassW.toString());
    }
    if (AdjBagWeight !== null) {
      localStorage.setItem("AdjBagWeight", AdjBagWeight.toString());
    }
  }, [male, female, children, infant, baggage, totalWeight, AvgPassW, AdjBagWeight]);


  // Calculation function
  const handleCalculate = () => {

    ////number of passengers
    const NumOfPass = Number(male) + Number(female) + Number(children) + Number(infant);

    /// passenger's avg weight
    const avgpassw =
      (Number(male) * avgMale +
        Number(female) * avgFemale +
        Number(children) * avgChildren +
        Number(infant) * avgInfant) / NumOfPass;
    setAvgPassW(avgpassw);

    ///baggage weight ... reduced 30%
    const baggweight = Number(baggage) * avgBaggage;
    const reduced = baggweight * 0.8;
    setAdjBagWeight(reduced);


    const total =
      Number(male) * avgMale +
      Number(female) * avgFemale +
      Number(children) * avgChildren +
      Number(infant) * avgInfant +
      reduced;
    setTotalWeight(total);
  };

  const handleReset = () => {
    setMale("0");
    setFemale("0");
    setChildren("0");
    setInfant("0");
    setBaggage("0");
    setTotalWeight(null);
    setAvgPassW(null);
    setAdjBagWeight(null);
    localStorage.removeItem("male");
    localStorage.removeItem("female");
    localStorage.removeItem("children");
    localStorage.removeItem("infant");
    localStorage.removeItem("baggage");
    localStorage.removeItem("totalWeight");
    localStorage.removeItem("AvgPassW")
    localStorage.removeItem("AdjBagWeight")
  };



  return (


    <div className="container">

      <h1>Payload Calculator</h1>


      <div className="box">

        <label>M:</label>
        <div className="number-input">
          <input
            type="number"
            value={male}
            onChange={(e) => {
              const value = e.target.value;
              setMale(value === "" ? "" : value);
            }}
            onBlur={() => {
              if (male === "") setMale("0");
            }}
          />
          <button onClick={() => setMale((prev) => String(Number(prev || 0) + 1))}>+</button>
          <button onClick={() => setMale((prev) => String(Math.max(0, Number(prev || 0) - 1)))}>-</button>
        </div>


        <label>F:</label>
        <div className="number-input">
          <input
            type="number"
            value={female}
            onChange={(e) => {
              const value = e.target.value;
              setFemale(value === "" ? "" : value);
            }}
            onBlur={() => {
              if (female === "") setFemale("0");
            }}
          />
          <button onClick={() => setFemale((prev) => String(Number(prev || 0) + 1))}>+</button>
          <button onClick={() => setFemale((prev) => String(Math.max(0, Number(prev || 0) - 1)))}>-</button>
        </div>

        <label>Ch:</label>
        <div className="number-input">
          <input
            type="number"
            value={children}
            onChange={(e) => {
              const value = e.target.value;
              setChildren(value === "" ? "" : value);
            }}
            onBlur={() => {
              if (children === "") setChildren("0");
            }}
          />
          <button onClick={() => setChildren((prev) => String(Number(prev || 0) + 1))}>+</button>
          <button onClick={() => setChildren((prev) => String(Math.max(0, Number(prev || 0) - 1)))}>-</button>
        </div>

        <label>I:</label>
        <div className="number-input">
          <input
            type="number"
            value={infant}
            onChange={(e) => {
              const value = e.target.value;
              setInfant(value === "" ? "" : value);
            }}
            onBlur={() => {
              if (infant === "") setInfant("0");
            }}
          />
          <button onClick={() => setInfant((prev) => String(Number(prev || 0) + 1))}>+</button>
          <button onClick={() => setInfant((prev) => String(Math.max(0, Number(prev || 0) - 1)))}>-</button>
        </div>

        <label>B:</label>
        <div className="number-input">
          <input
            type="number"
            value={baggage}
            onChange={(e) => {
              const value = e.target.value;
              setBaggage(value === "" ? "" : value);
            }}
            onBlur={() => {
              if (baggage === "") setBaggage("0");
            }}
          />
          <button onClick={() => setBaggage((prev) => String(Number(prev || 0) + 1))}>+</button>
          <button onClick={() => setBaggage((prev) => String(Math.max(0, Number(prev || 0) - 1)))}>-</button>
        </div>


        <div className="button-group">
          <button className="buttonC" onClick={handleCalculate}>Calculate</button>
          <button className="buttonR" onClick={handleReset}>Reset</button>
        </div>



        <div className="results">
          {AvgPassW !== null && (
            <p className="result">
              Avg passenger weight:{" "}
              <strong>{AvgPassW.toFixed(1)} kg</strong>
            </p>
          )}

          {AdjBagWeight !== null && (
            <p className="result">
              Adjusted baggage weight:{" "}
              <strong>{AdjBagWeight.toFixed(1)} kg</strong>
            </p>
          )}

          {totalWeight !== null && (
            <p className="result">
              Total adjusted  weight:{" "}
              <strong>{totalWeight.toFixed(1)} kg</strong>
            </p>
          )}
        </div>

      </div>



    </div>
  );
}
