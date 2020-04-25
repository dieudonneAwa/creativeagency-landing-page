import styled from 'styled-components';
import { setColor, screens } from '../../globals/GlobalStyles';

export const FooterWrapper = styled.footer`
  background-image: url('/bg-footer.png');
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 200px!important;
  padding: 50px 250px 0 250px;

  .top-line, .bottom-line {
    border: 1px solid ${setColor.primaryColor};
    opacity: .2;
  }

  .footer-container {
    display: flex;
    align-items: flex-start;
    height: 350px;

    .about-brand, .services, .support, .social {
      flex-basis: 25%;
      margin-top: 100px;
      padding-right: 30px;

      h4 {
        margin-bottom: 24px;
      }
    }
    .services, .support, .social {
      h4 {
        font-weight: 300;
        color: ${setColor.darkBlue};
      }
    }

    .about-brand {
      .brand {
        display:flex;
        align-items: center;
        font-size: 1.4rem;
        font-weight: 600;
        color: ${setColor.darkBlue};
      }
      p {
        font-size: .8rem;
        color: ${setColor.primaryColor};
        opacity: .7;
      }
    }
  }

  .services, .support {
    ul {
      list-style: none;
      color: ${setColor.primaryColor};
      font-size: .85rem;
      line-height: 30px;
      opacity: .7;
    }
  }

  .support {
      ul {
      line-height: 22px!important;
    }
  }

  .copyright {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    color: ${setColor.primaryColor};
    opacity: .7;
  }

  ${screens.tablet`
    padding: 50px 180px 0 180px;
  `}
`;
