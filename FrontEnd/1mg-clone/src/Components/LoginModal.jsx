import {
  Button,
  Center,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { LoginSlide } from "./LoginSlide";
import style from "./modal.module.css";
import "./loginForm.css";
export const LoginModal = ({ title }) => {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);

  return (
    <>
      <Text
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        {title}
      </Text>

      <Modal w={"1000px"} isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent maxW="1000px" maxH="500px">
          <ModalCloseButton />
          <ModalBody className={style.modalBody}>
            <LoginSlide />
            <LoginForm />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export function LoginForm() {
  return (
    <Flex>
      <Stack
        spacing={4}
        maxW={"md"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        // boxShadow={"lg"}
        p={6}
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
          LogIn
        </Heading>
        <Text fontSize={{ base: "xs", sm: "xs" }} color="#616161">
          Get access to your orders, lab tests & doctor consultations
        </Text>
        <form>
          <TextInput label="Enter Your Email ID OR Mobile Number" />
        </form>
        <Stack spacing={6}>
          <Button
            bg={"#ff6f61"}
            color={"white"}
            h={"45px"}
            textTransform="uppercase"
            _hover={{
              bg: "#ff6f61",
            }}
          >
            Login
          </Button>
        </Stack>
        <Center flexDirection={"column"}>
          <Text color={"#616161"}>
            New on 1mg?
            <span style={{ fontSize: "1rem", color: "#ff6f61" }}>Sign Up</span>
          </Text>
          <Text pb={4} color={"#616161"} fontSize="16px">
            Have a corporate account?
            <span style={{ fontSize: "1rem", color: "#ff6f61" }}>
              click Here
            </span>
          </Text>
          <Text fontSize={".7rem"} color={"#9e9e9e"}>
            By logging in, you agree to our
          </Text>
          <Text fontSize={".7rem"} color={"#9e9e9e"}>
            <span style={{ textDecoration: "underline" }}>
              Terms and Conditions
            </span>{" "}
            &{"  "}
            <span style={{ textDecoration: "underline" }}>Privacy Policy </span>
          </Text>
          <Text fontSize={".8rem"} fontWeight="bold" color={"#ff6f61"}>
            Need Help? Get In Touch
          </Text>
        </Center>
      </Stack>
    </Flex>
  );
}

function TextInput({ type = "text", label }) {
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className="input-container">
      <input type={type} value={value} onChange={handleChange} />
      <label className={value && "filled"} htmlFor={name}>
        {label}
      </label>
    </div>
  );
}
