import React, { useState } from "react";
import styles from "@/styles/Slider.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? 2 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className={styles.slider}>
      <div
        className={styles.container}
        style={{
          transform: `translateX(-${currentIndex * 100}vw)`,
          transition: "ease-in-out 0.7s",
        }}
      >
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className={styles.iconPrev} onClick={prevSlide}>
        <ArrowBackIosIcon fontSize="large" />
      </div>
      <div className={styles.iconNext} onClick={nextSlide}>
        <ArrowForwardIosIcon fontSize="large" />
      </div>
    </div>
  );
}

export default Slider;
