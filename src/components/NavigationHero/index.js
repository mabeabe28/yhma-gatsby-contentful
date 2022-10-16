import React from 'react'
import { 
  Wrapper,
  NavContent,
  NavContentTitle,
  NavContentTagLine,
  NavigationLogo,
} from './NavigationHero.style';

import useScrollPosition from "../../hooks/useScrollPosition";
import YHMAimage from "../../images/YHMA-Logo-Yellow.png"


const NavigationHero = () => {

  const scrollPosition = useScrollPosition();


  return(
    <Wrapper>
        <NavContent scrollPosition={scrollPosition}>
          <NavContentTitle  transitionDuration={500}>
            <NavigationLogo src={YHMAimage} />
          </NavContentTitle>
          <NavContentTagLine transitionDuration={1000} delay={200}>
            <span><em>(acronym)</em> - <strong>You Had Me At</strong></span>
            <span>a group of friends sharing their lifestyle content online</span>
            <span><em>(website still in progress)</em></span>

          </NavContentTagLine>
        </NavContent>
        </Wrapper>
 
  );
};

export default NavigationHero
