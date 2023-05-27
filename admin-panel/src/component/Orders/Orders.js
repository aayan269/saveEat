import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Stack,
    Flex
  } from '@chakra-ui/react'
import "./orders.css"
import Tables from './Table'

export default function Orders() {
  return (
    <Accordion defaultIndex={[0]} w={{base:"90vw",lg:"80vw"}} m={"auto"} allowToggle>

  <AccordionItem bgColor={"#FF8181"} borderRadius={7}>
    <h2>
      <AccordionButton>
        {/* <Box flex='1' color="white"  >
          Section 1 title
        </Box>
      <Box>hjgj</Box> */}
      <Stack w={"100%"}>
      <Flex w={"99%"} margin={"auto"} justifyContent={"space-between"}>
        <h2 id='order_No'>OD1234</h2>
        <h2 id='order_Price'>Rs 500.00</h2>
        </Flex>
      <Flex  w={"99%"} margin={"auto"} justifyContent={{base:"center",md:"space-between",lg:"space-between"}}  >
        <Box w={"auto"} h={"23px"} marginLeft={"7px"}>
            <Flex w={"auto"} h={"100%"} justifyContent={{base:"center",md:"space-between",lg:"space-between"}} gap={"10px"} >
               
            <Box w={"auto"} h={"100%"} >
                <Flex justifyContent={"space-between"}>
                  <h5 id='order_date'>Order Date & Time :</h5>
                  <h3 id='order_time'> 12/12/2023 | 15:45</h3>
                </Flex>
            </Box>
            <Box w={"auto"} h={"100%"} display={{base:"none",md:"block",lg:"block"}}><Flex justifyContent={"space-around"}>
                  <h5 id='order_date'>Customer Name : </h5>
                  <h3 id='order_time'>Sneh Binny</h3>
                </Flex></Box>
            
               
               
               </Flex>
        </Box>
        <Box w={"auto"} h={"23px"} marginRight={"-7px"} display={{base:"none",md:"block",lg:"block"}}><h5 id='orderdate'>Delivery Order</h5></Box>
        </Flex>  
      </Stack>
      </AccordionButton>
    </h2>




    <AccordionPanel padding={"10px"} style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"}} borderRadius={"0 0 20px 20px"} bgColor={"white"}>
    <Tables/>
    </AccordionPanel>
  </AccordionItem>
 

  
</Accordion>





  )
}
{/* <Accordion defaultIndex={[0]} w={{base:"90vw",lg:"80vw"}} m={"auto"} allowMultiple>
  <AccordionItem bgColor={"#FF8181"}  borderRadius={7}>
    <h2>
    <AccordionButton>

    <Stack w={"100%"}>
      <Flex w={"99%"} margin={"auto"} justifyContent={"space-between"}>
        <h2 className='order_Price'>Rs 500.00</h2>
        <h2 className='order_No'>OD1234</h2>
        </Flex>
      <Flex  w={"99%"} margin={"auto"} justifyContent={{base:"center",md:"space-between",lg:"space-between"}}  >
        <Box w={"auto"} h={"23px"} marginLeft={"7px"}>
            <Flex w={"auto"} h={"100%"} justifyContent={{base:"center",md:"space-between",lg:"space-between"}} gap={"10px"} >
               
            <Box w={"auto"} h={"100%"} >
                <Flex justifyContent={"space-between"}>
                  <h5 className='order_date'>Order Date & Time :</h5>
                  <h3 className='order_time'> 12/12/2023 | 15:45</h3>
                </Flex>
            </Box>
            <Box w={"auto"} h={"100%"} display={{base:"none",md:"block",lg:"block"}}><Flex justifyContent={"space-around"}>
                  <h5 className='order_date'>Customer Name : </h5>
                  <h3 className='order_time'>Sneh Binny</h3>
                </Flex></Box>
            
               
               
               </Flex>
        </Box>
        <Box w={"auto"} h={"23px"} marginRight={"-7px"} display={{base:"none",md:"block",lg:"block"}}><h5 className='order_date'>Delivery Order</h5></Box>
        </Flex>  
      </Stack>
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
     <TableContainer>
  <Table variant='simple'>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Thead>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td isNumeric>30.48</Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Section 2 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <TableContainer>
  <Table variant='simple'>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Thead>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td isNumeric>30.48</Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
    </AccordionPanel>
  </AccordionItem>
</Accordion> */}