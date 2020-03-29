import * as React from "react";

interface TitleProps {
  title: string;
}

export const BigTitle: React.FC<TitleProps> = (props) => {
  return (
    <h1>{props.title}</h1>
  )
};

export const MediumTitle: React.FC<TitleProps> = (props) => {
  return (
    <h3>{props.title}</h3>
  )
};

export const SmallTitle: React.FC<TitleProps> = (props) => {
  return (
    <h6>{props.title}</h6>
  )
};
