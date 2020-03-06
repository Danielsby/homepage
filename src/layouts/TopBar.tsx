import * as React from 'react';
import {BigTitle, SmallTitle} from "../components/Titles";
import {CVButton} from "./CVButton";

const TopBar = () => {
  return (
    <div className="top-bar">
      <header className="top-bar__title">
        <BigTitle title="Daniel By"/>
        <BigTitle title="UI/Frontend Developer"/>
      </header>

      <nav className="top-bar__navigation">
        <BigTitle title="News"/>
        <BigTitle title="Projects"/>
        <BigTitle title="Philosophy"/>
      </nav>

      <aside className="top-bar__cvbutton">
        <CVButton/>
      </aside>

      <footer className="top-bar__languages">
        <SmallTitle title="English"/>
        <SmallTitle title="Korean"/>
      </footer>
    </div>
  )
};

export default TopBar;
