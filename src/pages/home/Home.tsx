import React from "react";
import TopBar from "../../layouts/topbar/TopBar";
import MainWindow from "../../layouts/main/MainWindow";
import BottomBar from "../../layouts/bottombar/BottomBar";

const Home: React.FC = () => {
  return (
    <div className="home">
      <header className='home__header'>
        <TopBar/>
      </header>

      <main className="home__main">
        <MainWindow />
      </main>

      <footer className='home__footer'>
        <BottomBar/>
      </footer>
    </div>
  );
};

export default Home;
