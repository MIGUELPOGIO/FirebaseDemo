import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>Inventory System</h1>
      <NavLink to="/dashboard" activeClassName="active">
        Dashboard
      </NavLink>
      <NavLink to="/inventory/new" activeClassName="active">
        Add Inventory
      </NavLink>
      <NavLink to="/feedback" activeClassName="active">
        Feedback
      </NavLink>
      <NavLink to="/login" activeClassName="active">
        Login
      </NavLink>
    </nav>
  );
}
