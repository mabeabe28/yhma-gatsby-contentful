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
    position: 'fixed',
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
      marginTop: '80px',
      paddingBottom: 0,
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
  })
);

export const NavContentTagLine = styled(FadeIn)(
  () => ({
    width: '100%',
    textAlign: 'center',
  })
);



