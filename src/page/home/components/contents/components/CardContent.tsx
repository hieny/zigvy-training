import { ContentDataType } from "../data";
import FavoriteContent from "./FavoriteContent";
import ImgSlider from "./ImgSlider";
import "./index.scss";

type CardContentType = {
  item: ContentDataType;
};
export default function CardContent({ item }: CardContentType) {
  return (
    <div className="cardContent">
      <ImgSlider imgs={item.imgs} />
      <div className="cardContent_info">
        <div className="cardContent_info_left">
          <p>{item.name}</p>
          <p className="distance">{item.distance}</p>
          <p className="time">{item.time}</p>
          <p>
            <span style={{ fontWeight: "bold" }}>${item.price}</span> night
          </p>
        </div>
        <div className="cardContent_info_right">★{item.vote}</div>
      </div>
      {item.isGuestFavorite && (
        <div className="guest_favorite">
          <span>Guest favorite</span>
        </div>
      )}
      <FavoriteContent/>
    </div>
  );
}
