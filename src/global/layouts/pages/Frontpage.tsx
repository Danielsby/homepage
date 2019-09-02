import React from 'react';

export const Frontpage: React.FC = () => {
    return (
        <div>
            <header>
                <h3>News</h3>
            </header>

            <section className='status'>
                These webpages are under active development.
            </section>

            <article className='weather'>

            </article>

            <main className='news'>
                Nimado projects are about to begin it's pre-production!
            </main>

            <footer className='page information'>
            </footer>
        </div>
    );
};