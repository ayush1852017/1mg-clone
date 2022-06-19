import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
import "swiper/css/pagination";
import "./navslideshow.css";
import { Autoplay, Pagination } from "swiper";
const imgArr = [
  "https://onemg.gumlet.io/image/upload/w_1280,h_250,,a_ignore,q_auto,f_auto/v1655323350/vs12ffj0gvfbapiwl6bm.png",
  "https://onemg.gumlet.io/image/upload/w_1280,h_250,,a_ignore,q_auto,f_auto/v1651469437/zkm0v49j2nsuuo3vnlyw.png",
  "https://onemg.gumlet.io/image/upload/w_1280,h_250,,a_ignore,q_auto,f_auto/v1654452372/qmrhvosx0qqcd9wh5ojf.png",
  "https://onemg.gumlet.io/image/upload/w_1280,h_250,,a_ignore,q_auto,f_auto/v1651469437/zkm0v49j2nsuuo3vnlyw.png",
  "https://onemg.gumlet.io/image/upload/w_1280,h_250,,a_ignore,q_auto,f_auto/v1651561452/x7zr33pjnj4gcpqktn3q.png",
  "https://onemg.gumlet.io/image/upload/w_1280,h_250,,a_ignore,q_auto,f_auto/v1641283756/kcdcsb5yrkpxok5bpm8y.png",
];

export const NavSlideshow = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {imgArr.map((d, i) => {
          return (
            <SwiperSlide key={i}>
              <img src={d} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
