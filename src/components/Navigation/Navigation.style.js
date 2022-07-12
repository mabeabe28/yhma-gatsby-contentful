import styled from "styled-components";
import { Link } from 'gatsby'
import FadeIn from 'react-fade-in';


export const NavigationContainer = styled('nav')(
  () => ({
    width: '100%',
    position: 'fixed',
    zIndex: 999,
  })
);

export const Wrapper = styled('div')(
  ({theme}) => ({
    margin: `${theme.space.xl2} ${theme.space.xl2}`,
    backgroundColor: theme.palette.background,
    // padding: $space-2xl $space-3xl;
    padding: `${theme.space.xl2} ${theme.space.xl3}`,
    borderRadius: '12px',

    [theme.mediaQueries.small]: {
      margin: 0,
      borderRadius: 0,
    },
  })
);

export const MainNav = styled('div')(
  ({theme}) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: theme.space.xl3,

    borderBottom: 'solid 0.1px rgba(184, 184, 184, 0.5)',
    
    //todo remove when bottom is inactive
    paddingBottom: theme.space.xl2,
  })
);

export const StyledLinkLogo = styled(Link)(
  ({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    flexShrink: 0,
    gap: theme.space.md,
    fontWeight: theme.weight.bold,

    '&:hover': {
      color: theme.palette.primary,
    },

    [theme.mediaQueries.small]: {
      display: 'none',
    },
  })
);

export const NavigationMenu = styled(FadeIn)(
  ({theme}) => ({
    display: 'flex',
    width: '100%',
    listStyle: 'none',
    margin: 0,
    padding: '4px',
    justifyContent: 'center',
    gap: theme.space.xl3,
  })
);


export const NavigationMenuItem = styled('li')(
  () => ({
    display: 'inline-flex',
    alignItems: 'center',
    flexDirection: 'row',
  })
);


export const StyledLinkMenuItem = styled(Link)(
  ({theme}) => ({
    borderBottom: '1.5px solid transparent',
    textDecoration: 'none',

    '&:hover': {
      borderBottomColor: theme.palette.primary,
      color: theme.palette.primary,
    },

  })
);

export const StyledExternalLinkMenuItem = styled('a')(
  ({theme}) => ({
    borderBottom: '1.5px solid transparent',
    textDecoration: 'none',

    '&:hover': {
      borderBottomColor: theme.palette.primary,
      color: theme.palette.primary,
    },

  })
);

export const NavContent = styled('div')(
  ({theme, scrollPosition}) => ({
    marginTop: '60px',
    paddingBottom: theme.space.xl2,
    opacity: `${100-scrollPosition}%`,
    [theme.mediaQueries.small]: {
      marginTop: '8px',
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



