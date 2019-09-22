import React from 'react';

const AboutContainer: React.FC = () => {
    return (
        <>
            <article style={{marginRight: '1rem'}}>
                <h3>Personal facts</h3>
                <p>09.02.1992 Trondheim</p>
            </article>

            <section style={{marginRight: '1rem'}}>
                <h3>History</h3>
                <p>
                    Born in Trondheim. Studied in Vestfold.
                    Has worked in kindergarden for years.
                    Finished studies 2019. Went one week after to internship
                    to persuade frontend development with the use of react technology.
                </p>
            </section>

            <section style={{marginRight: '1rem'}}>
                <h3>Interests</h3>
                <p> I'm interested in a wide range of topics such as music and swimming. </p>
            </section>

            <section style={{marginRight: '1rem'}}>
                <h3>Studio Ghibli</h3>
                <p>
                    Their animation technique and process to produce quality through hard work has
                    been a big inspiration to me. I have been able to link the similarities and
                    differences between the hand-drawing animation industry to the software development industry.
                    I believe there is great things to learn from other industries.
                </p>
            </section>
        </>
    );
};

export default AboutContainer;