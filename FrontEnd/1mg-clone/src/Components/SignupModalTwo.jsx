import {
  Button,
  Center,
  Checkbox,
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
export const SignupModalTwo = ({ email, title }) => {
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
            <LoginForm email={email} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "../Redux/auth/action";
import { Navigate, useNavigate } from "react-router-dom";
export function LoginForm({ email }) {
  const auth = useSelector((state) => state.authStore);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  // const [auth, setAuth] = useState(false);
  const navigate = useNavigate();
  function handleChange(e) {
    setValue(e.target.value);
  }
  const handleSubmitPassword = (e) => {
    e.preventDefault();
    dispatch(registerUser({ email: email, password: value }));
    console.log(auth);
    navigate("/", { replace: true });
  };
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
          SignUp
        </Heading>
        <Text fontSize={{ base: "xs", sm: "xs" }} color="#616161">
          Please enter your Mobile number to receive One Time Password (OTP)
        </Text>
        <form onSubmit={handleSubmitPassword}>
          {/* <TextInput label="" /> */}
          <div className="input-container">
            <input type="password" value={value} onChange={handleChange} />
            <label className={value && "filled"} htmlFor={name}>
              Enter Your Password
            </label>
          </div>
          <Checkbox>
            <Text fontSize={".7rem"} color={"#616161"}>
              Are you a healthcare professional?
            </Text>
          </Checkbox>
          <Stack spacing={6}>
            {/* <RouteLink to="/"> */}
            <Button
              bg={"#ff6f61"}
              color={"white"}
              h={"45px"}
              textTransform="uppercase"
              _hover={{
                bg: "#ff6f61",
              }}
              type="submit"
            >
              {auth.auth
                ? setTimeout(() => {
                    return "Success";
                  }, 2000)
                : "Create Account"}
            </Button>
            {/* </RouteLink> */}
          </Stack>
        </form>
        <Center flexDirection={"column"}>
          <Text color={"#616161"}>
            Have an account?
            <span style={{ fontSize: "1rem", color: "#ff6f61" }}>Login</span>
          </Text>
          <Text pb={4} color={"#616161"} fontSize="16px">
            For corporate Sign up,
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

// function TextInput({ type = "text", label }) {

//   return <></>;
// }
