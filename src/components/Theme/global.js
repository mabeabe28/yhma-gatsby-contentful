// const breakpoints = ['576px', '768px', '992px', '1200px'];

// breakpoints['default'] = '0px';
// breakpoints['small'] = breakpoints[0];
// breakpoints['medium'] = breakpoints[1];
// breakpoints['large'] = breakpoints[2];
// breakpoints['xlarge'] = breakpoints[3];

export const theme = {
  space: {
    xs: '2px',
    sm: '4px',
    md: '8px',
    lg: '16px',
    xl: '20px',
    xl2: '24px',
    xl3: '48px',
  },
  /* font-size */
  fontSize: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    xl2: '24px',
    xl3: '32px',
    xl4: '48px',
    xl5: '64px',
    xl6: '76px',
  },
  /* font-weight */
  weight: {
    body: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    heavy: 900,
  },
  /**colors */
  palette: {
    dark: '#000100',
    light: '#f8f8f8',
    primary: '#94c5cc',
    secondary: '#b4d2e7',
    background: '#f8f8f8',
  },
  /**media */
  mediaQueries: {
    small : `@media screen and (max-width: 767px)`
  }
};


// const mediaQueries: IMediaQueriesThemeObj = {
//   untilSmall: `@media screen and (max-width: calc(${breakpoints.small } - 1px))`,
//   small: `@media screen and (min-width: ${breakpoints.default})`,
//   untilMedium: `@media screen and (max-width: calc(${breakpoints.medium} - 1px))`,
//   medium: `@media screen and (min-width: ${breakpoints.small})`,
//   untilLarge: `@media screen and (max-width: calc(${breakpoints.large} - 1px))`,
//   large: `@media screen and (min-width: ${breakpoints.medium})`,
//   untilXLarge: `@media screen and (max-width: calc(${breakpoints.xlarge} - 1px))`,
//   xLarge: `@media screen and (min-width: ${breakpoints.large})`,
// };

