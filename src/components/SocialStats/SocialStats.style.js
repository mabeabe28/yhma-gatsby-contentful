import styled from "styled-components";

export const Wrapper = styled('div')(
  ({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '100%',
    marginTop: theme.space.lg,
    marginBottom: theme.space.lg,

    [theme.mediaQueries.small]: {
      marginTop: theme.space.xl3,
    },
  })
);

export const Stat = styled('div')(
  ({theme}) => ({

    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '140px',
    margin: theme.space.md,
    [theme.mediaQueries.small]: {
      width: '50%',
      margin: 0,
    },
  })
);



export const StatValue = styled('div')(
  ({theme}) => ({
    fontSize: theme.fontSize.xl3,
    fontWeight: theme.weight.bold,
    width: '100%',
    textAlign: 'center',
  })
);

export const StatLabel = styled('div')(
  ({theme}) => ({
    width: '100%',
    fontSize: theme.fontSize.xs,
    textAlign: 'center',
  })
);