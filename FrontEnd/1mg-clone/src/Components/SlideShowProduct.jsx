import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./slideshowProduct.css";

import { Navigation } from "swiper";
import {
  Box,
  Heading,
  Text,
  Image,
  Stack,
  ListItem,
  List,
} from "@chakra-ui/react";

export const SlideShowProduct = ({ items }) => {
  // console.log(items);
  return (
    <>
      <Swiper
        slidesPerView={6}
        spaceBetween={20}
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
          return (
            <SwiperSlide key={i} className="swiperProductsWithDetails">
              <Box rounded={"lg"} p={"1rem"} pos={"relative"} height={"130px"}>
                <Image
                  rounded={"lg"}
                  height={90}
                  width={192}
                  objectFit={"cover"}
                  src={d.image}
                />
              </Box>
              <Stack align={"center"} role={"group"}>
                <Text
                  textAlign="left"
                  fontSize={"1rem"}
                  className="slideProductBigTitle"
                >
                  {d.title}
                </Text>
                <List fontSize={"xs"} textAlign="left">
                  <ListItem>List of 1 unit</ListItem>
                  <ListItem>
                    <span style={{}}>MRP</span>
                    <span
                      style={{
                        marginRight: "5px",
                        display: "inline-block",
                        fontSize: "12px",
                        color: "#757575",
                        textDecoration: "line-through",
                      }}
                    >
                      {d.strike}
                    </span>
                    <span
                      style={{
                        marginRight: "5px",
                        display: "inline-block",
                        fontSize: "12px",
                        color: "#757575",
                      }}
                    >
                      {d.offer}
                    </span>
                  </ListItem>
                  <ListItem>{d.price}</ListItem>
                </List>
              </Stack>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
// if (d.price) {
//
//   );
// }
