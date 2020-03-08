import React from 'react';

import '../scss/homereference.scss';
import {Main} from "../middleware/routing/Main";

import TopBar from "../layouts/TopBar";
import BottomBar from "../layouts/BottomBar";
const Home: React.FC = () => {
  return (
    <div className="home">
      <header className='home__header'>
        <TopBar/>
      </header>

      <main className="home__main">
        <p>Main comes here</p>
      </main>

      <footer className='home__footer'>
        <BottomBar/>
      </footer>
    </div>
  );
};

export default Main;

// <main className='root__main'>
//   <section className="activity__main__sidebar">
//
//   </section>
//
//   <section className="root__content">
//     <p>Sidebar comes here</p>
//   </section>
//
//   <Main />
// </main>
