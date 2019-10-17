import React from 'react';

import '../scss/home.scss';
import {Main} from "../middleware/routing/Main";

import {MainNavigationBar} from "../components/MainNavigationBar";
import Status from "../components/Status";
import Header from "../components/Header";

const Home: React.FC = () => {
    return (
        <div className="app">
            <section className='status'>
                <Status status={'has a position'} />
            </section>

            <header className='title'>
                <Header profession={'Frontend developer'}/>
            </header>

            <nav className='navigation'>
                <MainNavigationBar />
            </nav>

            <main className='content'>
                <Main />
            </main>

            <footer className='information'>
                <a style={{margin: '1rem'}} href="https://www.linkedin.com/in/dby/">LinkedIn</a>
                <a  style={{margin: '8rem'}} href="https://www.github.com/danielsby">Github</a>
                <a href="https://www.github.com/nitji">Nitji</a>
            </footer>
        </div>
    );
};

export default Home;
