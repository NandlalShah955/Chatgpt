import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useToast,
  Image,
 } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useSelector,useDispatch } from 'react-redux';
import {signupUser} from "../Redux/Signup/signup.actions";
import { useNavigate } from 'react-router-dom';
function Signup() {
  const [showPassword, setShowPassword] = useState(false);
 const {isLoading,isRegistered,isError}=useSelector((store)=>store.signup);
 const dispatch=useDispatch();
 const navigate=useNavigate();
 const [signupCreds, setsignupCreds] = useState({});
 const toast=useToast()
 const handleChange=(e)=>{
  const {name,value}=e.target;
  setsignupCreds({
    ...signupCreds,
    [name]:value,
  })
 }
 const handleClick=()=>{
  if (
    !signupCreds.name ||
    !signupCreds.email ||
    !signupCreds.password
  ) {
    toast({
      title: "All fields are mandatory",
      description: "Please fill all the details",
      status: "error",
      duration: 4000,
      isClosable: true,
    });
  } else {
    toast({
      title: "Your account is created",
      description: "We've created your account for you.",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
    dispatch(signupUser(signupCreds));
  }
 }
 
 if (isRegistered) {
  navigate("/");

}
if (isLoading) {
  return (
    <Image
      src="https://th.bing.com/th/id/OIP.B7nM__hT6s_LUFqnpSBEHAHaE8?w=282&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7"
      width={"100%"}
      marginTop={"-30px"}
    ></Image>
  );
} else if (isError) {
  return toast({
    title: "Wrong Credentials",
    description: "Incorrect Email or Password",
    status: "error",
    duration: 4000,
    isClosable: true,
  });
}
  return (
    <Flex
    minH={'100vh'}
    align={'center'}
    justify={'center'}
    bg='#F7FAFC'>
    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
      <Stack align={'center'}>
        <Heading fontSize={'4xl'} textAlign={'center'}>
          Sign up
        </Heading>
        <Text fontSize={'lg'} color={'gray.600'}>
          to enjoy all of our cool features ✌️
        </Text>
      </Stack>
      <Box
        rounded={'lg'}
        bg='#FFFFFF'
        boxShadow={'lg'}
        p={8}>
        <Stack spacing={4}>
          <HStack>
            <Box>
              <FormControl id="firstName" isRequired>
                <FormLabel>First Name</FormLabel>
                <Input type="text"
                onChange={handleChange}
                name='name'
                 />
                

              </FormControl>
            </Box>
            <Box>
              <FormControl id="lastName">
                <FormLabel>Last Name</FormLabel>
                <Input type="text"  onChange={handleChange} />
              </FormControl>
            </Box>
          </HStack>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email"  onChange={handleChange} name='email' />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input type={showPassword ? 'text' : 'password'}  onChange={handleChange} name='password' />
              <InputRightElement h={'full'}>
                <Button
                  variant={'ghost'}
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }>
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Stack spacing={10} pt={2}>
            <Button
              loadingText="Submitting"
              size="lg"
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}
              onClick={handleClick}
              >
              Sign up
            </Button>
          </Stack>
          <Stack pt={6}>
            <Text align={'center'}>
              Already a user? <Link style={{color:"blue"}} to ="/">Login</Link>
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Flex>
  )
}

export default Signup;