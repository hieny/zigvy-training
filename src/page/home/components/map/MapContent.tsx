import { useEffect, useState } from "react";
import { MapIcon } from "../../../../assets/MapSVG";
import "./index.scss";

export default function MapContent() {
  const [isHidden, setIsHidden] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      if (position > 500) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`sticky_map ${isHidden ? "hidden" : "show"}`}>
      <div className="sticky_map_info">
        <p>Show map</p>
        <MapIcon />
      </div>
    </div>
  );
}
