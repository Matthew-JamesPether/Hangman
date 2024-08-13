//Imports the necessary files
import React from "react";

//A function that displays the appropriate Hangman picture
const Hangman = (props) => {
  //Declares a picture number and the amount of guesses left
  let picNumber = props.wrongGuesses + 1;
  let guessesLeft = 10 - props.wrongGuesses;

  //returns the hangman container
  return (
    <div className="hangman-container">
      {/* displays the appropriate picture based on the picNumber and how many guesses the user has left */}
      <img
        src={require("./HangmanDrawings/state" + picNumber + ".GIF")}
        alt={"Hangman picture " + picNumber}
      />
      <p>Guesses Left: {guessesLeft}</p>
    </div>
  );
};

//declares the Hangman function as the default component from this module
export default Hangman;
