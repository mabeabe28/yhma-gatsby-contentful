import { css, SerializedStyles } from '@emotion/react';
import { getFontString } from './fonts';
import type { ITheme } from '../themes';

export interface IGlobalThemeObj {
  color?: string,
  linkColor?: string,
  backgroundColor?: string,
  headingFontFamily?: string,
}

export const globalStyle = ({ 
  slug, 
  textStyles, 
  colors,
  space,
  global, 
  mediaQueries, 
  fonts,
}: ITheme): SerializedStyles => (
  css((getFontString(slug)), {
    ':root': {
      /* Setting 1rem = 10px */
      fontSize: '62.5%',
    },

    '*': {
      boxSizing: 'border-box',
    },

    html: {
      height: '100%',
      padding: '0',
      margin: '0',
    },

    body: {
      fontFamily: fonts.body,
      // fontSize: '18px',
      // lineHeight: '1.5',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      color: colors[global?.color],
      padding: '0',
      // margin: '0',
      backgroundColor: colors[global.backgroundColor],
      ...textStyles?.globalText?.mobile,

      [mediaQueries.small]: {
        ...textStyles?.globalText?.tablet,
      },
      [mediaQueries.large]: {
        ...textStyles?.globalText?.desktop,
      },
    },

    'a, a:hover, a:focus, a:active, a:focus:active': {
      textDecoration: 'none',
      color: colors[global.linkColor],
      ':visited': {
        color: colors[global.linkColor],
      },
      ':hover': {
        textDecoration: 'none',
        color: colors[global.linkColor],
      },
      ':active': {
        textDecoration: 'none',
        color: colors[global.linkColor],
      },
    },

    img: {
      maxWidth: '100%',
    },

    svg: {
      display: 'block',
    },

    table: {
      border: `1px solid ${colors.greymid}`,
      borderCollapse: 'collapse',
      borderSpacing: 0,
      marginTop: space.medium,
      marginBottom: space.large,
      textAlign: 'left',
      display: 'block',
      overflowX: 'auto',
      whiteSpace: 'nowrap',
      width: 'fit-content',
      maxWidth: '100%',

      [mediaQueries.large]: {
        display: 'table',
        overflowX: 'visible',
        whiteSpace: 'normal',
      },

      'thead th': {
        backgroundColor: colors.primary,
        border: `1px solid ${colors.greymid}`,
        color: `${colors.white} !important`,
      },

      th: {
        padding: space.small,
        textAlign: 'left',

        [mediaQueries.small]: {
          minWidth: '15rem',
          padding: `${space?.medium} ${space?.medium}`,
        },
      },

      'tbody td': {
        border: `1px solid ${colors?.greymid}`,
        padding: space?.small,
        textAlign: 'left',

        [mediaQueries.small]: {
          minWidth: '15rem',
          padding: `${space?.small} ${space?.medium}`,
        },
      },

      // Scroll bar styling
      scrollbarWidth: 'thin', // For Firefox
      scrollbarColor: `${colors?.primary} transparent`, // For Firefox

      // For Chrome/Safari
      '&::-webkit-scrollbar': {
        backgroundColor: 'transparent',
        height: '8px',
      },

      '&::-webkit-scrollbar-track': {
        backgroundColor: 'transparent',
      },

      '&::-webkit-scrollbar-thumb': {
        backgroundColor: colors?.primary,
        borderRadius: '2rem',
      },
    },

    // Global Typography
    h1: {
      ...textStyles?.headingText?.primary?.mobile,
      fontFamily: fonts[global?.headingFontFamily],
      [mediaQueries.small]: {
        ...textStyles?.headingText?.primary?.tablet,
      },
      [mediaQueries.large]: {
        ...textStyles?.headingText?.primary?.desktop,
      },
    },

    h2: {
      ...textStyles?.headingText?.secondary?.mobile,
      fontFamily: fonts[global?.headingFontFamily],
      [mediaQueries.small]: {
        ...textStyles?.headingText?.secondary?.tablet,
      },
      [mediaQueries.large]: {
        ...textStyles?.headingText?.secondary?.desktop,
      },
    },

    h3: {
      fontFamily: fonts.heading,
      ...textStyles?.headingText?.tertiary?.mobile,
      [mediaQueries.small]: {
        ...textStyles?.headingText?.tertiary?.tablet,
      },
      [mediaQueries.large]: {
        ...textStyles?.headingText?.tertiary?.desktop,
      },
    },

    h4: {
      fontFamily: fonts.heading,
      ...textStyles?.headingText?.quaternary?.mobile,
      [mediaQueries.small]: {
        ...textStyles?.headingText?.quaternary?.tablet,
      },
      [mediaQueries.large]: {
        ...textStyles?.headingText?.quaternary?.desktop,
      },
    },

    p: {
      fontFamily: fonts.body,
      ...textStyles?.bodyText?.mobile,
      [mediaQueries.small]: {
        ...textStyles?.bodyText?.tablet,
      },
      [mediaQueries.large]: {
        ...textStyles?.bodyText?.desktop,
      },
    },

    '.sbdocs-wrapper': {
      marginTop: '70px',
    }
  })
);

const defaultGlobalTheme: IGlobalThemeObj = {
  color: 'initial',
  linkColor: 'greydark',
  backgroundColor: 'none',
  headingFontFamily: 'heading',
};

const global: {[key: string]: IGlobalThemeObj} = {
  horizon: {
    ...defaultGlobalTheme,
  },
  dcl: {
    ...defaultGlobalTheme,
    color: 'black',
    backgroundColor: 'offwhite',
    linkColor: 'primary',
  },
  lions: {
    ...defaultGlobalTheme,
    color: 'primary',
    backgroundColor: 'secondary',
    headingFontFamily: 'normal',
    linkColor: 'greydark',
  },
};

export default global;
