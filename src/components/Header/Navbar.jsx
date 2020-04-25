import React from 'react';
import { CloseCircleIcon, Nav } from './Styles';

const Navbar = () => {
  return (
    <Nav>
      <div className="brand">
        <span>agency<small><CloseCircleIcon /></small></span>
      </div>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">Services</a></li>
        <li><a href="/">About us</a></li>
        <li><a href="/">Contact</a></li>
        <li>
          <button>MY PROJECT</button>
        </li>
      </ul>
    </Nav>
  )
}

export default Navbar
