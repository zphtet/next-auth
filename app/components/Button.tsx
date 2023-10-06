"use client";
import React from "react";

type ButtonProps = {
  text: string;
  onClickFun: () => void;
};

const Button = (props: ButtonProps) => {
  const { text, onClickFun } = props;
  return <button onClick={onClickFun}>{text}</button>;
};

export default Button;
