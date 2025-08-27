import { useState } from "react";
import "./App.css";

// const items = [
//   { id: 1, description: "socks", quantity: "12", packed: false },
//   { id: 2, description: "T-shirts", quantity: "6", packed: false },
//   { id: 3, description: "trousers", quantity: "4", packed: false },
// ];
function App() {
    const [item, setItem] = useState([]);
     function handleAddItem(newItem){
    setItem((items)=>[...items, newItem])
  }
  return (
    <div className="App">
      <Logo />
      <Form onAddItem={handleAddItem}/>
      <PackingList item={item}/>
      <Footer />
    </div>
  );
}

export default App;

function Logo() {
  return (
    <div className="logo-container">
      <h1> Ready to travel? Let’s pack smart! 🌍 </h1>
    </div>
  );
}

function PackingList({item}) {
  return (
    <div className="list-container">
      <h1> Trip Packing List🧳</h1>
      <div className="list">
        {item.map((ele) => (
          <Item item={ele} key={ele.id} />
        ))}
      </div>
    </div>
  );
}

function Item({ item }) {
  return (
    <div className="item">
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity}
        {item.description}
      </span>
      <button>❌</button>
    </div>
  );
}

function Form({onAddItem}) {
  const [description, setDesciption] = useState("");
  const [quantity, setQuantity] = useState(1);

 
  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };
    onAddItem(newItem)
    setDesciption("");
    setQuantity(1);
  }
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2> what do you need for the trip ? ✈️ </h2>
    
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
        <input
        value={description}
        type="text"
        placeholder="..item"
        onChange={(e) => setDesciption(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function Footer() {
  return (
    <footer>
      You have x items on your list and you already packed x (x%) 👜
    </footer>
  );
}
