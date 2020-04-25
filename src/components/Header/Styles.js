import styled from 'styled-components';
import { PlayCircle } from 'styled-icons/fa-solid';
import { CloseCircle } from 'styled-icons/evaicons-solid';
import { setColor } from '../../globals/GlobalStyles';

export const PlayButtonIcon = styled(PlayCircle)`
  width: 75px;
  color: ${setColor.primaryColor};
  margin-left: 5px;
  border-radius: 50%;
  box-shadow: 0 0 5px rgba(0, 0, 0, .1);

  &:hover {
    box-shadow: 0 10px 10px rgba(0, 0, 0, .1);
    cursor: pointer;
    transition: all .5s ease-out;
  }
`;

export const HeaderWrapper = styled.header`
  position: relative;
  height: 100vh;

  .jumbotron {
    height: 100%;
    display: flex;
    justify-content: space-between;
    .intro {
      flex-basis: calc(100% - 50%);
      display: flex;
  
      .creative {
        max-width: 170px;
        h1 {
          margin-top: 405px;
          font-weight: 400;
          transform-origin: 70px;
          transform: rotate(-90deg);
          font-size: 11rem;
          color: ${setColor.primaryColor};
          opacity: .1;
        }
      }
      .creative-agency {
        max-width: calc(100% - 170px);
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-flow: column nowrap;
  
        .header-text {
          margin-top: 75px;
          h1 {
            color: ${setColor.primaryColor};
            font-size: 6.4rem;
            font-weight: 400;
            &:last-child {
              margin-top: -50px;
            }
          }
        }
        .watch-btn {
          display: flex;
          justify-content: center;
  
          span {
            padding: 25px;
            color: ${setColor.darkBlue};
            letter-spacing: -0.6px;
            font-weight: 500;
          }
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



export const CloseCircleIcon = styled(CloseCircle)`
  width: 13px;
  margin-top: -8px;
  color: ${setColor.primaryColor};
`;

export const Nav = styled.nav`
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
    color: ${setColor.darkBlue};
    flex-basis: 45%;
    &:hover {
      cursor: pointer;
    }
  }
  
  ul {
    flex-basis: 55%; 
    display: flex;
    list-style: none;
    z-index: 20;

    li {
      color: ${setColor.primaryColor};
      flex: 1;
      text-align: center;

      a {
        text-decoration: none;
        color: ${setColor.primaryColor};
      }

      &:last-child {
        button {
          margin: 0 0 0 60px;
          background-color: ${setColor.primaryColor};
          color: #fff;
          border-radius: 35px;
          border: 1px solid ${setColor.primaryColor};
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
