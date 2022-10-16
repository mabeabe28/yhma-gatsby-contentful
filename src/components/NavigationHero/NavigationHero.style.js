import styled from "styled-components";
import FadeIn from 'react-fade-in';



export const Wrapper = styled('div')(
  ({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',

    backgroundColor: 'none',
    // padding: $space-2xl $space-3xl;
    borderRadius: '12px',
    [theme.mediaQueries.small]: {
      margin: 0,
      borderRadius: 0,
    },
  })
);


export const NavContent = styled('div')(
  ({theme, scrollPosition}) => ({
    marginTop: '140px',
    paddingBottom: theme.space.xl2,
    opacity: `${100-scrollPosition}%`,
    [theme.mediaQueries.small]: {
      marginTop: '120px',
      paddingBottom: 0,
      paddingLeft: theme.space.md,
      paddingRight: theme.space.md,
    },
  })
);

export const NavigationLogo = styled('img')(
  ({theme, scrollPosition}) => ({
    width: '180px',
    [theme.mediaQueries.small]: {
      marginTop: '120px',
      paddingBottom: 0,
      paddingLeft: theme.space.md,
      paddingRight: theme.space.md,
    },
  })
);

export const NavContentTitle = styled(FadeIn)(
  ({theme}) => ({
    fontSize: '80px',
    fontWeight: theme.weight.bold,
    lineHeight: 1,
    width: '100%',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center'
  })
);

export const NavContentTagLine = styled(FadeIn)(
  () => ({
    width: '100%',
    textAlign: 'center',
  })
);



