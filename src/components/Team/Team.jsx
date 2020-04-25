import React from 'react';
import { TeamWrapper, FacebookIcon, TwitterIcon, LinkedinIcon, DribbbleIcon } from './Styles';

const Team = () => (
  <TeamWrapper>
    <div className="section-header">
      <h5>Meet The Team</h5>
      <h1>great outcome always relay on the great foundation</h1>
    </div>

    <div className="team-members">

      <div className="bg-team">
        <h1>team</h1>
      </div>
      <img className="team-dots" src="team-dots.png" alt=""/>

      <div className="jam-potrick">
        <img className="member-imgs" src="/jam-potrick.png" alt=""/>
        <h3 className="member-name">
          jam potrick
        </h3>
        <p className="member-desription">
          Standard screen generation 
          and design for all
        </p>
        <div className="social-links">
          <FacebookIcon />
          <TwitterIcon />
          <DribbbleIcon />
          <LinkedinIcon />
        </div>
      </div>


      <div className="ema-jonas">
        <img className="member-imgs" src="/ema-jonas.png" alt="" />
        <h3 className="member-name">
          ema jonas
        </h3>
        <p className="member-desription">
          Standard screen generation 
          and design for all
        </p>
        <div className="social-links">
          <FacebookIcon />
          <TwitterIcon />
          <DribbbleIcon />
          <LinkedinIcon />
        </div>
      </div>

      
      <div className="mike-pens">
        <img className="member-imgs" src="/mike-pens.png" alt="" />
        <h3 className="member-name">
          mike pens
        </h3>
        <p className="member-desription">
          Standard screen generation 
          and design for all
        </p>
        <div className="social-links">
          <FacebookIcon />
          <TwitterIcon />
          <DribbbleIcon />
          <LinkedinIcon />
        </div>
      </div>
    </div>


    <div className="catch-call">
      <button>LET'S CATCH CALL</button>
    </div>
  </TeamWrapper>
);

export default Team;
