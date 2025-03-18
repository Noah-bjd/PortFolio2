// src/components/Contact.tsx
import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'; // Import icons

const ContactSection = styled.section`
  padding: 4rem 2rem;
  background: #e29578;
`;

const ContactHeading = styled.h2`
  font-size: 2rem;
  color: #fff;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ContactInfo = styled.div`
  color: #fff;
`;

const ContactItem = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ContactLink = styled.a`
  color: #fff;
  text-decoration: none;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const IconContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-left: -3px;
`;

const IconLink = styled.a`
  color: #fff;
  font-size: 2rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const Contact: React.FC = () => {
  return (
    <ContactSection>
      <ContactHeading>
        <FaEnvelope /> Contact
      </ContactHeading>
      <ContactInfo>
        <ContactItem>
          <FaEnvelope /> Email me at{' '}
          <ContactLink href="mailto:BouljihadNouhaila@gmail.com">BouljihadNouhaila@gmail.com</ContactLink>
        </ContactItem>
      </ContactInfo>

      {/* LinkedIn and GitHub Icons */}
      <IconContainer>
        <IconLink href="https://www.linkedin.com/in/nouhaila-bouljihad-255b36234/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </IconLink>
        <IconLink href="https://github.com/Noah-bjd" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </IconLink>
      </IconContainer>
    </ContactSection>
  );
};

export default Contact;