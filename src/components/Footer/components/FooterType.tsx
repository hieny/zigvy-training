import { useState } from "react";
import { InspirationFooterType, inspiration } from "../data";

export default function FooterType() {
  const typeContent = Object.keys(inspiration);
  const [isActive, setIsActive] =
    useState<keyof InspirationFooterType>("Popular");
  return (
    <div className="footer">
      <p className="footer_title">Inspiration for future getaways</p>
      <div className="footer_type">
        {typeContent.map((item, index) => {
          return (
            <div
              className={`${isActive === item ? "active" : ""}`}
              onClick={() => {
                setIsActive(item as keyof InspirationFooterType);
              }}
              key={index}
            >
              {item}
            </div>
          );
        })}
      </div>
      <div className="footer_type_content">
        {inspiration[isActive].map((item, index) => {
          return (
            <div className="footer_type_content_item" key={index}>
              <p className="footer_type_content_item_title">
                {item.name + " " + isActive}
              </p>
              <p className="footer_type_content_item_detail">{item.detail}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
