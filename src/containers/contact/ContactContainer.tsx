import React from 'react';

const ContactContainer: React.FC = () => {
    return (
        <>
            <header
              className='content-header'
            >
                <h3>Contact information</h3>
            </header>

            <main
              className='content-main'
            >
                <p>Mail: Danielsby@outlook.com</p>
                <p>Phone-number: +47 40 88 58 45</p>
            </main>
        </>
    );
};

export default ContactContainer;
