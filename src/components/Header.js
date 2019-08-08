import React, { Component } from 'react'
import styled from 'styled-components'

import logo from '../logo.svg'

class Header extends Component {
  render() {
    const Nav = styled.nav`
      padding: 3.75rem;
      font-family: 'Archivo';
      width: 100%;
      ul {
        margin: 0;
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 14px;
        padding: 0;
        li:not(.logo) {
          padding: 0 3rem;
          a {
            text-decoration: none;
            color: #31211b;
          }
        }
        .logo {
          flex: 2;
          text-align: center;
        }
      }
    `

    return (
      <Nav>
        <ul>
          <li>
            <a href="#store">Store</a>
          </li>
          <li>
            <a href="#tutorials">Tutorials</a>
          </li>
          <li className="logo">
            <a href="#hero">
              <img src={logo} alt="ByrdMR Logo" />
            </a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </Nav>
    )
  }
}

export default Header
