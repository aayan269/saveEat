import { Box, Button , Accordion, AccordionItem, AccordionButton,  AccordionPanel, AccordionIcon, Input, FormControl, FormLabel, Flex, Stack, InputGroup, InputRightAddon, Menu, MenuButton, MenuList, MenuItem,} from '@chakra-ui/react'
import React from 'react'
import "./BrandSetting.css"
import TagInput from './TagInput'
import { TriangleDownIcon } from '@chakra-ui/icons'
import {AiOutlineCaretDown} from 'react-icons/ai'
import Modals from './Modal'

export default function BrandSetting() {


return (
<>

<Box w={{base:"90vw",lg:"75vw"}}  m={"auto"}  display={"flex"} justifyContent={"flex-end"} alignItems={"center"}  h={"70px"}>
    

    <Box  display={"flex"} gap={"5"} >
    {/* <Button bgColor={"#96D780"} size='md' id='btt'>Add a New Outlet</Button> */}
    <Modals/>
   
   <Button bgColor={"#96D780"} size='md'  id='btt'>Edit Outlet</Button>
    
    </Box>
    
    </Box>


<Box w={{base:"90vw",lg:"75vw"}} m={"auto"} pb={10}>
<Accordion  allowToggle >
  <AccordionItem>
    <h2>
      <AccordionButton >
        <Box  pl={"10px"} id='hdr' flex='1' textAlign='left'>
          Basic Details
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel  >
        <Stack id='bdy' >
              <FormControl id="Location" isRequired>
                <FormLabel>Location</FormLabel>
                <Input  size={"sm"} borderRadius={10} placeholder='Exact location as on google maps' required />
              </FormControl>
             <Flex gap={{base:0,md:5,lg:10}} flexDirection={{base:"column",md:"row"}}>
             <FormControl id="locality" isRequired>
                <FormLabel>Locality</FormLabel>
                <Input  size={"sm"} borderRadius={10} placeholder='Andheri west' required />
              </FormControl>   
              <FormControl id="phone" isRequired>
                <FormLabel>Outlet Phone No.</FormLabel>
                <Input  size={"sm"} borderRadius={10} placeholder='0123456789' required />
              </FormControl>   
             </Flex> 
             <FormControl id="cuisine" isRequired>
                <FormLabel>Cuisine</FormLabel>
                <TagInput type="text"/>
              </FormControl>
              <FormControl id="outlet Image" isRequired>
                <FormLabel>Outlet Image</FormLabel>
                <InputGroup size={"sm"}>
                <Input  type="file" placeholder='0123456789' required />
                <InputRightAddon bgColor={"#19ABAD"} color={"#FFFFFF"} fontSize={"15px"} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={500} children='Choose File' />
                </InputGroup>
              </FormControl>
      </Stack>
    </AccordionPanel>
  </AccordionItem>

</Accordion>

</Box>

<Box w={{base:"90vw",lg:"75vw"}} m={"auto"} pb={10}>
<Accordion  allowToggle >
  <AccordionItem>
    <h2>
      <AccordionButton >
        <Box  pl={"10px"} id='hdr' flex='1' textAlign='left'>
          Business Details
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel  >
        <Stack id='bdy' >
              <FormControl id="Location" isRequired>
                <FormLabel >Registered Name</FormLabel>
                <Input  size={"sm"} borderRadius={10} placeholder='Exact location as on google maps' required />
              </FormControl>
             <Flex gap={{base:0,md:5,lg:7}} flexDirection={{base:"column",md:"row"}}>
             <FormControl id="locality" isRequired>
                <FormLabel>Brand Name</FormLabel>
                <Input   size={"sm"} borderRadius={10} placeholder='Andheri west' required />
              </FormControl>   
              <FormControl id="phone" isRequired>
                <FormLabel>Ownership Type</FormLabel>
                <Input size={"sm"} borderRadius={10} placeholder='0123456789' required />
              </FormControl>   
             </Flex> 
             <Flex gap={{base:0,md:5,lg:7}} flexDirection={{base:"column",md:"row"}}>
             <FormControl id="locality" isRequired>
                <FormLabel>Signing Authority Email ID</FormLabel>
                <Input   size={"sm"} borderRadius={10} placeholder='Andheri west' required />
              </FormControl>   
              <FormControl id="phone" isRequired>
                <FormLabel>Email ID</FormLabel>
                <Input   size={"sm"} borderRadius={10} placeholder='0123456789' required />
              </FormControl>   
             </Flex>
             <Flex gap={{base:0,md:5,lg:5}} flexDirection={{base:"column",md:"row"}}>
             <Flex flexDirection={{base:"column",md:"Column",lg:"row"}} w={{base:"100%",md:"50%"}} gap={{base:0,md:5,lg:5}} >
              <FormControl id="locality" isRequired>
                <FormLabel>Type of Business</FormLabel>
                <Input  size={"sm"} borderRadius={10} placeholder='Andheri west' required />
              </FormControl>   
              <FormControl id="phone" isRequired>
                <FormLabel>GSTIN Number</FormLabel>
                <Input   size={"sm"} borderRadius={10} placeholder='0123456789' required />
              </FormControl>  </Flex>
              <Flex flexDirection={{base:"column",md:"Column",lg:"row"}} w={{base:"100%",md:"50%"}} gap={{base:0,md:5,lg:5}} >
              <FormControl id="locality" isRequired>
                <FormLabel>FSSAI Licence No.</FormLabel>
                <Input   size={"sm"} borderRadius={10} placeholder='Andheri west' required />
              </FormControl>   
              <FormControl id="phone" isRequired>
                <FormLabel>Reference No.</FormLabel>
                <Input   size={"sm"} borderRadius={10} placeholder='0123456789' required />
              </FormControl></Flex>  
             </Flex>

             <FormControl id="cuisine" isRequired>
                <FormLabel>Billing Address</FormLabel>
                <Stack>
                <Input  size={"sm"} borderRadius={10} placeholder='Street address' required />
                <Input  size={"sm"} borderRadius={10} placeholder='Address Line 2' required />
                <Flex gap={{base:0,md:5,lg:5}} flexDirection={{base:"column",md:"row"}} > 
                <Input  size={"sm"} borderRadius={10} placeholder='Street address' required />
                <InputGroup size='sm'>
   
    <Input  placeholder='State' />
<Menu>
  <MenuButton  >
     <InputRightAddon children={<TriangleDownIcon/>} />
  </MenuButton>
  <MenuList>
    <MenuItem>Bihar</MenuItem>
    <MenuItem>Jharkhand</MenuItem>
   
  </MenuList>
</Menu></InputGroup>
<Input  size={"sm"} borderRadius={10} placeholder='Street address' required />
                </Flex>
                </Stack>
              </FormControl>
             
      </Stack>
    </AccordionPanel>
  </AccordionItem>

</Accordion>

</Box>

<Box w={{base:"90vw",lg:"75vw"}} m={"auto"} pb={10}>
<Accordion  allowToggle >
  <AccordionItem>
    <h2>
      <AccordionButton >
        <Box  pl={"10px"} id='hdr' flex='1' textAlign='left'>
          Outlet POC Details
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel  >
        <Stack id='bdy' >

             
        <Flex gap={{base:0,md:5,lg:7}} flexDirection={{base:"column",md:"column",lg:"row"}}>
        <Box flex="2.5">
             <FormControl  id="locality" isRequired>
                <FormLabel>Name</FormLabel>
                <Input   size={"sm"}  borderRadius={10} placeholder='Andheri west' required />
              </FormControl>   
              </Box>
              <Box flex="2">
              <FormControl id="phone" isRequired>
                <FormLabel>Email ID</FormLabel>
                <Input   size={"sm"} borderRadius={10} placeholder='0123456789' required />
              </FormControl> 
              </Box>
              <Box flex="1.5">  
              <FormControl id="phone" isRequired>
                <FormLabel>Phone No.</FormLabel>
                <Input   size={"sm"} borderRadius={10} placeholder='0123456789' required />
              </FormControl>   
              </Box>
             </Flex>
  
             
      </Stack>
    </AccordionPanel>
  </AccordionItem>

</Accordion>

</Box>

<Box w={{base:"90vw",lg:"75vw"}} m={"auto"} pb={10}>
<Accordion  allowToggle >
  <AccordionItem>
    <h2>
      <AccordionButton >
        <Box  pl={"10px"} id='hdr' flex='1' textAlign='left'>
          Business Owner Details
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel  >
        <Stack id='bdy' >
              <FormControl id="Location" isRequired>
                <FormLabel>Name</FormLabel>
                <Input  size={"sm"} borderRadius={10} placeholder='Exact location as on google maps' required />
              </FormControl>
             <FormControl id="locality" isRequired>
                <FormLabel>Email</FormLabel>
                <Input  size={"sm"} borderRadius={10} placeholder='Andheri west' required />
              </FormControl>   
              <FormControl id="phone" isRequired>
                <FormLabel>Phone No.</FormLabel>
                <Input  size={"sm"} borderRadius={10} placeholder='0123456789' required />
              </FormControl>   
             
      </Stack>
    </AccordionPanel>
  </AccordionItem>

</Accordion>

</Box>


</>  )
}
