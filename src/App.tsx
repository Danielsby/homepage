import React from 'react';

import './App.scss';
import {Main} from "./global/Main";

import {MainNavigationBar} from "./global/components/MainNavigationBar";
import {Languages} from "./global/components/Languages";
import {Frontpage} from "./global/layouts/pages/Frontpage";

const App: React.FC = () => {
    return (
        <div className="App" style={{fontFamily: 'Arial'}}>

            <header className='mainTitle'>
                <h1>Daniel By's Portfolio</h1>
            </header>

            <section className='languages' style={{float: 'right'}} id='languages'>
                <Languages />
            </section>

            <nav className='navigationBar' style={{width: '100%'}} id='mainBar'>
                <MainNavigationBar />
            </nav>

            <main className='mainContent'>
                <div style={{marginTop: '3rem', marginLeft: '0.4rem', fontSize: '18px'}}>
                    <Main />
                </div>
            </main>

            <footer className='page-information'>
                <a href="https://www.linkedin.com/dby">LinkedIn</a>
                <a href="https://www.github.com/danielsby">Github</a>
            </footer>
        </div>
    );
};

export default App;
