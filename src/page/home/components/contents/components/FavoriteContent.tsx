import { useState } from "react";
import HeartSVG from "../../../../../assets/HeartSVG";

export default function FavoriteContent() {
  const [isFavorite, setFavorite] = useState<boolean>(false);

  const handleFavorite = () => {
    setFavorite(!isFavorite);
  };

  return (
    <div>
      {!isFavorite ? (
        <div className="un-favorite" onClick={() => handleFavorite()}>
          <span>
            <HeartSVG color="white" />
          </span>
        </div>
      ) : (
        <div className="favorite" onClick={() => handleFavorite()}>
          <span>
            <HeartSVG color="red" />
          </span>
        </div>
      )}
    </div>
  );
}
