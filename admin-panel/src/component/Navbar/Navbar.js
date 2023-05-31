import { Box, Flex, Icon, Image } from '@chakra-ui/react'
import React from 'react'
import vector from "../../Vector.png"
import "./Navbar.css"
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaUserAlt } from 'react-icons/fa';
import HamDrawer from './Drawer';

function Navbar() {
  return (
    <Flex  w={"100vw"} h={"62px"} bgColor={"#19ABAD"} justifyContent={"space-between"}>
    <Box w={"120px"} ml={"3vw"}><Image p={"22px"} w={"100%"} h={"100%"} src={vector} alt='saveEat' /></Box>
    <Box w={"120px"} display={{ base: "block", md: "none", lg: "none" }}><h2 className='outlet'>RS1019</h2></Box>
    <Box w={"55vw"}  display={{ base: "none", md: "block", lg: "block" }}>
        <nav>
        <a href='/'>Home</a>
        <a href='/'>Menu</a>
        <a href='#'>Reports</a>
        <a href='#'>Settings</a>
        <a href='#'>Help</a>
        <a href='#' ><FaUserAlt  /></a>
        </nav>
        
        </Box>
    <Box w={"120px"} mr={"1vw"} display={{ base: "none", md: "block", lg: "block" }}><h2 className='outlet'>RS1019</h2></Box>
    <Box display={{ base: "block", md: "none", lg: "none" }}><HamDrawer/></Box>
    </Flex>
  )
}

export default Navbar