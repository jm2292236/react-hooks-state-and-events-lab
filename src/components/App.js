import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
    const dark = "Dark Mode";
    const light = "Light Mode";
    // State variable for the app mode (Dark/Light)
    const [mode, setMode] = useState(false);

    // replace 'false' with a state variable that can be toggled between true and false
    // this will be used for the Dark Mode Toggle feature
    const appClass = mode ? "App dark" : "App light"

    function handleClick() {
        setMode(mode ? false : true);
    }

    return (
        <div className={appClass}>
        <header>
            <h2>Shopster</h2>
            <button onClick={() => handleClick()}>{mode ? light : dark}</button>
        </header>
        <ShoppingList items={itemData} />
        </div>
    );
}

export default App;
