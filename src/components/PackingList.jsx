import { useState } from "react";
import Item from "./Item";

export default function PackingList({ item, onDeleteItem, onToggleItem ,handleClearList}) {
  const [sortedBy, setSortedBy] = useState("input");
  let sortedItem;

  if (sortedBy === "input") {
    sortedItem = item;
  } else if (sortedBy === "description") {
    sortedItem = item.slice().sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortedBy === "packed") {
    sortedItem = item.slice().sort((a, b) => a.packed - b.packed);
  }

  return (
    <div className="list-container">
      <h1> Trip Packing List🧳</h1>
      <div className="list">
        {sortedItem?.map((ele) => (
          <Item
            item={ele}
            key={ele.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </div>
      <div className="action">
        <select value={sortedBy} onChange={(e) => setSortedBy(e.target.value)}>
          <option value={"input"}>Sort by input order</option>
          <option value={"description"}>Sort by Description </option>
          <option value={"packed"}>Sort by packed status </option>
        </select>
        <button className="clear-btn" onClick={handleClearList}>clear </button>
      </div>
      
    </div>
  );
}
