import React from "react";
import TopBar from "../../layouts/topbar/TopBar";
import MainLayout from "../../layouts/main/MainLayout";
import BottomBar from "../../layouts/bottombar/BottomBar";
import {Main} from "../../middleware/routing/Main";

const Home: React.FC = () => {
  return (
    <div className="home">
      <header className='home__header'>
        <TopBar/>
      </header>

      <main className="home__main">
        <MainLayout />
      </main>

      <footer className='home__footer'>
        <BottomBar/>
      </footer>
    </div>
  );
};

export default Home;
