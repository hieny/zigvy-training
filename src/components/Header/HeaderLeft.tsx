import { useState } from "react";
import AlignSVG from "../../assets/AlignSVG";
import UserSVG from "../../assets/UserSVG";
import ToggleModal from "./ToggleModal";

export default function HeaderLeft() {
  const [isOpenToggle, setIsOpenToggle] = useState<boolean>(false);
  return (
    <div className="header_left">
      <div className="header_left_content">
        <p>Airbnb your home</p>
      </div>
      <div className="header_left_content">
        <img src="/assets/global.png" alt="global" />
      </div>
      <div
        className="header_left_info"
        onClick={() => {
          setIsOpenToggle(!isOpenToggle);
        }}
      >
        <AlignSVG />
        <UserSVG />
      </div>
        <ToggleModal isOpenToggle={isOpenToggle}/>
    </div>
  );
}
