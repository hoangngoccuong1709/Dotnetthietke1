import { Button, Form, Input, InputNumber, Popconfirm, Space, Table, Typography } from 'antd';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {v4 as uuidv4} from 'uuid';
import 'antd/dist/antd.css';
import { loadPosts } from '../../redux/actions/postAcction';
import { allProduct, selector } from '../../redux/selector/selector';
import {delProductApi} from '../api/productApi'
 
export default function DisplaytableProduct() {
  const [product,setProduct] = useState([]);  
  const [form] = Form.useForm();

  const data = useSelector(allProduct);
  const dispatch = useDispatch();
    useEffect (()=>{
    dispatch(loadPosts());
    setProduct(data)
  },[]);
  
  const HandleDelete =async (idproduct) =>{
    await delProductApi(idproduct)
  }
    const columns =
    [{
      title:'id',
      dataIndex: 'idproduct',
      key:'idproduct',
      edittable:true
    },
    {
      title:'name',
      dataIndex: 'nameProduct',
      key:'nameProduct',
      edittable:true
    },
    {
      title:'image',
      dataIndex: 'image',
      key:'image',
      edittable:true
    },
    {
      title:'title',
      dataIndex: 'title',
      key:'title',
      edittable:true
    },
    {
      title:'action',
      dataIndex: 'action',
      edittable:true,
      align:"center",
      render: (_ ,record) =>
      data.length >=1 ?(
        <Space>
        <Popconfirm
        title ='are you sure?'
        onClick={()=>HandleDelete(product.idproduct)}
        >
        <Button danger type='primary'>
        Delete
        </Button>
        </Popconfirm>
        <Button type='primary' onClick={console.log('edit')}>Edit</Button>
        </Space>
      ):null,
    }
]
  if(!product) {
    return (
        <div>
            No Data
        </div>
  )}
  return (
    <div key={product.idproduct}>
    <Button type='primari' onClick={console.log('add')}>Add</Button>
    <Form form={form} component={false}>
    <Table dataSource={product} columns={columns}/>
    </Form>
    </div>

  )
}

