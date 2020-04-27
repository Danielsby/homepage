import React from 'react';
import {MediumTitle} from "../../components/titles/Titles";

const ProjectsContainer: React.FC = () => {
    return (
        <>
            <header className='content-header'>
                <h3>Projects</h3>
            </header>

            <main className='content-main'>
              <section className="quality-sky">
                <MediumTitle title="Work for QualitySky" />
                <a href="www.google.com">Nara AI</a>
                <a href="www.google.com">Project-1</a>
              </section>
            </main>
        </>
    );
};

export default ProjectsContainer;
