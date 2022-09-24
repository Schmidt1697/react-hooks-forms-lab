import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const initialState={
  name: '', 
  category: ''
}

function ItemForm({ items, setItems, onAddItem }) {
  console.log(items)
  //formData state (covers entire form submission vs. naem and category separate states taht need 2 separate handler functions )
  // const[formData, setFormData] = useState({initialState})
  const[formName, setFormName] = useState('');
  const[formCategory, setFormCategory] = useState('Produce');
  
  function handleFormName(e){
    e.preventDefault();
    setFormName(e.target.value)
  }

  function handleFormCategory(e){
    e.preventDefault();
    setFormCategory(e.target.value)
  }
  //  function to handle item name added to list
  // function handleNewItemForm(e){
  //   e.preventDefault();
  //   console.log(e.target.value)
  //   //get the name of input area (this one is called name) and use to set as new key for new item, same w/ value
  //   // const keyName = e.target.name;
  //   // const inputValue = e.target.value;

  //   const newItem = {
  //     id: uuid(),
  //     name: itemName,
  //     category: itemCategory
  //   }
    
  //   // setFormData(formData => {
  //   //   return{
  //   //     ...formData,
  //   //     id: uuid(),
  //   //     [keyName]: inputValue
  //   //   }
  //   // })
  // }

  function onItemFormSubmit(e){
    e.preventDefault();
    const newItem = {
      id: uuid(),
      name: formName,
      category: formCategory
    }
    
    onAddItem(newItem);
    // e.preventDefault();
    // onAddItem(formData)

    // //reset form to empty
    // setFormData(initialState)
  }

  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formName}onChange={handleFormName}/>
      </label>

      <label>
        Category:
        <select name="category" value={formCategory} onChange={handleFormCategory}>
          <option value="">Choose</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
          <option value="Meat">Meat</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
