import React, { useState } from 'react';
import Bar from "../layouts/topbar/Bar";
import Btn from "../components/buttons/Btn";
import InternetLink from "../components/nav/Link";
const classNames = require('classnames');

const Home: React.FC = () => {
  // State
  const [data, setData] = useState(['Daniel By', 'UI & Frontend Developer', 'Homepage',
    'Footer', 'Settings', 'Change theme']);
  const [theme, setTheme] = useState('light');
  const [btnText, setBtnText] = useState('Change to dark theme')

  // Handlers
  const setThemeHandler = () => {
    switch (theme) {
      case 'light':
        setTheme('dark');
        setBtnText('Change to light theme');
        break;
      default:
        setTheme('light');
        setBtnText('Change to dark theme');
        break;
    }
  }

  return (
    <div className="home">
      <header
        className='home__top'
      >
        <Bar
          data={data}
        />
      </header>

      <main
        className={classNames({
          "home__center": true,
          [`home__center--${theme}`]: true,
        })}
      >
        <Btn
          className='btn'
          onClickHandler={setThemeHandler}
        >
          {btnText}
        </Btn>
      </main>

      <footer
        className='home__bottom'
      >
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
      </footer>
    </div>
  );
};

export default Home;
