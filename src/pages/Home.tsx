import React, { useState } from 'react';
import Bar from "../layouts/topbar/Bar";
import InternetLink from "../components/nav/Link";
import Accordion from "../components/accordion/Accordion";
const classNames = require('classnames');

const Home: React.FC = () => {
  const [data, setData] = useState(['Daniel By', 'UI & Frontend Developer', 'Homepage',
    'Footer', 'Settings', 'Change theme']);

  // Button
  const [theme, setTheme] = useState('light');
  const [btnText, setBtnText] = useState('Dark theme')
  // Set theme
  const setThemeHandler = () => {
    switch (theme) {
      case 'light':
        setTheme('dark');
        setBtnText('Light theme');
        break;
      default:
        setTheme('light');
        setBtnText('Dark theme');
        break;
    }
  }

  return (
    <div className="page">
      <header id="header">
      </header>

      <main>
        <section className='links'>
          <article className='github'>
            <InternetLink
              href="https://github.com/Danielsby"
              className='github'
            >
              Github
            </InternetLink>
          </article>

          <article className='linkedin'>
            <InternetLink
              href="https://www.linkedin.com/in/dby/"
              className='linkedin'
            >
              LinkedIn
            </InternetLink>
          </article>
        </section>
      </main>

      <footer id="footer">
      </footer>
    </div>
  );
};

export default Home;
