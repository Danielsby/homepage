import React from 'react';
import Status from "../components/Status";
import TopBar from "../layouts/TopBar";
import BottomBar from "../layouts/BottomBar";

export const HomeContainer: React.FC = () => {
    return (
        <>
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
        </>
    );
};
