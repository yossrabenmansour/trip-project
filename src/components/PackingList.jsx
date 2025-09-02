import Item from "./Item";

 export default function PackingList({ item, onDeleteItem, onToggleItem }) {
  return (
    <div className="list-container">
      <h1> Trip Packing List🧳</h1>
      <div className="list">
        {item.map((ele) => (
          <Item
            item={ele}
            key={ele.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </div>
    </div>
  );
}