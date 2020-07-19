import * as React from 'react';
import CustomHeader from "../../components/titles/CustomHeader";
import StyleText from "../../components/StyleText";

interface BarProps {
  data: Array<string>
}

const Bar: React.FC<BarProps> = (props) => {
  return (
    <div className="top-bar">
      <header className="top-bar__introduction">
        <section className="name">
          <CustomHeader>{props.data[1]}</CustomHeader>
        </section>
      </header>

      <footer className="top-bar__settings">
        <StyleText>{props.data[4]}</StyleText>
      </footer>
    </div>
  )
};

export default Bar;
