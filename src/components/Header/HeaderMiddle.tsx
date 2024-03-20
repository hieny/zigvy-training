import { useState } from "react";

export default function HeaderMiddle() {
  const [active, setActive] = useState<string>("stays");
  return (
    <div className="header_middle">
      <div
        onClick={() => {
          setActive("stays");
        }}
      >
        <p
          className={`${active === "stays" ? "active" : ""}`}
        >
          Stays
        </p>
      </div>
      <div
        onClick={() => {
          setActive("Experiences");
        }}
      >
        <p className={`${active === "Experiences" ? "active" : ""}`}>
          Experiences
        </p>
      </div>
      <div
        onClick={() => {
          setActive("Onine Experiences");
        }}
      >
        <p className={`${active === "Onine Experiences" ? "active" : ""}`}>
          Onine Experiences
        </p>
      </div>
    </div>
  );
}
