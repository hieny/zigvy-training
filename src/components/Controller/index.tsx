import React from "react";

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
    <>
      <label>{label}</label>
      {children}
     <p style={{color: "red", margin: "0"}}>{error && error}</p>
    </>
  );
}
