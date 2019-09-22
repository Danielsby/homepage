import React from 'react';
import Status from "../components/Status";

export const HomeContainer: React.FC = () => {
    return (
        <>
            <header className='content-header'>
                <h3 className='news-title'>News</h3>
            </header>

            <main className='content-main'>
                <article>
                    <p>Nitji web development is under pre-production!</p>
                </article>
            </main>
        </>
    );
};