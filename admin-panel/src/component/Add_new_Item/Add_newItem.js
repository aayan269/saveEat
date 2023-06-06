import React from 'react'
import "./Add_newItem.css"
import { Box, Button, Checkbox, Flex, FormControl, FormLabel, Input, InputGroup, InputRightAddon, Stack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { CloseIcon } from '@chakra-ui/icons'
export default function AddItem() {
  return (
    <>
    <Box w={{base:"90vw",lg:"80vw"}}  m={"auto"}  display={"flex"} justifyContent={"space-between"} alignItems={"center"}  h={"70px"}>

    <h2  className='btt'>Add New Item</h2>
    <Link to="/editmenu"> <CloseIcon marginLeft={{base:0,lg:"150px"}}/></Link>
    
    </Box>

<Box w={{base:"90vw",lg:"80vw"}} m={"auto"} border={"0.5px solid rgba(133, 216, 217, 0.2)"} borderRadius={"10px"} boxShadow={"0px 1px 10px rgba(0, 0, 0, 0.1)"}>
   
<Flex padding={"15px 15px 0px 15px"} gap={"10px"} flexDirection={{base:"column",md:"row"}}>   
              <FormControl id="Item name" isRequired>
                <FormLabel>Item Name</FormLabel>
                <Input type="text" name="Item name" placeholder=" Item name" required />
              </FormControl>    
              
      </Flex>

      <Flex padding={"15px 15px 0px 15px"} gap={"10px"} flexDirection={{base:"column",md:"row"}}>   
              <FormControl id="Image" isRequired>
                <FormLabel>Image</FormLabel>
                <InputGroup size='sm'>
    
            <Input type='file' name='file' id='file' placeholder='mysite' />
            <InputRightAddon children='submit' />
               </InputGroup>
              </FormControl>    
      </Flex>      

      <Flex padding={"15px 15px 0px 15px"} w={"70%"} gap={"10px"} flexDirection={{base:"column",md:"row"}}>   
              <FormControl id="food type" isRequired>
                <FormLabel>Food Type</FormLabel>
                <Stack spacing={5} direction='row'>
              <Checkbox  colorScheme='green' >
                Veg
              </Checkbox>
              <Checkbox colorScheme='green' >
                Non-veg
              </Checkbox>
               </Stack>    
              </FormControl>    
              <FormControl id="tax type" isRequired>
                <FormLabel>Tax Type</FormLabel>
                <Stack spacing={5} direction='row'>
               <Checkbox colorScheme='green'>
                 Taxable
               </Checkbox>
             <Checkbox colorScheme='green' >
                  MRP
              </Checkbox>
            </Stack>         
             </FormControl>    
                
      </Flex>

      <Flex padding={"15px 15px 0px 15px"} gap={"10px"} flexDirection={{base:"column",md:"row"}}>   
              <FormControl id="taxRate" isRequired>
                <FormLabel>Tax Rate</FormLabel>
                <Input type="text" name="Tax rate" placeholder="Tax rate"  required />
              </FormControl>    
              <FormControl id="cuisine" isRequired>
                <FormLabel>Cuisine</FormLabel>
                <Input type="text" name="cuisine" placeholder="cuisine" required />
              </FormControl>    
              <FormControl id="sub cuisine" isRequired>
                <FormLabel>Sub Cuisine</FormLabel>
                <Input type="text" name="sub cuisine" placeholder="sub Cuisine" required />
              </FormControl>    
      </Flex>

      <Flex padding={"15px 15px 0px 15px"} gap={"10px"} flexDirection={{base:"column",md:"row"}}>   
              <FormControl id="weight" isRequired>
                <FormLabel>Weight in (gm)</FormLabel>
                <Input type="text" name="weight" placeholder="weight"  required />
              </FormControl>    
              <FormControl id="food price" isRequired>
                <FormLabel>Food Price</FormLabel>
                <Input type="text" name="food" placeholder="Price" required />
              </FormControl>    
              <FormControl id="variants" isRequired>
                <FormLabel>Variants</FormLabel>
                <Input type="text" name="variants" placeholder="Variants" required />
              </FormControl>    
      </Flex>

     <Box padding={"15px 15px 0px 15px"} w={"70%"}>
     <FormLabel >Window</FormLabel>
     <Flex padding={"15px 15px 0px 15px"}  gap={"10px"}>   
              <FormControl id="from" isRequired>
                <FormLabel>From</FormLabel>
                <Input type="time" name="from"  required />
              </FormControl>    
              <FormControl id="to" isRequired>
                <FormLabel>To</FormLabel>
                <Input type="time" name="to"   required />
              </FormControl>    
                
      </Flex>
      <FormControl>
              <Button
                //   onClick={handleSubmit}
                  bg={"green.400"}
                  color={"white"}
                  _hover={{
                    bg: "green.500",
                  }}
                  marginTop={"30px"}
                  w={"200px"}
                >
                  Add Item
                </Button>
              </FormControl>
     </Box>

</Box>
  

    </>
  )
}
