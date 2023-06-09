import React, { useEffect } from 'react'
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
import PreNav from '../Pre-nav/PreNav'
import Navbar from '../Navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { GETDATA } from '../../redux/order/order.action'

export default function Orders() {
  const dispatch = useDispatch()
const {data}=useSelector(store=>store.order)
console.log(data)
  useEffect(()=>{
dispatch(GETDATA())
  },[])
  return (
    <>
      <PreNav/>
      <Navbar/>

{data.orderList?.map((el)=>(
 <Accordion  w={{base:"90vw",lg:"80vw"}} m={"auto"} allowToggle>

 <AccordionItem bgColor={"#FF8181"} borderRadius={7}>
   <h2>
     <AccordionButton>
       {/* <Box flex='1' color="white"  >
         Section 1 title
       </Box>
     <Box>hjgj</Box> */}
     <Stack w={"100%"}>
     <Flex w={"99%"} margin={"auto"} justifyContent={"space-between"}>
       <h2 id='order_No'>{el.orderNumber}</h2>
       <h2 id='order_Price'>Rs {el.total}</h2>
       </Flex>
     <Flex  w={"99%"} margin={"auto"} justifyContent={{base:"center",md:"space-between",lg:"space-between"}}  >
       <Box w={"auto"} h={"23px"} marginLeft={"7px"}>
           <Flex w={"auto"} h={"100%"} justifyContent={{base:"center",md:"space-between",lg:"space-between"}} gap={"10px"} >
              
           <Box w={"auto"} h={"100%"} >
               <Flex justifyContent={"space-between"} gap={1}>
                 <h5 id='order_date'>Order Date & Time :</h5>
                 <h3 id='order_time'> {new Date(el.createdAt).toLocaleString('en-GB', { dateStyle: 'short', timeStyle: 'short' })} </h3>
               </Flex>
           </Box>
           <Box w={"auto"} h={"100%"} display={{base:"none",md:"block",lg:"block"}}><Flex justifyContent={"space-around"} gap={1}>
                 <h5 id='order_date'>Customer Name : </h5>
                 <h3 id='order_time'> { el.userData.name}</h3>
               </Flex></Box>
           
              
              
              </Flex>
       </Box>
       <Box w={"auto"} h={"23px"} marginRight={"-7px"} display={{base:"none",md:"block",lg:"block"}}><h5 id='orderdate'>Delivery Order</h5></Box>
       </Flex>  
     </Stack>
     </AccordionButton>
   </h2>




   <AccordionPanel padding={"10px"} style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"}} borderRadius={"0 0 20px 20px"} bgColor={"white"}>
   <Tables data={el}/>
   </AccordionPanel>
 </AccordionItem>


 
</Accordion>
))}
   



</>

  )
}
