import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ items, onHandleFormName, onHandleFormCategory }) {
  
  return (
    <form className="NewItem" >
      <label>
        Name:
        <input type="text" name="name"onChange={onHandleFormName}/>
      </label>

      <label>
        Category:
        <select name="category" value={items} onChange={onHandleFormCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
