import { useState } from "react";

export default function Form({ onAddItem }) {
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
    onAddItem(newItem);
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
