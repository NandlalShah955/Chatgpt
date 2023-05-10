import React from 'react'

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
        // h={"80px"}
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
            MustWeb
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
         
            About Us
      
          </Box>
        
          <Box mt={{ base: 4, md: 0 }} mr={{ base: 0, md: 6 }}>
         
            Services
            
       
            
          </Box>


          <Box mt={{ base: 4, md: 0 }} mr={{ base: 0, md: 6 }}>
         
            Pricing
            
         
            
          </Box>
         
          <Box mt={{ base: 4, md: 0 }} mr={{ base: 0, md: 6 }}>
         
            Projects
            
            
         
            
          </Box>

          <Box mt={{ base: 4, md: 0 }} mr={{ base: 0, md: 6 }}>
           
        
           
            Contact Us
            
            
            
        
          </Box>
        
        </Flex>
      </Flex>

    </>

    
  )
}

export default Navbar