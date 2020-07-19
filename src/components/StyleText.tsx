import * as React from 'react';

interface StyleTextProps {
  children: string;
  className?: string;
}

const StyleText: React.FC<StyleTextProps> = (props) => {
  return (
    <p>
      {props.children}
    </p>
  )
}

export default StyleText;