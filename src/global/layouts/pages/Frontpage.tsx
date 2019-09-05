import React from 'react';
import './frontpage.scss';

export const Frontpage: React.FC = () => {
    return (
        <div>
            <header>
                <h3 className='news-title'>News</h3>
            </header>

            <section className='status'>
                <h6>Webpages: Under active development and might therefore be lacking for the time being.</h6>
                <h6>Status: Open - Looking for a frontend developer position </h6>
            </section>

            <article className='weather'>

            </article>

            <main className='news'>
                <article>
                    Nimado projects are about to begin it's pre-production!
                </article>
            </main>
        </div>
    );
};