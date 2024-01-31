import React from "react";
import Form from "./Form";
import { NavLink } from 'react-router-dom';


const Header = ({ history, handleSubmit }) => {
  return (
    <div>
      <nav className="main-nav">
        <ul>
          <li><NavLink to="/mountain">Mountains</NavLink></li>
          <li><NavLink to="/beach">Beaches</NavLink></li>
          <li><NavLink to="/bird">Birds</NavLink></li>
          <li><NavLink to="/food">Foods</NavLink></li>
        </ul>
      </nav>
      <h1>I'm a developer</h1>
      <Form history={history} handleSubmit={handleSubmit} />
    </div>
  );
};

export default Header;
