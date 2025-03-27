// src/components/About.tsx
import React from 'react';
import styled from 'styled-components';
import { SiReact, SiHtml5, SiCss3, SiJavascript, SiTypescript, SiGit, SiLinux, SiDocker, SiC, SiCplusplus, SiNextdotjs, SiDotnet } from 'react-icons/si';
import './../styles/about.css';

const AboutSection = styled.section`
  padding: 4rem 2rem;
  background-color: rgba(222, 157, 54, 0.5);
  max-width: 800px;
  margin: 0 auto;
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SkillCategory = styled.li`
  margin-bottom: 2rem;
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  color: #3d405b;
  margin-bottom: 1rem;
`;

const SkillItems = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const SkillItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  color: #3d405b;
  background: #fbf6f6;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const IconHeadingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem; /* Add spacing below the icon and heading */
`;

const About: React.FC = () => {
  return (
    <AboutSection>
      {/* Icon and Heading */}
      <IconHeadingContainer>
        <SiReact style={{ fontSize: '2.5rem', marginRight: '10px' }} className="react-icon" />
        <h3>Skills</h3>
      </IconHeadingContainer>

      {/* Skills List */}
      <SkillsList>
        {/* Systems & Tools */}
        <SkillCategory>
          <CategoryTitle>Systems & Tools</CategoryTitle>
          <SkillItems>
            <SkillItem><SiLinux /> Unix/Linux</SkillItem>
            <SkillItem><SiLinux /> GNU/Linux</SkillItem>
            <SkillItem><SiGit /> Git</SkillItem>
            <SkillItem><SiDocker /> Docker</SkillItem>
            <SkillItem>Networking</SkillItem>
            <SkillItem>Shell</SkillItem>
            <SkillItem>Makefile</SkillItem>
            <SkillItem>DOM</SkillItem>
            <SkillItem>UI/UX Design</SkillItem>
          </SkillItems>
        </SkillCategory>

        {/* Computer Systems Programming Languages */}
        <SkillCategory>
          <CategoryTitle>Computer Systems Programming Languages</CategoryTitle>
          <SkillItems>
            <SkillItem><SiC /> C</SkillItem>
            <SkillItem><SiCplusplus /> C++</SkillItem>
            <SkillItem> C#</SkillItem>
            <SkillItem><SiHtml5 /> HTML</SkillItem>
            <SkillItem><SiCss3 /> CSS</SkillItem>
            <SkillItem><SiJavascript /> JavaScript</SkillItem>
            <SkillItem><SiTypescript /> TypeScript</SkillItem>
            <SkillItem>SQL</SkillItem>
            <SkillItem>Shell Scripting</SkillItem>
          </SkillItems>
        </SkillCategory>

        {/* Frameworks & Libraries */}
        <SkillCategory>
          <CategoryTitle>Frameworks & Libraries</CategoryTitle>
          <SkillItems>
            <SkillItem><SiReact /> React</SkillItem>
            <SkillItem><SiNextdotjs /> Next.js</SkillItem>
            <SkillItem>Blazor</SkillItem>
            <SkillItem><SiDotnet /> .Net</SkillItem>
            <SkillItem>Synfusion</SkillItem>
          </SkillItems>
        </SkillCategory>

        {/* Personal Skills */}
        <SkillCategory>
          <CategoryTitle>Personal Skills</CategoryTitle>
          <SkillItems>
            <SkillItem>Self-Learner</SkillItem>
            <SkillItem>Creative Problem Solver</SkillItem>
            <SkillItem>Team Collaboration</SkillItem>
          </SkillItems>
        </SkillCategory>
      </SkillsList>
    </AboutSection>
  );
};

export default About;