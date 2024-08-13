//Imports the necessary files
import React, { useState, useEffect } from "react";
import "./Styles/GameLayout.css";
import Word from "./Word";
import Keyboard from "./Keyboard";
import Hangman from "./Hangman";
import Button from "react-bootstrap/Button";

//A function that displays the appropriate Game for a user
function GameLayout() {
  //Declares useState variables
  const [word, setWord] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [gameStatus, setGameStatus] = useState("playing");
  const [keyboardStatus, setKeyboardStatus] = useState(false);

  //A use effect that runs a function to get a word when mounted
  useEffect(() => {
    getWord();
  }, []);

  /*A function when called stores the given letter if it appears 
  in the word else increments the wrongGuesses variable */
  const handleGuess = (letter) => {
    if (word.includes(letter)) {
      setGuesses((g) => [...g, letter]);
    } else {
      setWrongGuesses(wrongGuesses + 1);
    }
  };

  //A use effect that runs when mounted and when the given dependencies change
  useEffect(() => {
    /*sets the game status to lost and keyboard status to true if the 
    user has attempted 10 wrong guesses */
    if (wrongGuesses >= 10) {
      setGameStatus("lost");
      setKeyboardStatus(true);
    } else if (
      /*else sets the game status to won and keyboard status to true if the 
    user has enter all the right letters and the word exists */
      word != "" &&
      word.split("").every((letter) => guesses.includes(letter))
    ) {
      setGameStatus("won");
      setKeyboardStatus(true);
    }
  }, [guesses, wrongGuesses]);

  //a function when clicked on resest the game
  const handleRestart = () => {
    getWord();
    setGuesses([]);
    setWrongGuesses(0);
    setGameStatus("playing");
    setKeyboardStatus(false);
  };

  //A function when called retrieves a word from a text file
  function getWord() {
    // Line number to start reading from (zero-indexed)
    const startLine = 38;

    // Fetch the words from the text file
    fetch("/dictionary.txt")
      .then((file) => file.text())
      .then((data) => {
        // Split the file content into an array of lines
        const lines = data.split("\n").map((line) => line.trim());

        // Slice the array to start from the desired line
        const wordsArray = lines.slice(startLine);

        // Filter out empty lines (if any)
        const filteredWords = wordsArray.filter((word) => word.length > 0);

        // Select a random word from the filtered array
        const randomWord =
          filteredWords[
            Math.floor(Math.random() * filteredWords.length)
          ].toLowerCase();

        //checks to see if the word does not contain a hypen else calls the getword function
        if (!randomWord.includes("-")) {
          // Set the selected word as the state
          setWord(randomWord);
        } else {
          getWord();
        }
      })
      //Cathes an error if the file can't be found
      .catch((error) => {
        console.error("Error fetching the words:", error);
      });
  }

  //Returns the Game container
  return (
    <div className="game-container">
      <div className="main-container">
        <Hangman wrongGuesses={wrongGuesses} />
        <div className="game-result">
          {/* Displays the game results and a button if gameStatus no longer equals playing */}
          {gameStatus !== "playing" && (
            <div>
              {/* Displays the approriate message if gameStatus equals won */}
              {gameStatus === "won" ? (
                <h2 style={{ color: "green" }}>You won!</h2>
              ) : (
                <h2 style={{ color: "red" }}>You lost!</h2>
              )}
              <Button className="btn btn-warning" onClick={handleRestart}>
                Restart Game
              </Button>
            </div>
          )}
        </div>
      </div>
      <Word word={word} guesses={guesses} gameStatus={gameStatus} />
      <Keyboard onGuess={handleGuess} isDisabled={keyboardStatus} />
    </div>
  );
}

//declares the GameLayout function as the default component from this module
export default GameLayout;
