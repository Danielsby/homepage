import * as React from "react";

interface CustomHeaderProps {
  children: string;
  className?: string;
}

const CustomHeader: React.FC<CustomHeaderProps> = (props) => {
  return (
    <p
      className={props.className}
    >
      {props.children}
    </p>
  )
};

export default CustomHeader;
