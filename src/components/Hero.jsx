import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

const Hero = () => {
  return (
    <section className='mt-3 relative overflow-hidden textwhite'>
    <div className='container max-w-screen-xl mx-auto'>
    <Swiper className="mySwiper">
        <SwiperSlide>
            <img src = "/images/banner/banner.png" alt = ""/>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        
      </Swiper>

    </div>

    </section>
  )
}

export default Hero