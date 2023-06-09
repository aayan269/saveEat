import React from 'react'
import "./editmenu.css"
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
  Flex,
  Button,
  MenuButton,
  MenuList,
  MenuItem,
  Menu
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { FaEllipsisV } from 'react-icons/fa';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import BulkUpload from '../bulk/Bulk';
import Navbar from '../Navbar/Navbar';
import PreNav from '../Pre-nav/PreNav';

export default function Editmenu() {
  const navigate=useNavigate()
  return (
    <>
     <PreNav/>
      <Navbar/>
    <Box w={{base:"90vw",lg:"80vw"}}  m={"auto"}  display={"flex"} justifyContent={"flex-end"} alignItems={"center"}  h={"70px"}>

    <Box  display={"flex"} gap={"5"} >
    {/* <Button colorScheme='green' size='md' className='btt'>Bulk Upload</Button> */}
    <BulkUpload/>
  <Link to="/addItem">   <Button colorScheme='green' size='md'  className='btt'>Add Individual Product</Button></Link>
    
    </Box>
    
    </Box>
    <Box className="table-container" w={{base:"90vw",lg:"80vw"}} m={"auto"}>
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
            <Th id="thds"><FaEllipsisV style={{textAlign:"center",width:"100%"}} color='white'/></Th>
          </Tr>
        </Thead>
        <Tbody display={{base:"block",md:"block",lg:"none"}}>
       
          <Box  width={{base:"90vw",md:"86vw"}} padding={2} m={"auto"} height={"200px"} overflowY={"scroll"}>
          <Box border={"1px solid"}  w={{base:"80vw",md:"60vw"}}  m={"auto"} >

           <Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">name</Th><Td id="thd"><label htmlFor="fileInput"> Image</label><input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="registerPPInput"/></Td></Tr></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">name</Th><Td id="thd">Pizza</Td></Tr></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">name</Th><Td id="thd">Pizza</Td></Tr></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">name</Th><Td id="thd">Pizza</Td></Tr></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">name</Th><Td id="thd">Pizza</Td></Tr></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">name</Th><Td id="thd">Pizza</Td></Tr></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">name</Th><Td id="thd">Pizza</Td></Tr></Flex>
           <Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">name</Th><Td id="thd"><FaEllipsisV style={{textAlign:"ecnter",width:"100%"}} /></Td></Tr></Flex>

          
          </Box>
          <Box border={"1px solid"}  w={{base:"80vw",md:"60vw"}}  m={"auto"} >

<Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">name</Th><Td id="thd"><label htmlFor="fileInput"> Image</label><input
   id="fileInput"
   type="file"
   style={{ display: "none" }}
   className="registerPPInput"/></Td></Tr></Flex>
<Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">name</Th><Td id="thd">Pizza</Td></Tr></Flex>
<Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">name</Th><Td id="thd">Pizza</Td></Tr></Flex>
<Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">name</Th><Td id="thd">Pizza</Td></Tr></Flex>
<Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">name</Th><Td id="thd">Pizza</Td></Tr></Flex>
<Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">name</Th><Td id="thd">Pizza</Td></Tr></Flex>
<Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">name</Th><Td id="thd">Pizza</Td></Tr></Flex>
<Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">name</Th><Td id="thd"><FaEllipsisV style={{textAlign:"ecnter",width:"100%"}} /></Td></Tr></Flex>


</Box>
<Box border={"1px solid"}  w={{base:"80vw",md:"60vw"}}  m={"auto"} >

<Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">name</Th><Td id="thd"><label htmlFor="fileInput"> Image</label><input
   id="fileInput"
   type="file"
   style={{ display: "none" }}
   className="registerPPInput"/></Td></Tr></Flex>
<Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">name</Th><Td id="thd">Pizza</Td></Tr></Flex>
<Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">name</Th><Td id="thd">Pizza</Td></Tr></Flex>
<Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">name</Th><Td id="thd">Pizza</Td></Tr></Flex>
<Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">name</Th><Td id="thd">Pizza</Td></Tr></Flex>
<Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">name</Th><Td id="thd">Pizza</Td></Tr></Flex>
<Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">name</Th><Td id="thd">Pizza</Td></Tr></Flex>
<Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">name</Th><Td id="thd"><FaEllipsisV style={{textAlign:"ecnter",width:"100%"}} /></Td></Tr></Flex>


</Box>
<Box border={"1px solid"}  w={{base:"80vw",md:"60vw"}}  m={"auto"} >

<Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">name</Th><Td id="thd"><label htmlFor="fileInput"> Image</label><input
   id="fileInput"
   type="file"
   style={{ display: "none" }}
   className="registerPPInput"/></Td></Tr></Flex>
<Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">name</Th><Td id="thd">Pizza</Td></Tr></Flex>
<Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">name</Th><Td id="thd">Pizza</Td></Tr></Flex>
<Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">name</Th><Td id="thd">Pizza</Td></Tr></Flex>
<Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">name</Th><Td id="thd">Pizza</Td></Tr></Flex>
<Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">name</Th><Td id="thd">Pizza</Td></Tr></Flex>
<Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">name</Th><Td id="thd">Pizza</Td></Tr></Flex>
<Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">name</Th><Td id="thd"><FaEllipsisV style={{textAlign:"ecnter",width:"100%"}} /></Td></Tr></Flex>


</Box>
<Box border={"1px solid"}  w={{base:"80vw",md:"60vw"}}  m={"auto"} >

<Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">name</Th><Td id="thd"><label htmlFor="fileInput"> Image</label><input
   id="fileInput"
   type="file"
   style={{ display: "none" }}
   className="registerPPInput"/></Td></Tr></Flex>
<Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">name</Th><Td id="thd">Pizza</Td></Tr></Flex>
<Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">name</Th><Td id="thd">Pizza</Td></Tr></Flex>
<Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">name</Th><Td id="thd">Pizza</Td></Tr></Flex>
<Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">name</Th><Td id="thd">Pizza</Td></Tr></Flex>
<Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">name</Th><Td id="thd">Pizza</Td></Tr></Flex>
<Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">name</Th><Td id="thd">Pizza</Td></Tr></Flex>
<Flex  justifyContent={"space-between"}  p={2}><Tr><Th id="thds">name</Th><Td id="thd"><FaEllipsisV style={{textAlign:"ecnter",width:"100%"}} /></Td></Tr></Flex>


</Box>
          
        
          </Box>

       </Tbody>
        <Tbody display={{base:"none",md:"none",lg:"table"}}>
          <Tr>
            <Td id="thd">Biryani Rice</Td>
            <Td id="thd"><label htmlFor="fileInput"> Image</label><input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="registerPPInput"/></Td>
            <Td id="thd">Veg</Td>
            <Td id="thd">MRP</Td>
            <Td id="thd">5%</Td>
            <Td id="thd">Rice</Td>
            <Td id="thd">Rice</Td>
            <Td id="thd">124</Td>
            <Td id="thd">450.00</Td>
            <Td id="thd">All Day</Td>
            <Td id="thd"> <Menu>
  <MenuButton  >
<FaEllipsisV style={{textAlign:"center"}}/>
    </MenuButton>
  <MenuList  >
  <Link to="/updateItem">
    <MenuItem icon={<EditIcon />} >
      Edit Item
    </MenuItem></Link>
    <MenuItem icon={<DeleteIcon />} >
      Delete Item
    </MenuItem>
    
  </MenuList>
</Menu></Td>
          </Tr>

          <Tr>
            <Td id="thd">Biryani Rice</Td>
            <Td id="thd"><label htmlFor="fileInput"> Image</label><input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="registerPPInput"/></Td>
            <Td id="thd">Veg</Td>
            <Td id="thd">MRP</Td>
            <Td id="thd">5%</Td>
            <Td id="thd">Rice</Td>
            <Td id="thd">Rice</Td>
            <Td id="thd">124</Td>
            <Td id="thd">450.00</Td>
            <Td id="thd">All Day</Td>
            <Td id="thd"> <Menu>
  <MenuButton  >
<FaEllipsisV style={{textAlign:"center"}}/>
    </MenuButton>
  <MenuList  >
  <Link to="/updateItem">
    <MenuItem icon={<EditIcon />} >
      Edit Item
    </MenuItem></Link>
    <MenuItem icon={<DeleteIcon />} >
      Delete Item
    </MenuItem>
    
  </MenuList>
</Menu></Td>
          </Tr>
          <Tr>
            <Td id="thd">Biryani Rice</Td>
            <Td id="thd"><label htmlFor="fileInput"> Image</label><input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="registerPPInput"/></Td>
            <Td id="thd">Veg</Td>
            <Td id="thd">MRP</Td>
            <Td id="thd">5%</Td>
            <Td id="thd">Rice</Td>
            <Td id="thd">Rice</Td>
            <Td id="thd">124</Td>
            <Td id="thd">450.00</Td>
            <Td id="thd">All Day</Td>
            <Td id="thd"> <Menu>
  <MenuButton  >
<FaEllipsisV style={{textAlign:"center"}}/>
    </MenuButton>
  <MenuList  >
  <Link to="/updateItem">
    <MenuItem icon={<EditIcon />} >
      Edit Item
    </MenuItem></Link>
    <MenuItem icon={<DeleteIcon />} >
      Delete Item
    </MenuItem>
    
  </MenuList>
</Menu></Td>
          </Tr>

          <Tr>
            <Td id="thd">Biryani Rice</Td>
            <Td id="thd"><label htmlFor="fileInput"> Image</label><input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="registerPPInput"/></Td>
            <Td id="thd">Veg</Td>
            <Td id="thd">MRP</Td>
            <Td id="thd">5%</Td>
            <Td id="thd">Rice</Td>
            <Td id="thd">Rice</Td>
            <Td id="thd">124</Td>
            <Td id="thd">450.00</Td>
            <Td id="thd">All Day</Td>
            <Td id="thd"> <Menu>
  <MenuButton  >
<FaEllipsisV style={{textAlign:"center"}}/>
    </MenuButton>
  <MenuList  >
  <Link to="/updateItem">
    <MenuItem icon={<EditIcon />} >
      Edit Item
    </MenuItem></Link>
    <MenuItem icon={<DeleteIcon />} >
      Delete Item
    </MenuItem>
    
  </MenuList>
</Menu></Td>
          </Tr>

          <Tr>
            <Td id="thd">Biryani Rice</Td>
            <Td id="thd"><label htmlFor="fileInput"> Image</label><input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="registerPPInput"/></Td>
            <Td id="thd">Veg</Td>
            <Td id="thd">MRP</Td>
            <Td id="thd">5%</Td>
            <Td id="thd">Rice</Td>
            <Td id="thd">Rice</Td>
            <Td id="thd">124</Td>
            <Td id="thd">450.00</Td>
            <Td id="thd">All Day</Td>
            <Td id="thd"> <Menu>
  <MenuButton  >
<FaEllipsisV style={{textAlign:"center"}}/>
    </MenuButton>
  <MenuList  >
  <Link to="/updateItem">
    <MenuItem icon={<EditIcon />} >
      Edit Item
    </MenuItem></Link>
    <MenuItem icon={<DeleteIcon />} >
      Delete Item
    </MenuItem>
    
  </MenuList>
</Menu></Td>
          </Tr>

          <Tr>
            <Td id="thd">Biryani Rice</Td>
            <Td id="thd"><label htmlFor="fileInput"> Image</label><input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="registerPPInput"/></Td>
            <Td id="thd">Veg</Td>
            <Td id="thd">MRP</Td>
            <Td id="thd">5%</Td>
            <Td id="thd">Rice</Td>
            <Td id="thd">Rice</Td>
            <Td id="thd">124</Td>
            <Td id="thd">450.00</Td>
            <Td id="thd">All Day</Td>
            <Td id="thd"> <Menu>
  <MenuButton  >
<FaEllipsisV style={{textAlign:"center"}}/>
    </MenuButton>
  <MenuList  >
  <Link to="/updateItem">
    <MenuItem icon={<EditIcon />} >
      Edit Item
    </MenuItem></Link>
    <MenuItem icon={<DeleteIcon />} >
      Delete Item
    </MenuItem>
    
  </MenuList>
</Menu></Td>
          </Tr>

          <Tr>
            <Td id="thd">Biryani Rice</Td>
            <Td id="thd"><label htmlFor="fileInput"> Image</label><input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="registerPPInput"/></Td>
            <Td id="thd">Veg</Td>
            <Td id="thd">MRP</Td>
            <Td id="thd">5%</Td>
            <Td id="thd">Rice</Td>
            <Td id="thd">Rice</Td>
            <Td id="thd">124</Td>
            <Td id="thd">450.00</Td>
            <Td id="thd">All Day</Td>
            <Td id="thd"> <Menu>
  <MenuButton  >
<FaEllipsisV style={{textAlign:"center"}}/>
    </MenuButton>
  <MenuList  >
  <Link to="/updateItem">
    <MenuItem icon={<EditIcon />} >
      Edit Item
    </MenuItem></Link>
    <MenuItem icon={<DeleteIcon />} >
      Delete Item
    </MenuItem>
    
  </MenuList>
</Menu></Td>
          </Tr>
         
          
        </Tbody>
      </Table>
    </TableContainer>
    </Box>
    </>
  )
}



// import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
// import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
{/* <Table  size="sm" variant="striped" colorScheme={"gray"}>
      <Thead>
        <Tr>
          <Th>Event</Th>
          <Th>Date</Th>
          <Th>Location</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Tablescon</Td>
          <Td>9 April 2019</Td>
          <Td>East Annex</Td>
        </Tr>
        <Tr>
          <Td>Capstone Data</Td>
          <Td>19 May 2019</Td>
          <Td>205 Gorgas</Td>
        </Tr>
        <Tr>
          <Td>Tuscaloosa D3</Td>
          <Td>29 June 2019</Td>
          <Td>Github</Td>
        </Tr>
      </Tbody>
    </Table> */}