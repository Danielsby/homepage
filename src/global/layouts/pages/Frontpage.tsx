import React from 'react';

export const Frontpage: React.FC = () => {
    return (
        <div>
            <header>
                <h3>News</h3>
            </header>

            <section className='status'>
                <h6>Webpages: Under active development and might therefore be lacking for the time being.</h6>
                <h6>Status: Open - Looking for a frontend developer position </h6>
            </section>

            <article className='weather'>

            </article>

            <main className='news'>
                <article style={{borderLeft: '3px solid pink', padding: '2rem', marginRight: '30rem', marginLeft: '2rem'}}>
                    Nimado projects are about to begin it's pre-production!
                </article>
            </main>

            <footer className='page information'>
            </footer>
        </div>
    );
};