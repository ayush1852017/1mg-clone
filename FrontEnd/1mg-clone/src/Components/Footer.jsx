import React from "react";
import style from "./Footer.module.css";
import {
  Box,
  Center,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Flex,
  Button,
  FormControl,
  Input,
  Heading,
  Image,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  AccordionItem,
} from "@chakra-ui/react";
import { useState } from "react";

import { CheckIcon } from "@chakra-ui/icons";
import { FaMedium, FaTwitterSquare, FaYoutubeSquare } from "react-icons/fa";
import { GrFacebook, GrLinkedin } from "react-icons/gr";
import ReactStoreBadges from "react-store-badges";
const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

// const SocialButton = ({ children, label, href }) => {
//   return (
//     <chakra.button
//       bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
//       rounded={"full"}
//       w={8}
//       h={8}
//       cursor={"pointer"}
//       as={"a"}
//       href={href}
//       display={"inline-flex"}
//       alignItems={"center"}
//       justifyContent={"center"}
//       transition={"background 0.3s ease"}
//       _hover={{
//         bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
//       }}
//     >
//       <VisuallyHidden>{label}</VisuallyHidden>
//       {children}
//     </chakra.button>
//   );
// };

export const Footer = () => {
  return (
    <Box>
      <Stack>
        <Flex flexDirection={"column"} className={style.footerStack}>
          <Center>
            <Text as="h6" fontSize="1.5rem" fontFamily="monospace">
              INDIA’S LARGEST HEALTHCARE PLATFORM
            </Text>
          </Center>

          <Flex justifyContent={"space-around"} textAlign="center" p={"2rem 0"}>
            <Text fontWeight="bold" fontSize="1.7rem">
              160m+
              <br />
              <Text fontWeight="400" fontSize="1.2rem">
                Visitors
              </Text>
            </Text>
            <Text fontWeight="bold" fontSize="1.7rem">
              27m+
              <br />
              <Text fontWeight="400" fontSize="1.2rem">
                Orders Delivered
              </Text>
            </Text>
            <Text fontWeight="bold" fontSize="1.7rem">
              1800+
              <br />
              <Text fontWeight="400" fontSize="1.2rem">
                Cities
              </Text>
            </Text>
          </Flex>
        </Flex>
      </Stack>
      <Box className={style.footerLine}></Box>
      <Center>
        <Box fontSize={"1.3rem"}>Get the link to download App</Box>
        <Box>
          <SendLink />
        </Box>
      </Center>
      <Box
        bg={useColorModeValue("gray.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <Container as={Stack} maxW={"10xl"} pl={"6rem"} py={10}>
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 5 }}
            textAlign="left"
            spacing={15}
          >
            <Stack align={"flex-start"}>
              <ListHeader>Known Us</ListHeader>
              <Link lineHeight="1.81" fontSize="12px" color="#666" href={"#"}>
                About Us
              </Link>
              <Link lineHeight="1.81" fontSize="12px" color="#666" href={"#"}>
                Blog
              </Link>
              <Link lineHeight="1.81" fontSize="12px" color="#666" href={"#"}>
                Careers
              </Link>
              <Link lineHeight="1.81" fontSize="12px" color="#666" href={"#"}>
                Contact Us
              </Link>
            </Stack>

            <Stack align={"flex-start"}>
              <ListHeader>Our Policies</ListHeader>
              <Link lineHeight="1.81" fontSize="12px" color="#666" href={"#"}>
                Privacy Policy
              </Link>
              <Link lineHeight="1.81" fontSize="12px" color="#666" href={"#"}>
                Terms and Conditions
              </Link>
              <Link lineHeight="1.81" fontSize="12px" color="#666" href={"#"}>
                Editorial Policy
              </Link>
              <Link lineHeight="1.81" fontSize="12px" color="#666" href={"#"}>
                Return Policy
              </Link>
              <Link lineHeight="1.81" fontSize="12px" color="#666" href={"#"}>
                IP Policy
              </Link>
              <Link lineHeight="1.81" fontSize="12px" color="#666" href={"#"}>
                Grievance Redressal Policy
              </Link>
            </Stack>

            <Stack align={"flex-start"}>
              <ListHeader>Our Services</ListHeader>
              <Link lineHeight="1.81" fontSize="12px" color="#666" href={"#"}>
                Order Medicines
              </Link>
              <Link lineHeight="1.81" fontSize="12px" color="#666" href={"#"}>
                Book Lab Tests
              </Link>
              <Link lineHeight="1.81" fontSize="12px" color="#666" href={"#"}>
                Consult a Doctor
              </Link>
              <Link lineHeight="1.81" fontSize="12px" color="#666" href={"#"}>
                Ayurveda Articles
              </Link>
              <Link lineHeight="1.81" fontSize="12px" color="#666" href={"#"}>
                Hindi Articles
              </Link>
              <Link lineHeight="1.81" fontSize="12px" color="#666" href={"#"}>
                Care Plan
              </Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Connect</ListHeader>
              <Link href={"#"}>Social Links</Link>
              <Stack direction={"row"} spacing={6}>
                <GrFacebook fontSize="1.5rem" borderradius={"5px"} />

                <FaTwitterSquare fontSize="1.6rem" borderradius={"5px"} s />

                <FaYoutubeSquare fontSize="1.7rem" borderradius={"5px"} />

                <GrLinkedin fontSize="1.5rem" borderradius={"5px"} />

                <FaMedium fontSize="1.6rem" borderradius={"5px"} />
              </Stack>
              <Text>Want daily dose of health?</Text>
              <Button bg={"#ff6f61"} color={"#fff"}>
                Sign Up
              </Button>
            </Stack>

            <Stack align={"flex-start"}>
              <ListHeader>Download App</ListHeader>
              <ReactStoreBadges platform={"ios"} url={"#"} locale={"en-us"} />
              <ReactStoreBadges
                platform={"android"}
                url={"#"}
                locale={"en-us"}
              />
            </Stack>
          </SimpleGrid>
        </Container>
        <Container as={Stack} maxW={"8xl"} pl={"6rem"} py={10}>
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 3 }}
            textAlign="left"
            spacing={85}
            className={style.footerStampWrapper}
          >
            <Box className={style.footerStamp}>
              <Image src="https://res.cloudinary.com/du8msdgbj/image/upload/v1571132631/secure-rebrand_x6f8yq.svg" />

              <Box>
                <Text fontSize={"26px"} fontWeight="bold">
                  Reliable
                </Text>
                <Text lineHeight="1.81" fontSize="12px" color="#666">
                  All products displayed on Tata 1mg are procured from verified
                  and licensed pharmacies. All labs listed on the platform are
                  accredited
                </Text>
              </Box>
            </Box>
            <Box className={style.footerStamp}>
              <Image src="	https://res.cloudinary.com/du8msdgbj/image/upload/v1571132500/reliable-rebrand_rcpof3.svg" />

              <Box>
                <Text fontSize={"26px"} fontWeight="bold">
                  Secure
                </Text>
                <Text lineHeight="1.81" fontSize="12px" color="#666">
                  All products displayed on Tata 1mg are procured from verified
                  and licensed pharmacies. All labs listed on the platform are
                  accredited
                </Text>
              </Box>
            </Box>
            <Box className={style.footerStamp}>
              <Image src="https://res.cloudinary.com/du8msdgbj/image/upload/v1571131870/affordable-rebrand_ivgidq.svg" />

              <Box>
                <Text fontSize={"26px"} fontWeight="bold">
                  Affordable
                </Text>
                <Text lineHeight="1.81" fontSize="12px" color="#666">
                  All products displayed on Tata 1mg are procured from verified
                  and licensed pharmacies. All labs listed on the platform are
                  accredited
                </Text>
              </Box>
            </Box>
          </SimpleGrid>
        </Container>
        <Stack align={"center"}>
          <Center flexDirection={"column"} gap={5}>
            <Image src="	https://res.cloudinary.com/du8msdgbj/image/upload/v1580717209/URS_ebgmxc.png" />
            <Text>
              India's only LegitScript and ISO/ IEC 27001 certified online
              healthcare platform
            </Text>
          </Center>
        </Stack>
        <Flex>
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton justifyContent={"space-between"}>
                  <Box flex="1" textAlign="left">
                    Section 1 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Flex>
        <Box
          borderTopWidth={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
        >
          <Container
            as={Stack}
            maxW={"6xl"}
            py={4}
            direction={{ base: "column", md: "row" }}
            spacing={4}
            justify={{ md: "space-between" }}
            align={{ md: "center" }}
          >
            <Text>© 2022 Chakra Templates. All rights reserved</Text>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export function SendLink() {
  const [number, setNumber] = useState("");
  const [state, setState] = useState("");

  return (
    <Flex align={"center"} justify={"center"}>
      <Container
        maxW={"lg"}
        // boxShadow={"xl"}
        rounded={"lg"}
        p={6}
        direction={"column"}
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          as={"form"}
          spacing={"12px"}
          onSubmit={(e) => {
            e.preventDefault();
            setError(false);
            setState("submitting");

            // remove this code and implement your submit logic right here
            setTimeout(() => {
              if (number === "0000000000") {
                setState("initial");
                return;
              }

              setState("success");
            }, 1000);
          }}
        >
          <FormControl>
            <Input
              variant={"solid"}
              borderWidth={1}
              color={"gray.800"}
              _placeholder={{
                color: "gray.400",
              }}
              borderColor={useColorModeValue("gray.300", "gray.700")}
              id={"phone"}
              type={"phone"}
              required
              placeholder={"Enter your Phone Number"}
              aria-label={"Your Phone Number"}
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </FormControl>
          <FormControl w={{ base: "100%", md: "40%" }}>
            <Button
              color={"#fff"}
              bg="#ff6f61"
              fontSize={".9rem"}
              colorScheme={state === "success" ? "green" : ""}
              isLoading={state === "submitting"}
              w="100%"
              type={state === "success" ? "button" : "Send Link"}
            >
              {state === "success" ? <CheckIcon /> : "Send Link"}
            </Button>
          </FormControl>
        </Stack>
      </Container>
    </Flex>
  );
}
