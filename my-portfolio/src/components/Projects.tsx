// src/components/Projects.tsx
import React from 'react';
import styled from 'styled-components';
import { FaCode } from 'react-icons/fa'; // Import the Code icon

const ProjectsSection = styled.section`
  padding: 4rem 2rem;
  background-color: rgba(114, 153, 116, 0.5);
  max-width: 800px;
  margin: 0 auto;
`;

const ProjectList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ProjectItem = styled.li`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const LeftSection = styled.div`
  width: 200px; /* Fixed width for the left section */
  text-align: right;

  @media (max-width: 768px) {
    width: 100%;
    text-align: left;
  }
`;

const RightSection = styled.div`
  flex: 1;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #3d405b;
  margin-bottom: 0.25rem;
`;

const ProjectDate = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 0.5rem;
`;

const FreelanceTag = styled.span`
  font-size: 0.9rem;
  color: #666;
  font-style: italic;
`;

const ProjectDescription = styled.ul`
  list-style: disc;
  padding-left: 1.5rem;
  margin: 0;
`;

const ProjectDescriptionItem = styled.li`
  font-size: 1rem;
  color: #333;
  line-height: 1.6;
  margin-bottom: 0.5rem;
`;
const IconHeadingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem; /* Add spacing below the icon and heading */
`;
const Projects: React.FC = () => {
  return (
    <ProjectsSection>
        <IconHeadingContainer>
                <FaCode style={{ fontSize: '2.5rem', marginRight: '10px' }} className="react-icon"  /> {/* Code Icon */}
                <h3>Work and Projects</h3>
        </IconHeadingContainer>
      <ProjectList>
        {/* NEUPONG Project */}
        <ProjectItem>
          <LeftSection>
            <ProjectTitle>NEUPONG</ProjectTitle>
            <ProjectDate>Next.js,PostgreSQL, WebSockets</ProjectDate>
            <FreelanceTag>Team Project</FreelanceTag>
          </LeftSection>
          <RightSection>
            <ProjectDescription>
              <ProjectDescriptionItem>
                Developed and designed a ping-pong game website using Next.js and Tailwind CSS.
              </ProjectDescriptionItem>
              <ProjectDescriptionItem>
                Responsibilities included debugging algorithms, assessing security maturity, and making design changes to existing architectures.
              </ProjectDescriptionItem>
              <ProjectDescriptionItem>
                Designed user interfaces.
              </ProjectDescriptionItem>
            </ProjectDescription>
          </RightSection>
        </ProjectItem>

        {/* CCS-Power Project */}
        <ProjectItem>
          <LeftSection>
            <ProjectTitle>CCS-Power</ProjectTitle>
            <ProjectDate>C#, .NET, Blazor</ProjectDate>
            <FreelanceTag>Job</FreelanceTag>
          </LeftSection>
          <RightSection>
            <ProjectDescription>
              <ProjectDescriptionItem>
                Contributed to the development of a Manufacturing Execution System (MES) for the animal feed industry using Blazor technology.
              </ProjectDescriptionItem>
              <ProjectDescriptionItem>
                QA Analyst - Focused on testing, identifying bugs, and ensuring the application meets requirements.
              </ProjectDescriptionItem>
            </ProjectDescription>
          </RightSection>
        </ProjectItem>

        {/* Minishell Project */}
        <ProjectItem>
          <LeftSection>
            <ProjectTitle>Minishell</ProjectTitle>
            <ProjectDate>C Programming</ProjectDate>
            <FreelanceTag>Team Project</FreelanceTag>
          </LeftSection>
          <RightSection>
            <ProjectDescription>
              <ProjectDescriptionItem>
                Developed a simplified Unix shell in C, with command parsing, process management, I/O redirection, piping, and signal handling.
              </ProjectDescriptionItem>
              <ProjectDescriptionItem>
                Created built-in commands for enhanced usability.
              </ProjectDescriptionItem>
            </ProjectDescription>
          </RightSection>
        </ProjectItem>

        {/* FT_InternetRelayChat Project */}
        <ProjectItem>
          <LeftSection>
            <ProjectTitle>FT_Irc</ProjectTitle>
            <ProjectDate>C++, Socket Programming</ProjectDate>
            <FreelanceTag>Team Project</FreelanceTag>
          </LeftSection>
          <RightSection>
            <ProjectDescription>
              <ProjectDescriptionItem>
                Built a custom IRC server in C++ with socket programming, handling user authentication, channels, and messages.
              </ProjectDescriptionItem>
              <ProjectDescriptionItem>
                Ensured scalability and efficiency through optimized code and testing.
              </ProjectDescriptionItem>
            </ProjectDescription>
          </RightSection>
        </ProjectItem>        
      </ProjectList>
    </ProjectsSection>
  );
};

export default Projects;