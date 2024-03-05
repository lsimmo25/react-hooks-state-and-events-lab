import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
 
  const [isOn, setIsOn] = useState(false)

  const handleMode = () => {
    console.log("clicked!!!")
    setIsOn(!isOn)
  }

  const appClass = isOn ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleMode}>{isOn ? "App Dark Mode" : "App Light Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
