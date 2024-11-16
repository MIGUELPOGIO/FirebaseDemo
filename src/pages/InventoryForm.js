import React, { useState } from 'react';

export default function InventoryForm() {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [inventory, setInventory] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { name, quantity: parseInt(quantity) };
    setInventory([...inventory, newItem]);
    setName('');
    setQuantity('');
    alert('Item added successfully!');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Add Inventory Item</h2>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Quantity:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
        <button type="submit">Add Item</button>
      </form>

      {/* Display added inventory items */}
      <h3>Current Inventory</h3>
      <ul>
        {inventory.map((item, index) => (
          <li key={index}>{item.name} - {item.quantity}</li>
        ))}
      </ul>
    </div>
  );
}
