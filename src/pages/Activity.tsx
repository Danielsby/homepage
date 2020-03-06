import React from 'react';

import '../scss/homereference.scss';
import {Main} from "../middleware/routing/Main";

import {MainNavigationBar} from "../components/MainNavigationBar";
import Status from "../components/Status";
import Header from "../components/Header";
import TopBar from "../layouts/TopBar";

const Activity: React.FC = () => {
    return (
        <div className="activity">
            <header className='activity__header'>
              <TopBar />
            </header>

            <main className='activity__main'>
              <section className="activity__main__sidebar">

              </section>

              <section className="activity__main__content">
                <p>Sidebar comes here</p>
              </section>

              <Main />
            </main>

            <footer className='activity__footer'>
                <a style={{margin: '1rem'}} href="https://www.linkedin.com/in/dby/">LinkedIn</a>
            </footer>
        </div>
    );
};

export default Activity;
