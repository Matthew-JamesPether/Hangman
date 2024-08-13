//Imports the necessary files
import React from "react";
import "./App.css";
import HeaderLayout from "./Components/HeaderLayout";
import GameLayout from "./Components/GameLayout";
import "bootstrap/dist/css/bootstrap.min.css";

//A function that calls the appropriate components and displays them
function App() {
  //returns the appropriate components
  return (
    <div className="App" class="bg-info">
      <HeaderLayout />
      <GameLayout />
    </div>
  );
}

//declares the App function as the default component from this module
export default App;

/**References:
 * https://www.youtube.com/watch?v=YxQlt3n1ZPA&list=PLZPZq0r_RZOMQArzyI32mVndGBZ3D99XQ&index=12
 * https://stackoverflow.com/questions/55830414/how-to-read-text-file-in-react
 * https://www.youtube.com/watch?v=4pO-HcG2igk&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=8
 * https://react-bootstrap.github.io/docs/getting-started/introduction
 * https://stackoverflow.com/questions/39999367/how-do-i-reference-a-local-image-in-react
 *
 */
