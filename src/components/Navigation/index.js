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
  NavContent,
  NavContentTitle,
  NavContentTagLine,
} from './Navigation.style';

import useScrollPosition from "../../hooks/useScrollPosition";



const Navigation = () => {

  const scrollPosition = useScrollPosition();
  
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

      {(scrollPosition < 100) && (
        <NavContent scrollPosition={scrollPosition}>
          <NavContentTitle  transitionDuration={500}>
            YHMA
          </NavContentTitle>
          <NavContentTagLine transitionDuration={1000} delay={200}>
            <span><em>(acronym)</em> - <strong>You Had Me At</strong></span>
            <span>a group of friends sharing their lifestyle content online</span>
            <span>New Website in Progress...</span>

          </NavContentTagLine>
      </NavContent>
      )}
      

    </Wrapper>
  </NavigationContainer>
  );
};

export default Navigation
