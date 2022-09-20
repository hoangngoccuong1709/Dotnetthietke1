import { Footer } from 'antd/lib/layout/layout';
import React from 'react';
import Forminput from '../../component/body/Forminput';
import Introduce1 from '../../component/body/Introduce1';
import Sale from '../../component/body/Sale';
import Saleoff from '../../component/body/Saleoff';
import Slide from '../../component/body/Slide';
import Titleproduct from '../../component/body/Titleproduct';
import Videoproduct from '../../component/body/Video';
import Header from '../../component/header/Header';
import Footers from '../../component/footer/Footer';
import tableMenu from '../table/displaytable'
import {ReactTable} from 'react-table';
import DisplayTable from '../table/displaytable'

export default function Edit() {
  
  const handleEdit = ()=>{
      
  }
  return (
    <div>
        <Header />
        <button onClick={handleEdit()} style={{position:'absolute'}}>Edit Header</button>
        <DisplayTable/>
        <Slide/>
        {/* <Sale/> 
        <Titleproduct/> 
        <Videoproduct/>
        <Saleoff/>
        <Introduce1/>
        <Forminput/> */}
        <Footers/>
    </div>
  )
}
function showdata(){
  
}

