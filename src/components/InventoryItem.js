import React from 'react';

export default function InventoryItem({ item, onDelete }) {
  return (
    <div className="inventory-item">
      <h3>{item.name}</h3>
      <p>Quantity: {item.quantity}</p>
      <button onClick={() => onDelete(item.id)}>Delete</button>
    </div>
  );
}
