import { css } from "styled-components";

export const setColor = {
  primaryColor: '#502EFF',
  darkBlue: '#000964',
};


const sizes = {
  large: 1200,
  desktop: 992,
  tablet: 768,
  phone: 576,
  smallPhone: 368,
};

export const screens = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 10}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});