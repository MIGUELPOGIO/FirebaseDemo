import React, { useEffect, useState } from 'react';

export default function Dashboard() {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    const mockInventory = [
      { id: 1, name: 'Shampoo', quantity: 50 },
      { id: 2, name: 'Towels', quantity: 30 },
      { id: 3, name: 'Toothpaste', quantity: 100 },
    ];
    setInventory(mockInventory);
  }, []);

  return (
    <div>
      <h2>Inventory Dashboard</h2>
      <ul>
        {inventory.map(item => (
          <li key={item.id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}
