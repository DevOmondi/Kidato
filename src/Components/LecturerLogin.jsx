import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LecturerLogin() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  

  //  set payload
  const lecLoginDetails = {
    username: userName,
    password: password,
  };

  const isUsername = userName === "";
  const isPassword = password === "";

  // TODO: Func to handle form submission
  function lecLoginHandler(e) {
    e.preventDefault();
    // console.log(lecLoginDetails);
    setTimeout(() => {
      if (isUsername || isPassword) {
        alert("Missing credentials :(");
        navigate("/lec-login", { replace: true });
      }
      else {
        navigate("/admin-dashboard", { replace: true });
      }
    }, 2000);
  }
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            Welcome <Link color={"blue.400"}>Mr/Mrs</Link>
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="username" isRequired>
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"} href="/lec-reg">
                  Don't have an account?
                </Link>
              </Stack>
              <Button
                onClick={lecLoginHandler}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
