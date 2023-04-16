import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./signUp.module.css";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
// import { Navigate } from "react-router-dom";
// import { postLogin } from "../Redux/user/user.action";
// import { CLEAR_MESSAGE } from "../Redux/user/user.type";

type SignUpFormT = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};

const initState = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
};
export default function SignUp() {
  const [form, setForm] = useState<SignUpFormT>(initState);
  const dispatch = useDispatch();
  //   const { loading, error, isAuth, message } = useSelector(
  //     (store) => store.user
  //   );
  //   // console.log('message:', message)
  //   // console.log('isAuth:', isAuth);

  //   useEffect(() => {
  //     if (message === "Wrong Credentials") {
  //       form.email = "";
  //       form.password = "";
  //       alert(message);
  //       dispatch({ type: CLEAR_MESSAGE });
  //     }
  //   }, [loading, error, isAuth, dispatch, form, message]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLButtonElement>): any => {
    event.preventDefault();
    console.log("form:", form);
    if (!form.email || !form.password) {
      alert("Please Fill All Details");
    } else {
      //   dispatch({ type: CLEAR_MESSAGE }); // CLEAR ERROR MESSAGE AND MESSAGE IN FROM REDUX
      //   dispatch(postLogin(form));
    }
    // console.log("email:", form.email, "password:", form.password)
  };

  const { first_name, last_name, email, password } = form;
  //   if (isAuth && message === "Login Successfully!") {
  //     alert(message);
  //     return <Navigate to="/" />;
  //   } else
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
          CREATE ACCOUNT
        </Heading>
      </Box>
      <Stack w="429px" m="auto" align="center" justify="center">
        <FormControl className={style.inputLabel}>
          <FormLabel fontWeight="700" color="#f2923c">
            FIRST NAME
          </FormLabel>
          <Input
            placeholder="First Name"
            type="text"
            name="first_name"
            value={first_name}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl className={style.inputLabel}>
          <FormLabel fontWeight="700" color="#f2923c">
            LAST NAME
          </FormLabel>
          <Input
            placeholder="Last Name"
            type="text"
            name="last_name"
            value={last_name}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl className={style.inputLabel}>
          <FormLabel fontWeight="700" color="#f2923c">
            EMAIL
          </FormLabel>
          <Input
            placeholder="email"
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

        <Stack w="429px">
          <Button
            w="429px"
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
            CREATE
          </Button>
        </Stack>
      </Stack>
      <Stack w="429px" m="auto" textAlign="center">
        <Box mt="10px">
          <Text
            as="h1"
            _hover={{
              color: "#f2923c",
            }}
          >
            <Link href="/login">Already have an account?</Link>
          </Text>
        </Box>
        <Box mt="30px">
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
