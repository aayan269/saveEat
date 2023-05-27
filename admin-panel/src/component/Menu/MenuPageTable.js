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
  Checkbox,
  Flex
} from "@chakra-ui/react";
import "./MenuPageTable.css";
export default function MenuTables() {
  return (
    <div className="table-container">
    <TableContainer borderTop={"none"}>
      <Table size="sm" variant="striped" colorScheme={"gray"}>
        
        <Thead w={"100%"} className="hgf" display={{base:"none",md:"none",lg:"table"}}>
          <Tr >
            <Th id="thds">Item Name</Th>
            <Th id="thds">Image</Th>
            <Th id="thds">Food Type</Th>
            <Th id="thds">Tax Type</Th>
            <Th id="thds">Tax Rate</Th>
            <Th id="thds">Cuisine</Th>
            <Th id="thds">Sub Cuisine</Th>
            <Th id="thds">Weight in (g)</Th>
            <Th id="thds">Food Price</Th>
            <Th id="thds">Item Window</Th>
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
           <Flex  justifyContent={"space-between"}  p={2}><h2 id="thds">name</h2><h2 id="thd">Pizza</h2></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><h2 id="thds">name</h2> <h2 id="thd">Thin Crust,Fresh Pan, Olives and Onion</h2></Flex>
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
            <Td id="thd"><Checkbox colorScheme='green' defaultChecked></Checkbox></Td>
            <Td id="thd">Veg</Td>
            <Td id="thd">MRP</Td>
            <Td id="thd">20%</Td>
            <Td id="thd">200</Td>
            <Td id="thd">Indian</Td>
            <Td id="thd">9</Td>
            <Td id="thd">200.00</Td>
            <Td id="thd">9 am to 11 am</Td>

          </Tr>
          <Tr>
            <Td id="thd">Pizza</Td>
            <Td id="thd"><Checkbox colorScheme='green' defaultChecked></Checkbox></Td>
            <Td id="thd">Veg</Td>
            <Td id="thd">MRP</Td>
            <Td id="thd">20%</Td>
            <Td id="thd">200</Td>
            <Td id="thd">Indian</Td>
            <Td id="thd">9</Td>
            <Td id="thd">200.00</Td>
            <Td id="thd">9 am to 11 am</Td>

          </Tr>
          <Tr>
            <Td id="thd">Pizza</Td>
            <Td id="thd"><Checkbox colorScheme='green' defaultChecked></Checkbox></Td>
            <Td id="thd">Veg</Td>
            <Td id="thd">MRP</Td>
            <Td id="thd">20%</Td>
            <Td id="thd">200</Td>
            <Td id="thd">Indian</Td>
            <Td id="thd">9</Td>
            <Td id="thd">200.00</Td>
            <Td id="thd">9 am to 11 am</Td>

          </Tr>
          <Tr>
            <Td id="thd">Pizza</Td>
            <Td id="thd"><Checkbox colorScheme='green' defaultChecked></Checkbox></Td>
            <Td id="thd">Veg</Td>
            <Td id="thd">MRP</Td>
            <Td id="thd">20%</Td>
            <Td id="thd">200</Td>
            <Td id="thd">Indian</Td>
            <Td id="thd">9</Td>
            <Td id="thd">200.00</Td>
            <Td id="thd">9 am to 11 am</Td>

          </Tr>
          <Tr>
            <Td id="thd">Pizza</Td>
            <Td id="thd"><Checkbox colorScheme='green' defaultChecked></Checkbox></Td>
            <Td id="thd">Veg</Td>
            <Td id="thd">MRP</Td>
            <Td id="thd">20%</Td>
            <Td id="thd">200</Td>
            <Td id="thd">Indian</Td>
            <Td id="thd">9</Td>
            <Td id="thd">200.00</Td>
            <Td id="thd">9 am to 11 am</Td>

          </Tr>
          <Tr>
            <Td id="thd">Pizza</Td>
            <Td id="thd"> <label htmlFor="fileInput"> Upload</label><input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="registerPPInput"/></Td>
            <Td id="thd">Veg</Td>
            <Td id="thd">MRP</Td>
            <Td id="thd">20%</Td>
            <Td id="thd">200</Td>
            <Td id="thd">Indian</Td>
            <Td id="thd">9</Td>
            <Td id="thd">200.00</Td>
            <Td id="thd">9 am to 11 am</Td>

          </Tr>
          <Tr>
            <Td id="thd">Pizza</Td>
            <Td id="thd"><label htmlFor="fileInput"> Upload</label><input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="registerPPInput"/></Td>
            <Td id="thd">Veg</Td>
            <Td id="thd">MRP</Td>
            <Td id="thd">20%</Td>
            <Td id="thd">200</Td>
            <Td id="thd">Indian</Td>
            <Td id="thd">9</Td>
            <Td id="thd">200.00</Td>
            <Td id="thd">9 am to 11 am</Td>

          </Tr>
          
        </Tbody>
      </Table>
    </TableContainer>
    </div>
  );
}
