import React from 'react';
import styled from 'styled-components';
import { CloseCircle } from 'styled-icons/evaicons-solid';

const CloseCircleIcon = styled(CloseCircle)`
  width: 13px;
  margin-top: -8px;
  color: #502EFF;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  padding: 0 170px;

  .brand {
    display:flex;
    align-items: center;
    font-size: 1.4rem;
    font-weight: 600;
    color: #000964;
    flex-basis: 45%
  }
  
  ul {
    flex-basis: 55%; 
    display: flex;
    list-style: none;
    z-index: 20;

    li {
      color: #502EFF;
      flex: 1;
      text-align: center;

      &:last-child {
        button {
          margin: 0 0 0 60px;
          background-color: #502EFF;
          color: #fff;
          border-radius: 35px;
          border: 1px solid #502EFF;
          box-shadow: 0 0 10px rgba(0, 0, 0, .3);
          font-size: .7rem;
          padding: .5rem;
          width: 110px;

          &:hover {
            cursor: pointer;
            box-shadow: 0 0 15px rgba(0, 0, 0, .3);
            opacity: .9;
            transition: all .3s ease-out;
          }
        }
      }
    }
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="brand">
        <span>agency<small><CloseCircleIcon /></small></span>
      </div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">About us</a></li>
        <li><a href="#">Contact</a></li>
        <li>
          <button>MY PROJECT</button>
        </li>
      </ul>
    </Nav>
  )
}

export default Navbar
