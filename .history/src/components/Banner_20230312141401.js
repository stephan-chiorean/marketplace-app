import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Banner1 from "public/images/banner1.png";
import Banner2 from "public/images/banner2.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className='relative'>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading='lazy' src={Banner1.src} />
        </div>
        <div>
          <img loading='lazy' src={Banner2.src} />
        </div>
        <div>
          <img loading='lazy' src='https://links.papareact.com/7ma' />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;