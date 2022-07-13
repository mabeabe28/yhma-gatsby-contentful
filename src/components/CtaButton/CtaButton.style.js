import styled from "styled-components";

export const ButtonContainer = styled('div')(
  ({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    [theme.mediaQueries.small]: {
      margin: 0,
    },
  })
);

export const CtaTitle = styled('div')(
  ({theme}) => ({
    fontWeight: theme.weight.bold,
    backgroundColor: theme.palette.background,
    width: '100%',
    textAlign: 'center',
    padding: theme.space.md,
  })
);

export const Button = styled('a')(
  ({theme}) => ({
    backgroundColor: theme.palette.primary,
    color: '#fff',
    width: 'auto',
    padding: `${theme.space.xl} ${theme.space.xl3}`,
    transition: 'ease-in-out .8s',
    textTransform: 'uppercase',
    '&:hover': {
      backgroundColor: theme.palette.dark,
      color: '#fff',
      transition: 'ease-in-out .3s',
    }
  })
);

