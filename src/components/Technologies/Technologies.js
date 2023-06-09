import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';

import React from 'react';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of Technologies in the web development world.
      From Back-end to Design
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem "/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>Experience with <br />
          React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem "/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>Experience with <br />
          Node and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;