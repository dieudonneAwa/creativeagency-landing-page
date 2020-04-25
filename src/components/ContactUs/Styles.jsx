import styled from 'styled-components';
import { setColor, screens } from '../../globals/GlobalStyles';

export const ContactUsWrapper = styled.div`
  height: 420px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  .contact-container {
    background-image: url('bg-contact-us.svg');
    background-size: cover;
    margin-bottom: -100px;
    width: 40%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;


    .section-header {
      margin-top: 30px;
      margin-bottom: 50px;
      width: 670px;
      align-self: center;
      h5 {
        font-weight: 300;
        font-size: 1.4rem;
        color: ${setColor.primaryColor};
        opacity: .16;
        text-align: center;
      }
      h1 {
        font-weight: 500;
        font-size: 2rem;
        color: ${setColor.primaryColor};
        text-align: center;
        line-height: 45px;
        margin-top: 10px;
      }
    }

    form {
      margin-top: 0px;
      display: flex;
      justify-content: center;
      align-items: center;

      input {
        width: 250px;
        border: 2px solid ${setColor.primaryColor};
        border-radius: 50px;
        padding: 13px;
      }
      button {
        padding: 6px;
        font-size: .9rem;
        background-color: ${setColor.primaryColor};
        border: 1px solid ${setColor.primaryColor};
        border-radius: 50px;
        color: #fff;
        width: 100px;
        margin: 0 0 0 30px;
        box-shadow: 0 5px 5px rgba(0, 0, 0, .2);

        &:hover {
          box-shadow: 0 10px 10px rgba(0, 0, 0, .1);
          cursor: pointer;
          transition: all .3s ease-out;
        }
      }
    }
  }


  ${screens.tablet`
    .contact-container {
      .section-header {
        margin-top: 20px;
        margin-bottom: 40px;
        width: 650px;
        h5 {
          font-size: 1.3rem;
        }
        h1 {
          font-size: 1.6rem;
          color: ${setColor.primaryColor};
          line-height: 35px;
        }
      }
  `}
`;
