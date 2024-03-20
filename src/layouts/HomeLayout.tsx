import React from "react";
import Header from "../components/Header";
import "./homeLayout.scss"
type MainLayoutType = {
  children: React.ReactNode;
};
export default function HomeLayout({ children }: MainLayoutType) {
  return (
    <div>
      <Header />
      <div className="home_content">{children}</div>
    </div>
  );
}
