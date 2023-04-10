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
import { useDispatch } from "react-redux";
import style from "./login.module.css";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";
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
  const [form, setForm] = useState<SignUpFormT>(initState);
  const dispatch = useDispatch();

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
   
    }
  
  };

  const { email, password } = form;

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
      <Stack w="429px" m="auto" align="center" justify="center">
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

        <Stack w="429px" mt="10px">
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
            SIGN IN
          </Button>
        </Stack>
      </Stack>
      <Stack w="429px" bg="" m="auto" textAlign={"center"}>
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
