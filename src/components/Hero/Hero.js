import React, { useState } from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => {
  return (

  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Very Own Portfolio
      </SectionTitle>
      <SectionText>
        Hello, I'm Mikel. In this Portfolio, I will show most of my skills, projects, accomplishments, and more. So sit back and enjoy my website. :)
      </SectionText>
      <Button onClick={() => window.location = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}>Learn More</Button>
    </LeftSection>
  </Section>
  )
};

export default Hero;