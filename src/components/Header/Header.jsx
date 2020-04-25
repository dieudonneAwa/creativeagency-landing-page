import React from 'react'
import Navbar from './Navbar';
import { HeaderWrapper, PlayButtonIcon } from './Styles';

const Header = () => (
  <HeaderWrapper>
    <Navbar />
    <div className="jumbotron">
      <div className="intro">
        <div className="creative">
          <h1>creative</h1>
        </div>
        <div className="creative-agency">
          <div className="header-text">
            <h1>creative</h1><h1>agency</h1>
          </div>
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
);

export default Header
