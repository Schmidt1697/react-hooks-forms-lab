import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";


function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }
  //add new items to item list when item form is submitted 
  //look in item form to see this
  function onAddItem(newItem){
    setItems(items =>{
      return(
        [...items, newItem]
      )
    })
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} setItems={setItems} onAddItem={onAddItem}/>
    </div>
  );
}

export default App;
