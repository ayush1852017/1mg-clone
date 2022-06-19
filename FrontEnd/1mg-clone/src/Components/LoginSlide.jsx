import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";

import "./LoginSlide.css";

// import required modules
import { Autoplay, Pagination } from "swiper";
import {
  Box,
  Center,
  Image,
  List,
  ListItem,
  MenuList,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

export const LoginSlide = () => {
  const imgArr = [
    {
      image:
        "https://www.1mg.com/images/login-signup/Home-Delivery-of-Medicines.png",
      title: "Make Healthcare Simpler",
      descr:
        "Get medicine information, order medicines, book lab tests and consult doctors online from the comfort of your home.",
    },
    {
      image: "https://www.1mg.com/images/login-signup/Lab-Tests-at-Home.png",
      title: "Know Your Medicines",
      descr:
        "View medicine information like usage, side effects and cheaper substitutes before you take them.",
    },
    {
      image:
        "https://www.1mg.com/images/login-signup/Health-Related-Queries.png",
      title: "Medicines, Home Delivered",
      descr:
        "Order any medicine or health product and we’ll deliver it for free. Enjoy discounts on everything.",
    },

    {
      image:
        "	https://www.1mg.com/images/login-signup/Home-Delivery-of-Medicines.png",
      title: "Medicines, Home Delivered",
      descr:
        "Order any medicine or health product and we’ll deliver it for free. Enjoy discounts on everything.",
    },
  ];
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
        // navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {imgArr.map((d, i) => {
          return (
            <SwiperSlide key={i}>
              <Box>
                <UnorderedList
                  p={"1rem 0 0 0"}
                  maxW={"340px"}
                  textAlign={"left"}
                  maxH={"480px"}
                  listStyleType={"none"}
                  className="slideUl"
                >
                  <Image
                    objectFit={"scale-down"}
                    src={d.image}
                    className="slideImage"
                  />

                  <ListItem className="slideListText" fontWeight={"bold"} p={4}>
                    {d.title}
                  </ListItem>

                  <ListItem className="slideListText" fontSize={"small"} px={4}>
                    {d.descr}
                  </ListItem>
                </UnorderedList>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
