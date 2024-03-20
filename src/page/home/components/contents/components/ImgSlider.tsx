import { useState } from "react";

type ImgSliderType = {
  imgs: string[];
};
export default function ImgSlider({ imgs }: ImgSliderType) {
  const [imgSrcIndex, setImgSrcIndex] = useState<number>(0);

  const handleNextImg = () => {
    if (imgSrcIndex < imgs.length - 1) {
      setImgSrcIndex((prev) => (prev += 1));
    }
  };
  const handleBackImg = () => {
    if (imgSrcIndex >= 0) {
      setImgSrcIndex((prev) => (prev -= 1));
    }
  };
  return (
    <div className="imgContent">
      <img src={imgs[imgSrcIndex]} alt={imgs[imgSrcIndex]} loading="lazy" decoding="async" />
      {imgSrcIndex > 0 && (
        <button className="prev_img " onClick={handleBackImg}>
          ❮
        </button>
      )}
      {imgSrcIndex < imgs.length -1 && (
        <button className="next_img " onClick={handleNextImg}>
          ❯
        </button>
      )}
    </div>
  );
}
