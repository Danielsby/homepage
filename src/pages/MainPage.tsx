import React from "react";
import TopBar from "../layouts/topbar/TopBar";

const MainPage: React.FC = () => {
  return (
    <div className="home">
      <header className='home__header'>
        <TopBar/>
      </header>

      <main className="home__main">
      </main>

      <footer className='home__footer'>
      </footer>
    </div>
  );
};

export default MainPage;
