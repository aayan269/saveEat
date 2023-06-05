import { Box, Flex, Icon, Image,Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,Button, Divider } from '@chakra-ui/react'
import React from 'react'
import vector from "../../Vector.png"
import "./Navbar.css"
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaUserAlt } from 'react-icons/fa';
import HamDrawer from './Drawer';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate=useNavigate()
  return (
    <Flex  w={"100vw"} h={"62px"} bgColor={"#19ABAD"} justifyContent={"space-between"}>
    <Box w={"120px"} ml={"3vw"}><Image p={"22px"} w={"100%"} h={"100%"} src={vector} alt='saveEat' /></Box>
    <Box w={"120px"} display={{ base: "block", md: "block", lg: "none" }}><h2 className='outlet'>RS1019</h2></Box>
    <Box w={"55vw"}  display={{ base: "none", md: "none", lg: "block" }}>
        <nav>
        <span onClick={()=>navigate("/")}>Home</span>
        <span onClick={()=>navigate("/menu")}>Menu</span>
        <span >Reports</span>
        {/* <a href='#'>Settings</a> */}
        <span ><Menu pl={9} >
  {({ isOpen }) => (
    <>
    {isOpen?
    <MenuButton bgColor={"#19ABAD"}  variant={"unstyled"} display={"flex"} pb={4}  isActive={isOpen} as={Button} rightIcon={<ChevronUpIcon  />}>
        Pick an Option
      </MenuButton>
      :<MenuButton bgColor={"#19ABAD"} isActive={isOpen} display={"flex"} pb={4} pl={9} variant={"unstyled"} as={Button} rightIcon={<ChevronDownIcon  boxSize={5} />}>
        Settings
      </MenuButton>}
      <MenuList minW="0" w={"150px"} >
        <MenuItem _hover={{color:"#805ad5"}} pl={5} color={"black"} onClick={()=>navigate("/setting")}>Setting I</MenuItem>
        <Divider/>
         <MenuItem _hover={{color:"#805ad5"}} pl={5} color={"black"} onClick={()=>navigate("/brand_setting")}>Setting II</MenuItem>
      </MenuList>
    </>
  )}
</Menu></span>

        <span onClick={()=>navigate("/discount")}>Discount</span>
        <span href='#' ><FaUserAlt  /></span>
        </nav>
        
        </Box>
    <Box w={"120px"} mr={"1vw"} display={{ base: "none", md: "none", lg: "block" }}><h2 className='outlet'>RS1019</h2></Box>
    <Box display={{ base: "block", md: "block", lg: "none" }}><HamDrawer/></Box>
    </Flex>
  )
}

export default Navbar