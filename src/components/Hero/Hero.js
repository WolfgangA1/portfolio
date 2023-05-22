import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';

import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import React from 'react';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I AM Wolfgang Ashcraft <br />
        Full Stack Developer
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;