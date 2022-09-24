import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  function handleAddToCartClick() {
    setIsInCart((isInCart) => !isInCart);
  }

  const liClassName = isInCart ? "in-cart" : "";
  const btnAddRemoveName = isInCart ? "Remove From" : "Add to";

  return (
    <li className={liClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        className={isInCart ? "remove" : "add"}
        onClick={handleAddToCartClick}
      >
        {btnAddRemoveName} Cart
      </button>
    </li>
  );
}

export default Item;
