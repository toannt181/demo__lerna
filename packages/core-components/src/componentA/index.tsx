import React from "react";

interface IProps {
  text: string;
}

export default (props: IProps) => <h1>Hi {props.text}. I am component A.</h1>;
