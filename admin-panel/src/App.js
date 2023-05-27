import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Orders from './component/Orders/Orders';
import PreNav from './component/Pre-nav/PreNav';
import MenuPage from './component/Menu/MenuPage';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import Editmenu from './component/editMenu/editmenu';
import UpdateItem from './component/updateItem/UpdateItem';
import AddItem from './component/Add_new_Item/Add_newItem';
import Ongoing_discount from './page/discount/Ongoing_discount';
import Category from './page/category/Category';
import Setting from './page/setting/Setting';
import BrandSetting from './page/BrandSetting/BrandSetting';
function App() {
  return (
    <div className="App">
      <PreNav/>
      <Navbar/>
      <br/>     
      <br/>
      <br/>
      {/* <Orders/> */}
      {/* <Orders/> */}
      <Routes>
        <Route path="/" element={<MenuPage/>} />
        <Route path="/editmenu" element={<Editmenu/>} />
        <Route path="/updateItem" element={<UpdateItem/>} />
        <Route path="/addItem" element={<AddItem/>} />
        <Route path="/discount" element={<Ongoing_discount/>} />
        <Route path="/category" element={<Category/>} />
        <Route  path="/setting" element={<Setting/>} />
        <Route  path="/brand_setting" element={<BrandSetting/>} />


      </Routes>


{/* 
<TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Thead w={"100vw"} border={"1px solid"}>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Thead>
    <Tbody border={"1px solid"}>
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
   
  </Table>
</TableContainer> */}
    </div>
  );
}

export default App;
