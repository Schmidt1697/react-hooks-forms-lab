import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  //set states
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState('');

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);

  }

 

  //function to handle item name added to list
  // function onHandleFormName(event){
  //   event.preventDefault();
  //   console.log(event.target.value)
    
  //   // setItems(event.target.value);
  // }

  //function to handle item category chosen added to list
  // function onHandleFormCategory(event) {
  //   event.preventDefault();
  //   console.log(event.target.value)
    
    
  // }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" || '') return true;

    return item.category.toLowerCase().includes(selectedCategory.toLowerCase());
  });

  return (
    <div className="ShoppingList">
      <ItemForm items={items} setItems={setItems}/>
      <Filter onCategoryChange={handleCategoryChange} search={search} setSearch={setSearch} />

      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>                                                                                                                                            
  );
}

export default ShoppingList;
