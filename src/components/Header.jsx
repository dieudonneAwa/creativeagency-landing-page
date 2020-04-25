import React from 'react'
import Navbar from './Navbar';
import styled from 'styled-components';
import { PlayCircle } from 'styled-icons/fa-solid';

const PlayButtonIcon = styled(PlayCircle)`
  width: 50px;
  color: #502EFF;
  margin-left: 5px;
`;

const HeaderWrapper = styled.header`
  position: relative;
  height: 650px;

  .jumbotron {
    height: 100%;
    display: flex;
    justify-content: space-between;
  }

  .intro {
    flex-basis: calc(100% - 50%);
    display: flex;

    .creative {
      max-width: 170px;
      h1 {
        margin-top: 400px;
        font-weight: 400;
        transform-origin: 70px;
        transform: rotate(-90deg);
        font-size: 9rem;
        color: #502EFF;
        opacity: .1;
      }
    }
    .creative-agency {
      max-width: calc(100% - 170px);
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-flow: column-reverse nowrap;
      /* border: 1px dashed blue; */

      h1 {
        color: #502EFF;
        font-size: 4.5rem;
        line-height: -32px;
        font-weight: 500;
        margin-top: -200px;
      }
      .watch-btn {
        display: flex;
        justify-content: center;

        span {
          padding: 15px;
          color: #000964;
          letter-spacing: -0.6px;
          font-weight: 500;
        }
      }
    }
  }

  .side-img {
    flex-basis: 50%;
    img {
      height: 1090px;
      width: 110%;
      transform: translateX(-3%);
      transform: translateY(-20%);
    }
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Navbar />
      <div className="jumbotron">
        <div className="intro">
          <div className="creative">
            <h1>creative</h1>
          </div>
          <div className="creative-agency">
            <h1>creative</h1><h1>agency</h1>
            <div className="watch-btn">
              <PlayButtonIcon />
              <span>watch a video intro</span>
            </div>
          </div>
        </div>
        <div className="side-img">
          <img src="/image 1.png" alt="creative agency"/>
        </div>
      </div>
    </HeaderWrapper>
  )
}

export default Header
