import React from 'react';
import { Carousel } from 'react-responsive-carousel';

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
          <img loading='lazy' src='https://links.papareact.com/gi1' />
        </div>
        <div>
          <img loading='lazy' src='https://links.papareact.com/gi1' />
        </div>
        <div>
          <img loading='lazy' src='https://links.papareact.com/gi1' />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
