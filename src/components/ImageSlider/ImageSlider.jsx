import React from "react";
import aloftImage from "../../assets/appImages/aloftImage.png";
import everlyImage from "../../assets/appImages/everlyHealthImage.png";
import bafImage from "../../assets/appImages/bafImage.png";
import adventHealthImage from "../../assets/appImages/adventHealthImage.png";
import { ImagesSlider as ImageSliderUI } from "../ui/images-slider";

const ImagesSlider = () => {
  const images = [everlyImage, aloftImage, bafImage, adventHealthImage];
  return (
    <ImageSliderUI
      className="h-[100%] w-[100%] rounded-lg drop-shadow-md"
      images={images}
      overlay={false}
    ></ImageSliderUI>
  );
};

export default ImagesSlider;
