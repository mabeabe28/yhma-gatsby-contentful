import React from 'react'
import { 
  NavigationContainer,
  Wrapper,
  MainNav,
  StyledLinkLogo,
  NavigationMenu,
  NavigationMenuItem,
  StyledLinkMenuItem,
  StyledExternalLinkMenuItem,
} from './Navigation.style';




const Navigation = () => {

  
  return(
    <NavigationContainer>
    <Wrapper>

      <MainNav>

        <StyledLinkLogo to="/">
          YHMA
        </StyledLinkLogo>

        <NavigationMenu>
          <NavigationMenuItem>
            <StyledLinkMenuItem to="/" activeClassName="active">
              Home
            </StyledLinkMenuItem>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <StyledExternalLinkMenuItem href="https://youtube.com/yhma-team" target={'_blank'}>
              YouTube
            </StyledExternalLinkMenuItem>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <StyledExternalLinkMenuItem href="https://instagram.com/youhadme.at" target={'_blank'}>
              Instagram
            </StyledExternalLinkMenuItem>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <StyledExternalLinkMenuItem href="https://archived.youhadme.at" target={'_blank'}>
              Archive
            </StyledExternalLinkMenuItem>
          </NavigationMenuItem>
        </NavigationMenu>

      </MainNav>

    </Wrapper>
  </NavigationContainer>
  );
};

export default Navigation
