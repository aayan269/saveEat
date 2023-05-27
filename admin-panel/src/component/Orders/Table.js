import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Flex,
} from "@chakra-ui/react";
import "./Tables.css";
export default function Tables() {
  return (
   <Box className="table-container">
    <TableContainer borderTop={"none"}>
      <Table  size="sm" variant="striped" colorScheme={"gray"}>
        <TableCaption>
          <Box w={{base:"80vw",lg:"75vw"}} h={{base:"100px",md:"60px",lg:"60px"}} display={"flex"} flexDirection={{base:"column",md:"row",lg:"row"}} justifyContent={"space-between"} alignItems={"center"} className="info">
                <Box display={"flex"} paddingLeft={"5"}><h5 className='orderdate'>Rider Name : </h5>
                  <h3 className='ordertime'>Sneh Binny</h3></Box>
                <Box display={"flex"}> <h5 className='orderdate'>Rider Mobile Number : </h5>
                  <h3 className='ordertime'>1234567890</h3></Box>
                <Box  display={{base:"flex",md:"none",lg:"none"}}> <h5 className='orderdate'>Customer Name : </h5>
                  <h3 className='ordertime'>sneh Binny</h3></Box>
                <Box display={"flex"} paddingRight={"5"}> <h5 className='orderdate'>Customer Address : </h5>
                  <h3 className='ordertime'>Patna city</h3></Box>
          </Box>
          <Box display={"flex"} padding={"5"}> <h5 className='orderdate'>Instruction : </h5>
                  <h3 className='ordertime'> lorem hsdah jewhfien ajsfjsf </h3></Box>
          <Box h={"60px"} w={{base:"80vw",lg:"75vw"}} border={"1px solid"} className="info"></Box>
        </TableCaption>
        <Thead  w={"100%"} color={"white"} id="hgf" display={{base:"none",md:"none",lg:"table"}}>
          <Tr>
            <Th id="thds">Item Name</Th>
            <Th id="thds">Choices</Th>
            <Th id="thds">Full Price</Th>
            <Th id="thds">Discount</Th>
            <Th id="thds">Quantity</Th>
            <Th id="thds">Amount</Th>
            <Th id="thds">Tax</Th>
            <Th id="thds">Total</Th>
            <Th id="thds">Store Proceeds</Th>
          </Tr>
        </Thead>
       <Tbody display={{base:"block",md:"block",lg:"none"}}>
       {/* <Tr>
            <Td id="thd">Pizza</Td>
            <Td id="thd">Thin Crust,Fresh Pan, Olives and Onion</Td>
            <Td id="thd">240.00</Td>
            <Td id="thd">20%</Td>
            <Td id="thd">2</Td>
            <Td id="thd">200.00</Td>
            <Td id="thd">9</Td>
            <Td id="thd">30</Td>
            <Td id="thd">200.00</Td>
          </Tr> */}
          <Box  width={{base:"90vw",md:"86vw"}} padding={2} m={"auto"} height={"200px"} overflowY={"scroll"}>
          <Box border={"1px solid"}  w={{base:"80vw",md:"60vw"}}  m={"auto"} >
           <Flex  justifyContent={"space-between"} p={2} ><h2 id="thds">name</h2><h2 id="thd">Pizza</h2></Flex>
           <Flex  justifyContent={"space-between"} p={2}><h2  id="thds">name</h2> <h2 id="thd">Thin Crust,Fresh Pan, Olives and Onion</h2></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><h2 id="thds">name</h2><h2 id="thd">240.00</h2></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><h2 id="thds">name</h2><h2 id="thd">20%</h2></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><h2 id="thds">name</h2><h2 id="thd">2</h2></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><h2 id="thds">name</h2><h2 id="thd">200.00</h2></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><h2 id="thds">name</h2><h2 id="thd">9</h2></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><h2 id="thds">name</h2><h2 id="thd">30</h2></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><h2 id="thds">name</h2><h2 id="thd">200.00</h2></Flex>
          </Box>

          <Box border={"1px solid"}  w={{base:"80vw",md:"60vw"}}  m={"auto"} >
           <Flex  justifyContent={"space-between"} p={2} ><h2 id="thds">name</h2><h2 id="thd">Pizza</h2></Flex>
           <Flex  justifyContent={"space-between"} p={2}><h2  id="thds">name</h2> <h2 id="thd">Thin Crust,Fresh Pan, Olives and Onion</h2></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><h2 id="thds">name</h2><h2 id="thd">240.00</h2></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><h2 id="thds">name</h2><h2 id="thd">20%</h2></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><h2 id="thds">name</h2><h2 id="thd">2</h2></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><h2 id="thds">name</h2><h2 id="thd">200.00</h2></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><h2 id="thds">name</h2><h2 id="thd">9</h2></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><h2 id="thds">name</h2><h2 id="thd">30</h2></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><h2 id="thds">name</h2><h2 id="thd">200.00</h2></Flex>
          </Box>
          <Box border={"1px solid"}  w={{base:"80vw",md:"60vw"}}  m={"auto"} >
           <Flex  justifyContent={"space-between"} p={2} ><h2 id="thds">name</h2><h2 id="thd">Pizza</h2></Flex>
           <Flex  justifyContent={"space-between"} p={2}><h2  id="thds">name</h2> <h2 id="thd">Thin Crust,Fresh Pan, Olives and Onion</h2></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><h2 id="thds">name</h2><h2 id="thd">240.00</h2></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><h2 id="thds">name</h2><h2 id="thd">20%</h2></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><h2 id="thds">name</h2><h2 id="thd">2</h2></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><h2 id="thds">name</h2><h2 id="thd">200.00</h2></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><h2 id="thds">name</h2><h2 id="thd">9</h2></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><h2 id="thds">name</h2><h2 id="thd">30</h2></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><h2 id="thds">name</h2><h2 id="thd">200.00</h2></Flex>
          </Box>
          <Box border={"1px solid"}  w={{base:"80vw",md:"60vw"}}  m={"auto"} >
           <Flex  justifyContent={"space-between"} p={2} ><h2 id="thds">name</h2><h2 id="thd">Pizza</h2></Flex>
           <Flex  justifyContent={"space-between"} p={2}><h2  id="thds">name</h2> <h2 id="thd">Thin Crust,Fresh Pan, Olives and Onion</h2></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><h2 id="thds">name</h2><h2 id="thd">240.00</h2></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><h2 id="thds">name</h2><h2 id="thd">20%</h2></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><h2 id="thds">name</h2><h2 id="thd">2</h2></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><h2 id="thds">name</h2><h2 id="thd">200.00</h2></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><h2 id="thds">name</h2><h2 id="thd">9</h2></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><h2 id="thds">name</h2><h2 id="thd">30</h2></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><h2 id="thds">name</h2><h2 id="thd">200.00</h2></Flex>
          </Box>
          </Box>

       </Tbody>
        <Tbody display={{base:"none",md:"none",lg:"table"}}>
          <Tr>
            <Td id="thd">Pizza</Td>
            <Td id="thd">Thin Crust,Fresh Pan, Olives and Onion</Td>
            <Td id="thd">240.00</Td>
            <Td id="thd">20%</Td>
            <Td id="thd">2</Td>
            <Td id="thd">200.00</Td>
            <Td id="thd">9</Td>
            <Td id="thd">30</Td>
            <Td id="thd">200.00</Td>
          </Tr>

          <Tr>
            <Td id="thd">Pizza</Td>
            <Td id="thd">Thin Crust,Fresh Pan, Olives and Onion</Td>
            <Td id="thd">240.00</Td>
            <Td id="thd">20%</Td>
            <Td id="thd">2</Td>
            <Td id="thd">200.00</Td>
            <Td id="thd">9</Td>
            <Td id="thd">30</Td>
            <Td id="thd">200.00</Td>
          </Tr>

          <Tr>
            <Td id="thd">Pizza</Td>
            <Td id="thd">Thin Crust,Fresh Pan, Olives and Onion</Td>
            <Td id="thd">240.00</Td>
            <Td id="thd">20%</Td>
            <Td id="thd">2</Td>
            <Td id="thd">200.00</Td>
            <Td id="thd">9</Td>
            <Td id="thd">30</Td>
            <Td id="thd">200.00</Td>
          </Tr>

          <Tr>
            <Td id="thd">Pizza</Td>
            <Td id="thd">Thin Crust,Fresh Pan, Olives and Onion</Td>
            <Td id="thd">240.00</Td>
            <Td id="thd">20%</Td>
            <Td id="thd">2</Td>
            <Td id="thd">200.00</Td>
            <Td id="thd">9</Td>
            <Td id="thd">30</Td>
            <Td id="thd">200.00</Td>
          </Tr>

          <Tr>
            <Td id="thd">Pizza</Td>
            <Td id="thd">Thin Crust,Fresh Pan, Olives and Onion</Td>
            <Td id="thd">240.00</Td>
            <Td id="thd">20%</Td>
            <Td id="thd">2</Td>
            <Td id="thd">200.00</Td>
            <Td id="thd">9</Td>
            <Td id="thd">30</Td>
            <Td id="thd">200.00</Td>
          </Tr>

          <Tr>
            <Td id="thd">Pizza</Td>
            <Td id="thd">Thin Crust,Fresh Pan, Olives and Onion</Td>
            <Td id="thd">240.00</Td>
            <Td id="thd">20%</Td>
            <Td id="thd">2</Td>
            <Td id="thd">200.00</Td>
            <Td id="thd">9</Td>
            <Td id="thd">30</Td>
            <Td id="thd">200.00</Td>
          </Tr>

          <Tr>
            <Td id="thd">Pizza</Td>
            <Td id="thd">Thin Crust,Fresh Pan, Olives and Onion</Td>
            <Td id="thd">240.00</Td>
            <Td id="thd">20%</Td>
            <Td id="thd">2</Td>
            <Td id="thd">200.00</Td>
            <Td id="thd">9</Td>
            <Td id="thd">30</Td>
            <Td id="thd">200.00</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer></Box>
  );
}
