//Imports the necessary files
import React from "react";

//splits the string of letters into an array
const letters = "abcdefghijklmnopqrstuvwxyz".split("");

//A function that displays Kaybord for a user and sets a function as a parameter
const Keyboard = (props) => {
  /*a function when called calls a function to check weather the clicked on letter
   is right and toggles the selected button to be disabled*/
  const selected = (letter, e) => {
    props.onGuess(letter);
    e.target.disabled = "true";
  };

  //returns the keybord container
  return (
    <div className="keyboard-container">
      {/* Creates a button for each letter */}
      {letters.map((letter) => (
        <button
          className="buttonLetter"
          key={letter}
          onClick={(e) => selected(letter, e)}
          disabled={props.isDisabled}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

//declares the Keyboard function as the default component from this module
export default Keyboard;
