import React from "react";

function Filter({ onCategoryChange, search, setSearch}) {
    //function to handle user input in input box in filter component 
    function onSearchChange(event) {
      setSearch(event.target.value)
    }

  return (
    <div className="Filter">
      <input type="text" name="search" placeholder="Search..." onChange={onSearchChange}/>
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
