import React from "react";

function Filter({ search, setSearch, setSelectedCategory}) {

  // handle the category when it changes! 
    function handleCategoryChange(event) {
      setSelectedCategory(event.target.value);
    }
    
    //function to handle user input in search bar
    function onSearchChange(event) {
      setSearch(event.target.value)
      
    }
    
    
  return (
    <div className="Filter">
      <input type="text" name="search" placeholder="Search..." onChange={onSearchChange} value={search}/>

      <select name="filter" onChange={handleCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
