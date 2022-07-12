import styled from "styled-components";


export const Wrapper = styled('div')(
  () => ({
    backgroundColor: 'white',
    width: '100%',
  })
);

export const Hero = styled('div')(
  () => ({
    height: '100vh',
  })
);

export const Content = styled('div')(  
  ({darkMode}) => ({
    backgroundColor: darkMode ? 'black' : 'white',
    color: darkMode ? 'white' : 'black',
  })
);
