import React, { useState } from "react";
import "./App.css";

const App = () => {
  //States
  const [prize, setPrize] = useState("Try again");
  const [spins, setSpins] = useState(0);
  const [rotation, setRotation] = useState(0);

  const spinWheel = () => {
    if (spins === 0) {
      // First spin
      const newRotation = Math.floor(Math.random() * 360) + 1800;
      setRotation(newRotation); //stored value in state
      setPrize("Try again");
      setSpins(1);
      setTimeout(() => {
        setPrize(getRandomNumber());
      }, 4000);
    } else if (spins === 1) {
      // Second spin
      const newRotation = rotation + 3600; //change state
      setRotation(newRotation);
      setSpins(2);
    }
  };

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
  };

  return (
    <div className="App">
      <div
        id="wheel"
        className={spins === 0 ? "rotate" : ""}
        style={{ transform: `rotate(${rotation}deg)` }}
      ></div>
      <button id="spin-button" onClick={spinWheel}>
        Spin
      </button>
      <div id="prize-display">
        {prize !== "Try again" ? `Prize: ${prize}` : prize}
      </div>
      {prize == "Try again" ? (
        <h2>Spin wheel and test your Luck.Click on Spin</h2>
      ) : (
        <h3>Thanks for spinning!You got {prize} points!</h3>
      )}
      <h4>You can spin once, spin and refresh!</h4>
    </div>
  );
};

export default App;
