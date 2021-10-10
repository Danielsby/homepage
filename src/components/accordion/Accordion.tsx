import * as React from "react";

interface AccordionProps {
  className?: string;
  buttonName?: string;
  children?: any;
  onClickHandler: () => void;
}

const Accordion: React.FC<AccordionProps> = (
  {
    className,
    buttonName,
    children
  }) => {
  return (
    <div className="accordion">
      <button className="accordion__button">
        {buttonName}
      </button>

      <div className="accordion__content">
        {children}
      </div>
    </div>
  )
}

export default Accordion;