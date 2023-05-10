import React from 'react'
import {Box,Text} from "@chakra-ui/react"

function NotFound() {
  return (
    <Box h={"680px"} bg={'#F7FAFC'} display={'flex'} justifyContent={'center'} alignItems={'center'} color={'gray'}>
        <Text fontSize={'40px'}> 404 | Not found</Text>
    </Box>
  )
}

export default NotFound