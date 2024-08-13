//Imports the necessary files
import React from "react";

//A function that displays a help component for the user
const Help = (props) => {
  //A function when clicked calls a function to set the container visiblity to false
  const selected = () => {
    props.exitButton();
  };

  //returns the help container
  return (
    <div className="help">
      <span className="exit-button" onClick={() => selected()}>
        X
      </span>
      <h2>How to Play</h2>
      <p>
        Guess the word by clicking the letters. You have 10 wrong guesses before
        you lose the game. Good luck!
      </p>
    </div>
  );
};

//declares the Help function as the default component from this module
export default Help;
