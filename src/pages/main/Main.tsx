import React from 'react';

import '../../scss/homereference.scss';
import {Main} from "../../middleware/routing/Main";

import TopBar from "../../layouts/topbar/TopBar";
import BottomBar from "../../layouts/bottombar/BottomBar";

const Home: React.FC = () => {
  return (
    <div className="home">
      <header className='home__header'>
        <TopBar/>
      </header>

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
