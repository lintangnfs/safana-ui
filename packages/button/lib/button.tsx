import React, { FC } from "react";

export interface IButton {
  text?: string;
  height?: string;
  weight?: string;
  onClick?(): void;
}

const Button : FC<IButton> = ({text, weight, height, onClick }) => {

  const handleChange = () => {

    if(onClick) {
      onClick();
    }
  }
  
  return <button onClick={handleChange}>{text}</button>
}

export default Button;
