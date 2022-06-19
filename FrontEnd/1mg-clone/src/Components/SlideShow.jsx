import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./slideshow.css";

import { Navigation } from "swiper";
import { Box, Heading, Text, Image, Stack } from "@chakra-ui/react";

export const SlideShow = ({ items }) => {
  // console.log(items);
  return (
    <>
      <Swiper
        slidesPerView={6}
        spaceBetween={10}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: false,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {items?.map((d, i) => {
          {
            if (d.title) {
              return (
                <SwiperSlide key={i} className="swiperProducts">
                  <Box
                    rounded={"lg"}
                    p={"1rem"}
                    pos={"relative"}
                    height={"130px"}
                  >
                    <Image
                      rounded={"lg"}
                      height={110}
                      width={212}
                      objectFit={"cover"}
                      src={d.image}
                    />
                  </Box>
                  <Stack align={"center"} pb={4}>
                    <Heading
                      fontSize={"1rem"}
                      fontFamily={"body"}
                      fontWeight={500}
                    >
                      {d.title}
                    </Heading>
                  </Stack>
                </SwiperSlide>
              );
            } else {
              return (
                <SwiperSlide key={i} className="swiperProducts">
                  <Box
                    rounded={"lg"}
                    p={"1rem"}
                    pos={"relative"}
                    height={"130px"}
                  >
                    <Image
                      rounded={"lg"}
                      height={110}
                      width={212}
                      objectFit={"cover"}
                      src={d.image}
                    />
                  </Box>
                  <Stack align={"center"} pb={4}>
                    <Heading
                      fontSize={"1rem"}
                      fontFamily={"body"}
                      fontWeight={500}
                    >
                      {d.description}
                    </Heading>
                  </Stack>
                </SwiperSlide>
              );
            }
          }
        })}
      </Swiper>
    </>
  );
};
