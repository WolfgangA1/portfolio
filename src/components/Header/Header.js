import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

import { DiCssdeck } from 'react-icons/di';
import Link from 'next/link';
import React from 'react';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="http://WolfgangA1.github.io/portfolio">
        <a style={{display: "flex", alignItems: "center", color: 'white', marginBottom:'20px' }}>
          <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#projects'>
        <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech'>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about'>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/WolfgangA1">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/wolfgang-ashcraft/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
