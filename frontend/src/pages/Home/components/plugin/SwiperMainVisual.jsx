import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style/main_visual.scss';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { SmaillRoundBox } from '../../../../styles/box';
import { mainVisualData } from '../../../../dummy_data/slider_db';

const MainVisual = () => {

  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {mainVisualData.map((data,i)=>
        
        <SwiperSlide
        key={i}
          className="innerSwiper"
          style={{
            backgroundImage: `url(${data.background})`,
          }}
        >
          <div className="content-wrap">
            <SmaillRoundBox className="topic-box">{data.topic}</SmaillRoundBox>
            <div className="title-wrap">
                {data.title.split("^").map((title)=>
                <span>{title}</span>
                )}
            </div>
          </div>
        </SwiperSlide>
        )}
      </Swiper>
    </>
  );
};

export default MainVisual;
