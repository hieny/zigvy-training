import React from "react";
import "./index.scss"
type FormLayoutControlerProps = {
  label?: string;
  children: React.ReactNode;
  error: string | undefined;
};

export default function FormLayoutControler({
  label,
  children,
  error
}: FormLayoutControlerProps) {
  return (
    <div className="controller_input">
      <label>{label}</label>
      {children}
     <p style={{color: "red", margin: "0"}}>{error && error}</p>
    </div>
  );
}
