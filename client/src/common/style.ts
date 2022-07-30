import { createGlobalStyle } from 'styled-components';
import { device, maxWidth } from '../../src/utils/device';

export const COLOR = {
  primary: '#504CCD',
  border: '#B1AEFF',
  box: '#f1f1f1',
};

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    background: white;
    font-family: 'Roboto';
  }

  :root {
    --header-height: 27px;
    --header-border: 5px;
    --header-margin: 23px;
    --header-size: calc(var(--header-height) + var(--header-margin) + var(--header-border));
    --main-margin-top: 33px;
    --main-margin-bottom: 32px;
    --color-primary: ${COLOR.primary};
    --color-border: ${COLOR.border};
    --color-box: ${COLOR.box};
  }

  @media screen and (max-width:640px) {
    :root {
      --screen-max-width: 90%;
      min-width: 500px;
    }
  }

  @media screen and ${device.mobile} {
    :root {
      --screen-max-width: ${maxWidth.mobile};
    }
  }

  @media screen and ${device.tablet} {
    :root {
      --screen-max-width: ${maxWidth.tablet};
    }
  }

  @media screen and ${device.laptop} {
    :root {
      --screen-max-width: ${maxWidth.laptop};
    }
  }

  /* @media screen and ${device.laptopL} {
    :root {
      --screen-max-width: ${maxWidth.laptopL};
    }
  } */
`;
