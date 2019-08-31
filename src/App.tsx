import React from 'react';
import './App.scss';
import {MainNavigationBar} from "./global/components/MainNavigationBar";
import {Languages} from "./global/components/Languages";

const App: React.FC = () => {
    return (
        <div className="App" style={{fontFamily: 'Arial'}}>

            <header className='mainTitle'>
                <h1>Danielsby</h1>
            </header>

            <section className='languages' style={{float: 'right'}} id='languages'>
                <Languages />
            </section>

            <nav className='navigationBar' style={{width: '100%'}} id='mainBar'>
                <MainNavigationBar />
            </nav>

            <main className='mainContent'>
                <div style={{marginTop: '3rem', marginLeft: '0.4rem', fontSize: '18px'}}>
                    <p>More content is coming very soon</p>
                </div>
            </main>

            <footer>
                <section>
                    <p></p>
                    <p></p>
                </section>
            </footer>
        </div>
    );
}

export default App;
