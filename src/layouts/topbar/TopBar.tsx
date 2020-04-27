import * as React from 'react';
import {BigTitle, MediumTitle, SmallTitle} from "../../components/titles/Titles";

const TopBar = () => {
  return (
    <div className="top-bar">
      <header className="top-bar__title">
        <section className="name">
          <BigTitle title="Daniel By"/>
        </section>
        <section className="professions">
          <MediumTitle title="UI & Frontend Developer"/>
        </section>
      </header>

      <nav className="top-bar__navigation">
        <section className="projects">
          <BigTitle title="Homepage"/>
        </section>
      </nav>

      <footer className="top-bar__languages">
        <article className="language">
          <SmallTitle title="English"/>
        </article>
        <article className="language">
          <SmallTitle title="Korean"/>
        </article>
        <article className="language">
          <SmallTitle title="Japanese"/>
        </article>
        <article className="language">
          <SmallTitle title="Chinese"/>
        </article>
      </footer>
    </div>
  )
};

export default TopBar;
