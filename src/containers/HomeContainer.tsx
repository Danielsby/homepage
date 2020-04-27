import React from 'react';
import {Main} from "../middleware/routing/Main";
import TopBar from "../layouts/topbar/TopBar";
import BottomBar from "../layouts/bottombar/BottomBar";

export const HomeContainer: React.FC = () => {
  return (
    <div className="home">
      <header className='home__header'>
        <TopBar/>
      </header>

      <main className="home__main">
        <Main />
      </main>

      <footer className='home__footer'>
        <BottomBar/>
      </footer>
    </div>
  );
};
