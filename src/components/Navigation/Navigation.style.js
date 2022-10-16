import styled from "styled-components";
import { Link } from 'gatsby'
import FadeIn from 'react-fade-in';


export const NavigationContainer = styled('nav')(
  () => ({
    width: '100%',
    position: 'fixed',
    zIndex: 999,
    top: '0px',
  })
);

export const Wrapper = styled('div')(
  ({theme}) => ({
    //margin: `${theme.space.xl2} ${theme.space.xl2}`,
    backgroundColor: theme.palette.light,
    // padding: $space-2xl $space-3xl;
    padding: `${theme.space.xl2} ${theme.space.xl3}`,
    borderRadius: '0px 0px 12px 12px',

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
    position: 'absolute',
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

export const NavigationLogo = styled('img')(
  ({theme}) => ({
    width:'70px'
  })
);
