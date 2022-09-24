import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

//items and set items are state set in APP js
function ShoppingList({ items, setItems, onAddItem }) {
  // set states
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState('');

  
  // create a new filtered array based on functions that are onChange eventhandlers to listen for changes to state are in the filter.js component
  // search input AND the dropdown input
  const filteredItems = items.filter((item) => {
    // start with a result of false
    let result = false; 

    // check the category dropdown 
    if (selectedCategory === "All") {
      result = true; 
    } else {
      // if category is not "All", then compare the selected category to the category of the current item
      const selectedCategoryLowerCase = selectedCategory.toLowerCase();
      const itemCategoryLowerCase = item.category.toLocaleLowerCase();
      if (itemCategoryLowerCase === selectedCategoryLowerCase){
        // if category matches, set result to true
        result = true; 
      }
    }; 

    // if there is a search input value
    if (search){
      // then compare the item.name to see if it includes the current search input value
      const lowerSearch = search.toLowerCase().trim();
      const itemNameLowerCase = item.name.toLocaleLowerCase().trim();
      if (itemNameLowerCase.includes(lowerSearch)){
        result = true; 
      } else {
        result = false;
      }
    }
    // return the result; true||false
    return result;
  });


  return (
    <div className="ShoppingList">
      <ItemForm items={items} setItems={setItems} onAddItem={onAddItem}/>
      <Filter search={search} setSearch={setSearch} setSelectedCategory={setSelectedCategory}/>

      <ul className="Items">
        {filteredItems.map((item) => (
      <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>                                                                                                                                            
  );
}

export default ShoppingList;


 
