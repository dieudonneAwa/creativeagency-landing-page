import styled, { css } from 'styled-components';
import { setColor } from '../../globals/GlobalStyles';
import { Facebook } from 'styled-icons/boxicons-logos';
import { Twitter } from 'styled-icons/boxicons-logos';
import { Dribbble } from 'styled-icons/boxicons-logos';
import { Linkedin } from 'styled-icons/boxicons-logos';

export const iconStyle = css`
  width: 25px;
  color: #aaa;
  margin: 15px 13px;
`;
export const FacebookIcon = styled(Facebook)`
  ${iconStyle}
`;
export const TwitterIcon = styled(Twitter)`
  ${iconStyle}
`;
export const DribbbleIcon = styled(Dribbble)`
  ${iconStyle}
`;
export const LinkedinIcon = styled(Linkedin)`
  ${iconStyle}
`;

export const TeamWrapper = styled.div`
  min-height: 120vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;

  .section-header {
    margin-top: 115px;
    margin-bottom: 80px;
    width: 670px;
    align-self: center;
    h5 {
      font-weight: 300;
      font-size: 1.4rem;
      color: #aaa;
      text-align: center;
    }
    h1 {
      font-weight: 400;
      font-size: 2.8rem;
      color: ${setColor.primaryColor};
      text-align: center;
      line-height: 45px;
      margin: 0;
    }
  }

  .team-members {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .bg-team {
      position: absolute;
      top: 65px;
      left: -5px;
      h1 {
        line-height: 0;
        font-size: 20rem;
        font-family: Poppins,sans-serif;
        color: ${setColor.primaryColor};
        opacity: .05;
        letter-spacing: 0;
      }
    }

    .team-dots {
      position: absolute;
      top: -18px;
      transform: translateX(99%);
      z-index: 2;
      height: 330px;
      width: 700px;
    }

    .jam-potrick, .ema-jonas, .mike-pens {
      margin: 0 20px;
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-end;
      align-items: center;
      z-index: 10;
      .member-name {
        color: ${setColor.primaryColor};
        text-align: center;
        margin-top: 30px;
      }
      .member-desription {
        color: #aaa;
        width: 200px;
        text-align: center;
        margin-top: 10px;
      }
    }
    img.member-imgs {
      height: 480px;
      width: 330px;
      box-shadow: 0 20px 20px rgba(0, 0, 0, .2);
    }
  }

  .catch-call {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 100px;

    button {
      background-color: ${setColor.primaryColor};
      color: #fff;
      font-size: 1rem;
      padding: 15px;
      width: 220px;
      border: 1px solid ${setColor.primaryColor};
      border-radius: 50px;
      box-shadow: 0 0 10px rgba(0, 0, 0, .4);
    }
  }
`;