import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, selectCategory] = useState("All")

  const handleSelect = (event) => {
    console.log("change!")
    selectCategory(event.target.value)
  }

  const filteredItems = selectedCategory === "All" ? items : items.filter(item => item.category === selectedCategory )

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select value={selectedCategory} name="filter" onChange={handleSelect}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
