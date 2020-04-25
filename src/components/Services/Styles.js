import styled from 'styled-components';
import { setColor, screens } from '../../globals/GlobalStyles';

export const ServicesWrapper = styled.div`
  height: 120vh;
  width: 100%;
  background-color: ${setColor.primaryColor};
  background-image: url('/services@2x.png');
  background-size: cover;
  padding: 180px 272px 100px 272px;

  .services-and-portfolio {
    width: 100%;

    h1 {
      color: #fff;
      font-size: 5.2rem;
      font-weight: 400;
      letter-spacing: -0.8px;
      font-family: Roboto;
      &:last-child {
        margin-top: -40px;
      }
    }
  }
  .services {
    display: flex;
    flex-flow: row wrap;
    margin: 100px 0;

    .web-design, .web-development, .branding,
    .ui-design, .app-testing, .motion-graphics {
      flex-basis: calc(100% / 3);
      height: 200px;
      display: flex;
      flex-flow: row nowrap;
      color: #fff;
      justify-content: flex-start;
      h5 {
        margin: 5px 15px;
        font-weight: 500;
      }
      p {
        padding: 10px 15px;
        font-weight: lighter;
        opacity: .9;
      }

      img {
        height: 30px;
      }
    } 
  }

    ${screens.tablet`
        padding: 180px 190px 100px 190px;

        .services-and-portfolio {
          h1 {
            font-size: 4rem;
          }
        }
    `}
`;