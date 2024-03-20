import { useEffect, useState } from "react";
import HeaderLeft from "./HeaderLeft";
import HeaderMiddle from "./HeaderMiddle";
import SubHeaderMiddle from "./SubHeaderMiddle";
import "./header.scss";
import MiniHeaderMiddle from "./MiniHeaderMiddle";

export default function Header() {
  const [isSticky, setIsSticky] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const isSticky = offset >= 50;
      setIsSticky(isSticky);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(isSticky);

  return (
    <div className={`header_container ${isSticky ? "sticky" : ""}`}>
      <div className="header">
        <img src="/assets/ABNB_BIG.png" className="header_logo" alt="airbnb" />
        <div>
          <div className={`mini1 ${isSticky ? "sticky" : ""}`}>
            <MiniHeaderMiddle />
          </div>
          <div className={`mini2 ${isSticky ? "sticky" : ""}`}>
            <HeaderMiddle />
          </div>
        </div>
        <HeaderLeft />
      </div>
      <div className={`sub_header_middle ${isSticky ? "sticky" : ""}`}>
        <SubHeaderMiddle />
      </div>
    </div>
  );
}
