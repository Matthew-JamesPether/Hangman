//Imports the necessary files
import React from "react";

//A function that displays a word component for the user
const Word = (props) => {
  return (
    <div className="word-container">
      {/* Creates a span for each letter*/}
      {props.word.split("").map((letter, index) => (
        <span key={index} className="letter">
          {/* if game status equals playing then display the selected letter or display an underscore */}
          {props.gameStatus === "playing"
            ? props.guesses.includes(letter)
              ? letter
              : "_"
            : // else display all the letters
              letter}
        </span>
      ))}
    </div>
  );
};

//declares the word function as the default component from this module
export default Word;
