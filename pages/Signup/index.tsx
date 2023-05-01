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
// import { useDispatch, useSelector } from "react-redux";
import style from "./signUp.module.css";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";
import { CLEAR_MESSAGE } from "@/redux/auth/auth.types";
import { useRouter } from "next/router";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
// import Navbar from "@/components/Navbar/Navbar";
// import { Navigate } from "react-router-dom";
import { postSign } from "../../redux/auth/auth.action";
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
  const router = useRouter();
  const [form, setForm] = useState<SignUpFormT>(initState);
  const dispatch: Dispatch<any> = useDispatch();
  const { loading, error, isAuth, message } = useSelector(
    (store: any) => store.auth
  );
  // console.log('message:', message)

  useEffect(() => {
    if (message === "User Already Present") {
      alert(message);
      dispatch({ type: CLEAR_MESSAGE });
    } else if (message === "Wrong Credentials") {
      setForm(initState);
      alert(message);
      dispatch({ type: CLEAR_MESSAGE });
    }
  }, [loading, error, isAuth, dispatch, message]);

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
      dispatch(postSign(form));
    }
    // console.log("email:", form.email, "password:", form.password)
  };

  const { first_name, last_name, email, password } = form;
  if (message === "User Create Successfully!") {
    alert(message);
    dispatch({ type: CLEAR_MESSAGE }); // CLEAR ERROR MESSAGE AND MESSAGE IN FROM REDUX
    router.push("/login");
  } else
    return (
      <>
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
          <h1 style={{ fontSize: "46px" }}>CREATE ACCOUNT</h1>
        </Box>
        <Box w="429px" m="auto" alignItems="center" justifyContent="center">
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

          <Stack w="429px" mt="20px">
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
                  {loading ? "Loading..." : "CREATE"}
            </Button>
          </Stack>
        </Box>

        <Box w="429px" m="auto" textAlign="center">
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
        </Box>
        <Footer />
      </>
    );
}
