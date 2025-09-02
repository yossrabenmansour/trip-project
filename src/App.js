import { useState } from "react";
import "./App.css";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Form from "./components/Form";
import Stats from "./components/Stats";


// const items = [
//   { id: 1, description: "socks", quantity: "12", packed: false },
//   { id: 2, description: "T-shirts", quantity: "6", packed: false },
//   { id: 3, description: "trousers", quantity: "4", packed: false },
// ];
function App() {
  const [item, setItem] = useState([]);

  function handleAddItem(newItem) {
    setItem((items) => [...items, newItem]);
  }
  function handleDeleteItem(id) {
    setItem(() => item.filter((obj) => obj.id !== id));
  }

  function handleToggleItem(id) {
    setItem(() =>
      item.map((obj) => (obj.id === id ? { ...obj, packed: !obj.packed } : obj))
    );
  }
  return (
    <div className="App">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        item={item}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Stats item={item} />
    </div>
  );
}

export default App;








