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
  const [btnText, setBtnText] = useState('Dark theme')

  // Handlers
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
    <div className="home">
      <header
        className={classNames({
          'home__top': true,
          [`home__center--${theme}`]: true,
        })}
      >
        <Bar
          data={data}
        />
      </header>

      <main
        className={classNames({
          "home__center": true,
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
        className={classNames({
          'home__bottom': true,
          [`home__center--${theme}`]: true,
        })}
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
