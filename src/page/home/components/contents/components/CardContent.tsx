import { PlaceType } from "@/services/queries/home/home.type";
// import { ContentDataType } from "../data";
import FavoriteContent from "./FavoriteContent";
import ImgSlider from "./ImgSlider";
import "./index.scss";
import React from "react";

type CardContentType = {
  item: PlaceType;
};

const CardContent: React.FC<CardContentType> = React.memo(({ item }) => {
  console.log("item: " + item)
  return (
    <div className="cardContent">
      <ImgSlider imgs={item.imgArrUrl} />
      <div className="cardContent_info">
        <div className="cardContent_info_left">
          <p>{item.name}</p>
          <p className="distance">{item.distance}</p>
          <p className="time">{item.bookingDate}</p>
          <p>
            <span style={{ fontWeight: "bold" }}>${item.price}</span> night
          </p>
        </div>
        <div className="cardContent_info_right">★{item.rate}</div>
      </div>
      {item.isMoreUsersFavorite && (
        <div className="guest_favorite">
          <span>Guest favorite</span>
        </div>
      )}
      <FavoriteContent />
    </div>
  );
});

export default CardContent;
