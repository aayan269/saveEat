import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Input,
    FormLabel,
    FormControl,
    Table,
    Thead,
    Tr,
    Td,
    Th,
    Tbody,
    TableContainer,
    Checkbox,
    Box,
    Flex,
    InputGroup,
    InputRightAddon,
  } from '@chakra-ui/react'
import "./Bulk.css"
export default function BulkUpload() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
    <Button  onClick={onOpen} colorScheme='green' size='md' className='btt'>Bulk Upload</Button>
        {/* <Button onClick={onOpen} colorScheme='green' size='md' className='btt'></Button> */}

        <Modal w={{base:"90vw",lg:"100vw"}}   isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent w={"100vw"} m={"auto"}  >
            <ModalHeader>
            <FormControl id="Menu name" isRequired>
                <FormLabel >Add Bulk Items</FormLabel>
               <p id='bulk'>Please upload your menu excel here for bulk upload</p>
              </FormControl>  
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody padding={"1em 2em 2em"}  >
            <Flex padding={"15px 15px 0px 15px"} gap={"10px"} flexDirection={{base:"column",md:"row"}}>   
            <FormControl id="excel" isRequired>
                <FormLabel ><h1 id='bulk'>Uplaod Excel</h1></FormLabel>
                <InputGroup size='sm'>
    
            <Input type='file' name='file' id='file' placeholder='mysite' />
            <InputRightAddon w={"55%"} children='choose' />
               </InputGroup>
              </FormControl>      
              <FormControl id="uploaded" >
                <FormLabel><h1 id='bulk'>No of Items Uploaded</h1></FormLabel>
                <Input type="text" name="items" placeholder="placeholder text..." isDisabled />
              </FormControl>    
              <FormControl id="sub cuisine" >
                <FormLabel><h1 id='bulk'>No of Image Uploaded</h1></FormLabel>
                <Input type="text" name="sub cuisine" placeholder="placeholder text..." isDisabled />
              </FormControl>    
      </Flex>
            </ModalBody>
  
            <ModalFooter>
            
              <Button colorScheme='green'>Submit</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}
