import React from "react";
import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  Stack,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

import { BsCart } from "react-icons/bs";
import { SiGooglemaps } from "react-icons/si";
import { FiSearch } from "react-icons/fi";
import style from "./Navbar.module.css";
import { LoginModal } from "./LoginModal";
import { SignupModalOne } from "./SignupModalOne";
export const Navbar = () => {
  const listArr1 = [
    "All Diseases",
    "All Medicines",
    "Medicines by Theropist Class",
  ];
  const listArr2 = [
    "Covid-19 Self test kits",
    "Oxygen Cans & Concentrators",
    "Masks",
    "Sanitizers & Handwash Products",
    "Support Your Immunity",
    "Thermometer",
    "Chyawanprash",
  ];
  const listArr3 = [
    "Tata 1mg Health Products",
    "Summer Essentials",
    "Trending now",
    "New Arrivals on Tata 1MG",
    "Buy More, Save More",
    "Minimum 33% Off",
    "Popular Combo Deals",
  ];
  const listArr4 = [
    {
      "Vitamins & Supplements": [
        "Multivitamins",
        "Vitamins A-Z",
        "Mineral Supplements",
        "Vitamin B12 & B Complex",
      ],
    },
    {
      "Nutritional Drinks": [
        "Adult Daily Nutrition",
        "Kids Nutrition (2-15 Yrs)",
        "For Women",
      ],
    },
    {
      "Health Food & Drinks": [
        "Green Tea & Herbal Tea",
        "Apple Cider Vinegar",
        "Healthy Snacks",
      ],
    },
  ];
  return (
    <Box borderBottom="1px solid rgb(238, 235, 235)">
      <Stack
        d={"flex"}
        p={"0 1rem .5rem 2rem"}
        flexDirection="row"
        justifyContent={"space-between"}
        borderBottom="1px solid rgb(238, 235, 235)"
      >
        <Flex gap={"4rem"} alignItems={"center"}>
          <Box>
            <img
              src="https://www.1mg.com/images/tata_1mg_logo.svg"
              alt="logo"
            />
          </Box>
          <Flex className={style.mid} gap={"2rem"}>
            <Text className={style.redText}>MEDICINES</Text>
            <Flex>
              <Box>LAB TESTS</Box>

              <Box className={style.labTest}>
                <Text className={style.red_btn}>SAFE</Text>
              </Box>
            </Flex>
            <Text>ASK DOCTOR </Text>
            <Text>COVID-19</Text>
            <Text>AYURVEDA</Text>

            <Flex>
              <Box> CARE PLAN</Box>

              <Box className={style.carePlan}>
                <Text className={style.red_btn}>SAVE MORE</Text>
              </Box>
            </Flex>
          </Flex>
        </Flex>
        <Stack
          className={style.rightNav}
          d={"flex"}
          flexDirection={"row"}
          alignItems="center"
          justifyContent="center"
          gap={"2rem"}
        >
          <Flex className="login">
            <Box p={"0 0.5rem"}>
              <LoginModal title={"Login"} />
            </Box>
            <Box
              style={{
                borderLeft: "1px solid black",
                paddingLeft: ".5rem",
                cursor: "pointer",
              }}
            >
              <SignupModalOne title={"Signup"} />
            </Box>
          </Flex>
          <Flex className="offer">
            <Box p={"0 1rem"}>Offers</Box>
            <BsCart size={"1.5rem"} />
            <Box p={"0 1rem"}>Need Help?</Box>
          </Flex>
        </Stack>
      </Stack>
      <Stack
        d={"flex"}
        flexDirection="row"
        justifyContent="space-between"
        borderBottom="1px solid rgb(238, 235, 235)"
        p={".5rem 1rem 0 2rem"}
      >
        <Flex className={style.bottomLeftNav} gap={2} flex={6}>
          <InputGroup w={"70%"} flex={2}>
            <InputLeftElement
              pointerEvents="none"
              children={<SiGooglemaps color="gray.800" />}
            />
            <Input type="text" bg={"#f1f3f9"} placeholder="Enter Your City" />
          </InputGroup>
          <InputGroup flex={5}>
            <Input
              type="text"
              bg={"#f1f3f9"}
              placeholder="Search for Medicines and Health Products"
            />
            <InputRightElement
              pointerEvents="none"
              children={<FiSearch color="gray.800" />}
            />
          </InputGroup>
        </Flex>
        <Box flex={3} gap={2} className={style.bottomRightNav}>
          <Box>
            <Text>QUICK BUY! Flat 25% off on medicines*</Text>
          </Box>
          <Box>
            <Button
              bg={"#ff6f61"}
              color={"#fff"}
              pos={"relative"}
              top={-2}
              className={style.orderBtn}
            >
              Quick Order
            </Button>
          </Box>
        </Box>
      </Stack>
      <Box p={"0 1rem .5rem 2rem"}>
        <DropDown title={"Health Resource Center"} list={listArr1} />
        <DropDown title={"Covid Essentials"} list={listArr2} />
        <DropDown title={"Featured"} list={listArr3} />
        <DropDown title={"Vitamins & Nutrition"} list={listArr3} />
        <DropDown title={"Diabetes"} list={listArr3} />
        <DropDown title={"Healthcare Devices"} list={listArr3} />
        <DropDown title={"Personal Care"} list={listArr3} />
        <DropDown title={"Health Conditions"} list={listArr3} />
        <DropDown title={"Ayurveda Products"} list={listArr3} />
        <DropDown title={"Homeopathy"} list={listArr3} />
      </Box>
    </Box>
  );
};

export const DropDown = ({ title, list }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Menu isOpen={isOpen}>
      <MenuButton
        variant="ghost"
        mx={1}
        py={[1, 2, 2]}
        px={4}
        borderRadius={5}
        _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
        aria-label="Courses"
        fontWeight="normal"
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
      >
        {title} {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </MenuButton>
      <MenuList zIndex={"10"} onMouseEnter={onOpen} onMouseLeave={onClose}>
        {list.map((dd, i) => {
          return <MenuItem key={i}>{dd}</MenuItem>;
        })}
      </MenuList>
    </Menu>
  );
};
