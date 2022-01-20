import Image from "next/image";
import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import React, { useEffect, useState } from "react";
import ManoPoints from "../public/Img/ManoPoints.png";
import ManoSoldes from "../public/Img/ManoSoldes.jpg";

const Slider = () => {
  const baseUrl = "./public/Img/";
  return (
    <div>
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
        dynamicHeight={true}
      >
        <Link href="/rewardProgram" passHref>
          <a>
            {" "}
            <Image
              src={ManoPoints}
              alt="ManoPoints program"
              width={440}
              height={286}
            />
          </a>
        </Link>

        <Image src={ManoSoldes} alt="Soldes" width={440} height={286} />
      </Carousel>
    </div>
  );
};

export default Slider;
