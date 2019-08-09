import React, { Component } from "react";
import styled from "styled-components";

import drone from "../img/Drone.png";

class Hero extends Component {
  render() {
    const Hero = styled.div`
      min-height: 100vh;
      background: #f5f0ec;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding-top: 120px;
      img {
        max-width: 429px;
        margin: auto;
        display: block;
      }
      h1 {
        color: #fff;
        font-size: 235px;
        text-align: center;
        margin: 0;
      }
      .quote {
        margin-bottom: 3rem;
      }
      p {
        text-align: center;
        font-size: 18px;
        opacity: 0.2262;
        text-transform: uppercase;
        letter-spacing: 1.29px;
        margin: 0;
        &.credit {
          text-transform: none;
          letter-spacing: 1px;
          font-size: 14px;
        }
      }
    `;

    return (
      <Hero>
        <img src={drone} alt="ByrdMR Drone" />
        <h1>F-210</h1>
        <div className="quote">
          <p>"The fastest drone on the planet"</p>
          <p className="credit">&ndash; The Wirecutter</p>
        </div>
      </Hero>
    );
  }
}

export default Hero;
