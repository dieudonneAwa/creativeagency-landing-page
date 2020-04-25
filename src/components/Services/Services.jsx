import React from 'react';
import { ServicesWrapper } from './Styles'


const Services = () => (
  <ServicesWrapper>
    <div className="services-and-portfolio">
      <h1>services</h1>
      <h1>& portfolio</h1>
    </div>
    <div className="services">
      <div className="web-design">
        <img src="/Union 4.png" alt=""/>
        <div className="service-description">
          <h5>Web Design</h5>
          <p>modern web design services withnew trends and direction.</p>
        </div>
      </div>

      <div className="branding">
        <img src="/path 57.png" alt="" />
        <div className="service-description">
          <h5>Branding</h5>
          <p>highly professional branding and logo design work.</p>
        </div>
      </div>

      <div className="motion-graphics">
        <img src="/group 95.png" alt="" />
        <div className="service-description">
          <h5>Mortion Graphics</h5>
          <p>modern motion graphics and animation for businesses. </p>
        </div>
      </div>

      <div className="ui-design">
        <img src="/group 94.png" alt="" />
        <div className="service-description">
          <h5>UI/UX Design</h5>
          <p>Standard screen generation and design for all devices.</p>
        </div>
      </div>

      <div className="web-development">
        <img src="/Union 3.png" alt="" />
        <div className="service-description">
          <h5>Web Development</h5>
          <p>website development is something we are best in. </p>
        </div>
      </div>

      <div className="app-testing">
        <img src="/group 97.png" alt="" />
        <div className="service-description">
          <h5>App Testing</h5>
          <p>we test app for better user experience and results.</p>
        </div>
      </div>
    </div>
  </ServicesWrapper>
);

export default Services
