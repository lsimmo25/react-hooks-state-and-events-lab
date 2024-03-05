import React, {useState} from "react";


function Item({ name, category }) {
  
  const [inCart, setInCart] = useState(false)
  
  const handleClick = () => {
    console.log("click!")
    setInCart(!inCart)
  }

  const liClass = inCart ? "in-cart" : ""
  
  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{inCart ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
