import React from 'react'
import {Link} from "react-router-dom"

import {Flex,Box,useDisclosure} from "@chakra-ui/react"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";


function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
    <>
<Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        p={6}
        bg="#213059"
        color="white"
        fontFamily={"Montserrat"}
        position={"sticky"}
        overflow={"hidden"}
      zIndex={"999"}
      // top={'0'}
      cursor={"pointer"}
      >
        <Flex align="center">
         
          <Box fontWeight="bold" fontSize="30px" letterSpacing="wide" >
           Chattru
          </Box>
         </Flex>
       <Box
          display={{ base: "block", md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        >
          {isOpen ? <CloseIcon w={6} h={6} /> : <HamburgerIcon w={6} h={6} />}
        </Box>

        <Flex
          align="center"
         mt={'-10px'}
          justify={{ base: "center", md: "flex-end" }}
          direction={{ base: "column", md: "row" }}
          pt={{ base: 4, md: 0 }}
          display={{ base: isOpen ? "flex" : "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          fontSize={"20px"}
        >
     
          <Box mt={{ base: 4, md: 0 }} mr={{ base: 0, md: 6 }} >
         <Link to="/chatgpt">

             Chatgpt
         </Link>
      
          </Box>
          <Box mt={{ base: 4, md: 0 }} mr={{ base: 0, md: 6 }} >
         <Link to="https://nandlalshah955.github.io/">

             AboutUs
         </Link>
      
          </Box>
        


          <Box mt={{ base: 4, md: 0 }} mr={{ base: 0, md: 6 }}>
         
          <Link to="/payment">


            Payment
</Link>
            
         
            
          </Box>
      
        
        </Flex>
      </Flex>

    </>

    
  )
}

export default Navbar