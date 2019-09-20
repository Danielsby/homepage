import React from 'react';

import '../scss/App.scss';
import {Main} from "../middleware/routing/Main";

import {MainNavigationBar} from "../components/MainNavigationBar";
import Status from "../components/Status";
import Header from "../components/Header";

const App: React.FC = () => {
    return (
        <div className="App">
            <section className='languages' style={{float: 'right'}} id='languages'>
                <Status status={'open'} />
            </section>

            <header className='mainTitle'>
                <Header profession={'Frontend developer'}/>
            </header>

            <nav className='navigationBar' style={{width: '100%'}} id='mainBar'>
                <MainNavigationBar />
            </nav>

            <main className='mainContent'>
                <div style={{marginTop: '3rem', marginLeft: '0.4rem', fontSize: '18px'}}>
                    <Main />
                </div>
            </main>

            <footer className='page-information'>
                <a style={{margin: '1rem'}} href="https://www.linkedin.com/in/dby/">LinkedIn</a>
                <a  style={{margin: '8rem'}} href="https://www.github.com/danielsby">Github</a>
                <a href="https://www.github.com/nitji">Nitji</a>
            </footer>
        </div>
    );
};

export default App;
