import styled from "styled-components";

export const ContainerItem = styled('div')(
  ({theme, width}) => ({
    width: width,
    [theme.mediaQueries.small]: {
      width: '100%',
    },
  })
);

