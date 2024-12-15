import React from "react";
// import "./Button.scss";

export interface ButtonProps {
  label: string;
}

const Button = (props: any) => {
  return (
    <button className={"text-lg p-2 text-red-500 border-solid border-2"}>
      {props.title}
    </button>
  );
};

export default Button;
