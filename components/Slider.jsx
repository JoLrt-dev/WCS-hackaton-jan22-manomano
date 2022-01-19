import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import React, { useEffect, useState } from "react";
import ManoPoints from "../public/Img/ManoPoints.png";
import ManoSoldes from "../public/Img/ManoSoldes.jpg";

const Slider = () => {
  const baseUrl = "./public/Img/";
  return (
    <Carousel
      infiniteLoop
      autoPlay
      swipeable
      interval={5000}
      transitionTime={700}
      thumbWidth={90}
      showThumbs={false}
      showStatus={false}
      showArrows={false}
    >
      <Image
        src={ManoPoints}
        alt="ManoPoints program"
        width={360}
        height={206}
      />
      <Image src={ManoSoldes} alt="Soldes" width={360} height={206} />
    </Carousel>
  );
};

export default Slider;
