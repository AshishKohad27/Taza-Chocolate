import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useState, FormEvent, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./login.module.css";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";
import { CLEAR_MESSAGE } from "@/redux/auth/auth.types";
import { useRouter } from "next/router";
import { Dispatch } from "redux";
import { postLogin } from "@/redux/auth/auth.action";
import Navbar from "@/components/Navbar/Navbar";

type SignUpFormT = {
  email: string;
  password: string;
};

const initState = {
  email: "",
  password: "",
};
export default function Login() {
  const router = useRouter();
  const [form, setForm] = useState<SignUpFormT>(initState);
  const dispatch: Dispatch<any> = useDispatch();
  const { loading, error, isAuth, message } = useSelector(
    (store: any) => store.auth
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLButtonElement>): any => {
    event.preventDefault();
    // console.log("form:", form);
    if (!form.email || !form.password) {
      alert("Please Fill All Details");
    } else {
      dispatch({ type: CLEAR_MESSAGE }); // CLEAR ERROR MESSAGE AND MESSAGE IN FROM REDUX
      dispatch(postLogin(form));
    }
  };

  // console.log("loading:", loading);

  const { email, password } = form;

  if (message === "Login Successfully!") {
    alert(message);
    dispatch({ type: CLEAR_MESSAGE }); // CLEAR ERROR MESSAGE AND MESSAGE IN FROM REDUX
    router.push("/");
  } else
    return (
      <>
        <Navbar />
        <Box
          h="157px"
          m="auto"
          display="flex"
          justifyContent="center"
          alignItems="center"
          bg="#2ebbcd"
          borderBottom="8px solid #fff"
          className={style.header}
        >
          <Heading as="h1" fontSize="60px">
            LOGIN
          </Heading>
        </Box>
        <Stack maxW="429px" m="auto" align="center" justify="center">
          <FormControl className={style.inputLabel}>
            <FormLabel fontWeight="700" color="#f2923c">
              EMAIL
            </FormLabel>
            <Input
              placeholder="Email"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl className={style.inputLabel}>
            <FormLabel fontWeight="700" color="#f2923c">
              PASSWORD
            </FormLabel>
            <Input
              placeholder="Password"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </FormControl>

          <Stack maxW="429px" mt="10px">
            <Button
              w={{ base: "200px", sm: "300px", md: "429px" }}
              borderRadius="0px"
              bg="#2ebbcd"
              color="black"
              _hover={{
                bg: "#f2923c",
              }}
              fontWeight={800}
              fontSize="18px"
              onClick={handleSubmit}
            >
              {loading ? "Loading..." : "SIGN IN"}
            </Button>
          </Stack>
        </Stack>
        <Stack maxW="429px" bg="" m="auto" textAlign="center">
          <Flex justifyContent="space-between">
            <Box mt="10px">
              <Text
                as="h1"
                _hover={{
                  color: "#f2923c",
                }}
              >
                <Link href="/signUp">Create An Account</Link>
              </Text>
            </Box>
            <Box mt="10px">
              <Text
                as="h1"
                _hover={{
                  color: "#f2923c",
                }}
              >
                <Link href="#">Forget your Password?</Link>
              </Text>
            </Box>
          </Flex>
          <Box pt="20px" bg="">
            <Text
              as="h1"
              _hover={{
                color: "#f2923c",
              }}
            >
              <Link href="/">Return to Store</Link>
            </Text>
          </Box>
        </Stack>
        <Footer />
      </>
    );
}
