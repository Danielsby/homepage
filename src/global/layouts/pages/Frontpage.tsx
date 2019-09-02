import React from 'react';

export const Frontpage: React.FC = () => {
    return (
        <div>
            <header>
                <h3>News</h3>
            </header>

            <section className='status'>
                <h6>These webpages are under active development and might therefore be lacking for the time being.</h6>
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