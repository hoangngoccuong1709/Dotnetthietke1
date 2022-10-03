import React, { Component } from 'react';
import {delMenuApi} from '../api/menuApi'

export default class displaytable extends Component {
  constructor(props){
    super(props)
    this.state = {
      list:[]
    }
    this.callApi = this.callApi.bind(this)
    this.callApi();
  }
  callApi(){
    fetch("/api/header").then(
      (response)=>response.json()
    ).then((data)=>{
      console.log("data",data)
      this.setState({
        list:data
      })
    })
  }
  render() {
    let tb_data = this.state.list.map((item)=>{
      return(
        <tr key={item.idMenu}>
          <td>{item.idMenu}</td>
          <td>{item.nameMenu}</td>
          <td>{item.linkMenu}</td>
          <td>
            <button className='btn btn-danger' onClick={()=>delMenu(item.idMenu)}>REMOVE</button>
            <button className='btn btn-danger' >EDIT</button>
          </td>
        </tr>
      )
    })
    const delMenu = async (idMenu)=>{
      if (window.confirm('xóa sẽ không thể khôi phục,bạn chắc chắn muốn xóa không?')){
        await delMenuApi(idMenu);
      }
    }
    return (
      <div className='container'>
        <table className='table table-striped'>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>LINK</th>
          </tr>
        </thead>
          <tbody>
            {tb_data}
          </tbody>
        </table>
        <input
          type='text'
          name = 'name'
          placeholder = 'enter name'
        />
        <input
          type='text'
          name = 'link'
          placeholder = 'enter link'
        />
        <button type='submit' className='btn btn-danger'>ADD</button>
      </div>
    )
  }
}
