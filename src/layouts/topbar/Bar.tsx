import * as React from 'react';
import CustomHeader from "../../components/titles/CustomHeader";

interface BarProps {
  data: Array<string>,
  setThemeHandler: any,
  btnText: string,
}

const Bar: React.FC<BarProps> = (props) => {
  return (
    <div className="top-bar">
      <header className="top-bar__introduction">
        <section className="name">
        </section>
      </header>
    </div>
  )
};

export default Bar;
