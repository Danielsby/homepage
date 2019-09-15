import React from 'react';
import '../css/frontpage.scss';
import Status from "../presentations/components/Status";

export const Frontpage: React.FC = () => {
    return (
        <div>
            <header className='title-news'>
                <h3 className='news-title'>News</h3>
            </header>

            <article className='weather'>

            </article>

            <main className='news'>
                <article>
                    <p>Nitji web development is under pre-production!</p>
                </article>
            </main>
        </div>
    );
};