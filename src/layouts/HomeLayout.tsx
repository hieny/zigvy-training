import React from "react";
import "./homeLayout.scss";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
type MainLayoutType = {
  children: React.ReactNode;
};
export default function HomeLayout({ children }: MainLayoutType) {
  return (
    <div>
      <Header />
      <div className="home_content">{children}</div>
      <Footer />
    </div>
  );
}
