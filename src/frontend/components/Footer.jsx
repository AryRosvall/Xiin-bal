import React from 'react';
import githubLogo from '../assets/static/github.png';
import twitterLogo from '../assets/static/twitter.png';
import linkedinLogo from '../assets/static/linkedin.png';
import '../assets/styles/components/footer.scss';

const Footer = () => {

  return (
    <footer className='footer'>
      <span>Powered by @AryRosvall</span>
      <a href='https://github.com/AryRosvall' rel='noopener noreferrer' target='_blank'>
        <img src={githubLogo} alt='' />
      </a>
      <a href='https://twitter.com/AryRosvall' rel='noopener noreferrer' target='_blank'>
        <img src={twitterLogo} alt='' />
      </a>
      <a href='https://www.linkedin.com/in/arantxarosas/' rel='noopener noreferrer' target='_blank'>
        <img src={linkedinLogo} alt='' />
      </a>
    </footer>
  );
};

export default Footer;
