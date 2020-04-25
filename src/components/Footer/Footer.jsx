import React from 'react';
import { FacebookIcon, TwitterIcon, DribbbleIcon, LinkedinIcon } from '../Team/Styles';
import { FooterWrapper } from './Styles';
import { CloseCircleIcon } from '../Header/Styles';
import { setColor } from '../../globals/GlobalStyles';

const Footer = () => (
  <FooterWrapper>
    <hr className="top-line"/>
    <div className="footer-container">
      <div className="about-brand">
        <h4 className="brand">
          agency<small><CloseCircleIcon /></small>
        </h4>
        <p>A design agency shaping ideas into products.</p>
        <p> We help startups and enterprises invent, build and launch their next project.</p>
      </div>

      <div className="services">
        <h4>Services</h4>
        <ul>
          <li>Web Design</li>
          <li>App Design</li>
          <li>Photography</li>
          <li>Videography</li>
        </ul>
      </div>

      <div className="support">
        <h4>Support</h4>
        <ul>
          <li>Get support</li>
          <li>Contact</li>
          <li>My Blog</li>
          <li>Privacy Policy</li>
          <li>Pricing</li>
        </ul>
      </div>

      <div className="social">
        <h4>Social</h4>
        <FacebookIcon style={{ marginLeft: '0', color: `${setColor.primaryColor}`, opacity: '.7' }}/>
        <TwitterIcon style={{ marginLeft: '0', color: `${setColor.primaryColor}`, opacity: '.7' }} />
        <DribbbleIcon style={{ marginLeft: '0', color: `${setColor.primaryColor}`, opacity: '.7' }} />
        <LinkedinIcon style={{ marginLeft: '0', color: `${setColor.primaryColor}`, opacity: '.7' }} />
      </div>
    </div>
    <hr className="bottom-line"/>
    <div className="copyright">
      <p>&copy; frontendtest | All rights reserved 2020</p>
    </div>
  </FooterWrapper>
);

export default Footer
