import React, { useState } from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState(true);

  const inCart = cart ? "" : "in-cart";
  const addButton = cart ? "add" : "remove";
  function handleClick() {
    setCart(!cart);
  }

  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={addButton} onClick={handleClick}>
        {cart ? "Add to Cart" : "Remove From Cart"}
      </button>
    </li>
  );
}

export default Item;
