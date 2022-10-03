import { Footer } from 'antd/lib/layout/layout';
import React, { useEffect } from 'react';
import Forminput from '../../component/body/Forminput';
import Introduce1 from '../../component/body/Introduce1';
import Sale from '../../component/body/Sale';
import Saleoff from '../../component/body/Saleoff';
import Slide from '../../component/body/Slide';
import Titleproduct from '../../component/body/Titleproduct';
import Videoproduct from '../../component/body/Video';
import Header from '../../component/header/Header';
import Footers from '../../component/footer/Footer';
import DisplayTable from '../table/displaytable';
import ToggleVisibility from './ToggleVisibility';
import DisplaytableProduct from '../table/displaytableProduct';
// import {getMenuApi,getIconApi,getLogoApi} from '../api/menuApi'

export default function Edit() {
  return (
    <div>
        <Header />
        <ToggleVisibility>
        <DisplayTable/>
        </ToggleVisibility>
        <Slide/>
        <Sale/> 
        <Titleproduct/>
        <ToggleVisibility>
        <DisplaytableProduct/>
        </ToggleVisibility>
        <Videoproduct/>
        <Saleoff/>
        <Introduce1/>
        <Forminput/>
        <Footers/>
    </div>
  )
}

