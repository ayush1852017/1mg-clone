import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  List,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  Flex,
  Circle,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductsData } from "../Redux/products/action";

const data = {
  isNew: true,
  imageURL:
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
  name: "Wayfarer Classic",
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};

function Rating({ rating, numReviews }) {
  return (
    <Box display="flex" flexDirection={"row"} alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && "s"}
      </Box>
    </Box>
  );
}

export const Products = () => {
  const [page, setPage] = useState(1);
  const products = useSelector((state) => state.productStore.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsData(dispatch));
  }, [page]);
  console.log(products);
  return (
    <Box>
      <Box m={"4rem 20rem"}>
        <SimpleGrid
          h="100%"
          templateRows="repeat(10, 300px)"
          templateColumns="repeat(5, 1fr)"
          gap={4}
        >
          <GridItem rowSpan={10} colSpan={1} border={"1px solid black"} />
          {products?.map((d) => {
            return (
              <GridItem
                key={d._id}
                colSpan={1}
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                p={5}
              >
                <Box
                  rounded={"lg"}
                  p={"1rem"}
                  pos={"relative"}
                  height={"130px"}
                >
                  <Image
                    rounded={"lg"}
                    height={"70%"}
                    width={"70%"}
                    objectFit={"contain"}
                    src={d.image}
                  />
                </Box>
                <Stack role={"group"}>
                  <Text
                    textAlign="left"
                    fontSize={"1rem"}
                    className="slideProductBigTitle"
                  >
                    {d.title}
                  </Text>
                  <List fontSize={"xs"} textAlign="left">
                    <ListItem>List of 1 unit</ListItem>
                    <ListItem display={"flex"} gap={2} mt={2}>
                      <Flex
                        w={10}
                        h={5}
                        bg={"#1AAB2A"}
                        alignItems="center"
                        justifyContent={"center"}
                        rounded={2}
                      >
                        <span style={{ color: "#fff" }}>4.2</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="15"
                          viewBox="0 0 51 48"
                        >
                          <path
                            fill="#ffffff"
                            stroke="none"
                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                          ></path>
                        </svg>
                      </Flex>
                      <Box>{d.rating}</Box>
                    </ListItem>

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
                          color: "#1AAB2A",
                        }}
                      >
                        {d.offer}
                      </span>
                    </ListItem>
                    <ListItem display={"flex"} justifyContent="space-between">
                      <Box>{d.price}</Box>
                      <Box color={"#ff6f61"} fontWeight="bold">
                        ADD
                      </Box>
                    </ListItem>
                  </List>
                </Stack>
              </GridItem>
            );
          })}
        </SimpleGrid>
      </Box>
      <Button
        title="PREV"
        id="PREV"
        disabled={page === 1}
        onClick={() => setPage((prev) => prev - 1)}
      />
      <Button
        id="NEXT"
        title="NEXT"
        onClick={() => setPage((prev) => prev + 1)}
      />
    </Box>
  );
};
