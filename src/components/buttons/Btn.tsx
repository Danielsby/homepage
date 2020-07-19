import * as React from 'react';

interface BtnProps {
    className?: string;
    onClickHandler?: () => void;
}

const Btn: React.FC<BtnProps> = (props) => {
  return (
    <button
      className={props.className}
      onClick={props.onClickHandler}
    >
      {props.children}
    </button>
  )
};

export default Btn;