import React from 'react'
import {
    Box,
Container,
    Stack,
    Text,
  } from '@chakra-ui/react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <Box
     bg="#213059"
      color='white'>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
     
        <Text>© 2022 Chakra Templates. All rights reserved</Text>
        <Stack direction={'row'} spacing={6}>
      
            <FaTwitter />
         
    
            <FaYoutube />
      
          
            <FaInstagram />
         
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer