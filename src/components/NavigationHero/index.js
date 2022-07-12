import React from 'react'
import { 
  Wrapper,
  NavContent,
  NavContentTitle,
  NavContentTagLine,
} from './NavigationHero.style';

import useScrollPosition from "../../hooks/useScrollPosition";



const NavigationHero = () => {

  const scrollPosition = useScrollPosition();


  return(
    <Wrapper>
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
        </Wrapper>
 
  );
};

export default NavigationHero
