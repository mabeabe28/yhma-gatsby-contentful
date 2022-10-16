import React from 'react'
import { 
  Wrapper,
  Stat,
  StatValue,
  StatLabel,
} from './SocialStats.style';
import CountUp from 'react-countup';

const SocialStats = () => {

  const stats = [{
    value: 1.1,
    label: 'Instagram'
  },{
    value: 2.2,
    label: 'YouTube Subscribers'
  },{
    value: 350,
    label: 'Monetized YouTube Views'
  },{
    value: 125,
    label: 'Collective Reels & Tiktok Views'
  }];

  return(
   <Wrapper>
      {stats.map((item, i) => {
        return (
          <Stat key={i}>
             <StatValue>

             <CountUp 
                start={0} 
                end={item.value} 
                delay={0} 
                decimals={1}
                decimal=".">
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} /><span>k+</span>
                  </div>
                )}
              </CountUp>
             </StatValue>
             <StatLabel>{item.label}</StatLabel>
          </Stat>
        );
      })}
   </Wrapper>
  );
};

export default SocialStats;
