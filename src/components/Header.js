import React, { Component } from "react";
import styled from "styled-components";
import { HeaderConsumer } from "../header-context";

import logo from "../logo.svg";
import menu from "../img/Menu.svg";
import facebook from "../img/facebook.svg";
import instagram from "../img/instagram.svg";
import twitter from "../img/twitter.svg";

class Header extends Component {
  render() {
    const Nav = styled.nav`
      padding: 3.75rem 0;
      font-family: "Archivo";
      width: 100%;
      position: fixed;

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
        &.contact {
          li:not(.logo) {
            width: 200px;
          }
        }
        li.menu {
          display: flex;
          justify-content: flex-end;
        }
        li:not(.logo) {
          padding: 0 3rem;
          a {
            text-decoration: none;
            color: #31211b;
          }
        }
        li.social {
          display: flex;
          a {
            display: flex;
            width: 35px;
          }
        }
        .logo {
          flex: 2;
          text-align: center;
        }
      }
      @media screen and (max-width: 850px) {
        ul li.desktop {
          display: none;
        }
        ul li.mobile {
          visibility: visible;
        }
        ul li.logo {
          margin-left: 7rem;
        }
      }
      @media screen and (min-width: 850px) {
        ul li.desktop {
          visibility: visible;
        }
        ul li.mobile,
        ul #mobileMenu {
          display: none;
        }
      }
    `;

    return (
      <HeaderConsumer>
        {({ mode }) => (
          <Nav>
            {mode === "hero" ? (
              <ul>
                <li className="desktop">
                  <a href="#store">Store</a>
                </li>
                <li className="desktop">
                  <a href="#tutorials">Tutorials</a>
                </li>
                <li className="logo">
                  <a href="#hero">
                    <img src={logo} alt="ByrdMR Logo" />
                  </a>
                </li>
                <li className="desktop">
                  <a href="#blog">Blog</a>
                </li>
                <li className="desktop">
                  <a href="#contact">Contact</a>
                </li>
                <li className="menu" id="mobileMenu">
                  <a href="#menu">
                    <img src={menu} alt="Menu Icon" />
                  </a>
                </li>
              </ul>
            ) : (
              <ul className="contact">
                <li className="social desktop">
                  <a href="https://facebook.com">
                    <img src={facebook} alt="Facebook Logo" />
                  </a>
                  <a href="https://instagram.com">
                    <img src={instagram} alt="Instagram Logo" />
                  </a>
                  <a href="https://twitter.com">
                    <img src={twitter} alt="Twitter Logo" />
                  </a>
                </li>
                <li className="logo">
                  <a href="#hero">
                    <img src={logo} alt="ByrdMR Logo" />
                  </a>
                </li>
                <li className="menu">
                  <a href="#menu">
                    <img src={menu} alt="Menu Icon" />
                  </a>
                </li>
              </ul>
            )}
          </Nav>
        )}
      </HeaderConsumer>
    );
  }
}

export default Header;
