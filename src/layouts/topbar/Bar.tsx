import * as React from 'react';
import CustomHeader from "../../components/titles/CustomHeader";
import StyleText from "../../components/StyleText";
import Btn from "../../components/buttons/Btn";

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
          <CustomHeader>{props.data[0]}</CustomHeader>
          <CustomHeader>{props.data[1]}</CustomHeader>
        </section>
      </header>

      <footer className="top-bar__settings">
        <StyleText>{props.data[4]}</StyleText>
        <Btn
          className='btn'
          onClickHandler={props.setThemeHandler}
        >
          {props.btnText}
        </Btn>
      </footer>
    </div>
  )
};

export default Bar;
