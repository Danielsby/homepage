import React from 'react';
import './frontpage.scss';

export const Frontpage: React.FC = () => {
    return (
        <div>
            <header>
                <h3 className='news-title'>News</h3>
            </header>

            <section className='status'>
                <p>Status: Open - Looking for a frontend developer position </p>
            </section>

            <article className='weather'>

            </article>

            <main className='news'>
                <article>
                    <p>Nimado projects are about to begin it's pre-production!</p>
                </article>
            </main>
        </div>
    );
};