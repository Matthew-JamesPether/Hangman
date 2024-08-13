//Imports the necessary files
import { React, useState } from "react";
import "./Styles/HeaderLayout.css";
import Help from "./Help";

//A function that displays the appropriate header for a user
function HeaderLayout() {
  //Declares a useState variable
  const [isHelpVisible, setIsHelpVisible] = useState(false);

  // a function to show the help container
  const showHelp = () => {
    setIsHelpVisible(true);
  };

  // a function to hide the help container
  const hideHelp = () => {
    setIsHelpVisible(false);
  };

  //Returns the header container
  return (
    <header className="header-container">
      <h1>HangMan</h1>
      <button onClick={showHelp}>help</button>
      {/* displays the help container depending on its state */}
      {isHelpVisible && <Help exitButton={hideHelp} />}
    </header>
  );
}

//declares the HeaderLayout function as the default component from this module
export default HeaderLayout;
