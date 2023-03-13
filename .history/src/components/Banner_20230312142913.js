import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Banner1 from "public/images/banner1.png";
import Banner2 from "public/images/banner2.png";
import Banner3 from "public/images/banner3.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className='relative'>
        <div className="absolute w-full h-32 bg-grad-to-t from-gray-100 to-transparent bottom-0 z-20"/>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={10000}
      >
        <div>
          <img loading='lazy' src={Banner1.src} />
        </div>
        <div>
          <img loading='lazy' src={Banner2.src} />
        </div>
        <div>
          <img loading='lazy' src={Banner3.src} />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
