import React from 'react';
import InventoryItem from './InventoryItem';

export default function InventoryList({ inventory, onDelete }) {
  return (
    <div className="inventory-list">
      <h2>Inventory Items</h2>
      {inventory.map((item) => (
        <InventoryItem key={item.id} item={item} onDelete={onDelete} />
      ))}
    </div>
  );
}
