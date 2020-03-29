import * as React from 'react';
import {HomeContainer} from "../../containers/HomeContainer";

const MainWindow: React.FC = () => {
  return (
    <main className="main-window">
      <section className="main-window__content">
        <HomeContainer />
      </section>
    </main>
  )
}

export default MainWindow;
