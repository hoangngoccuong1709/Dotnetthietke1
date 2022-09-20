import React, { Component } from 'react';

export default class displaytable extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      list:[]
    }
    this.callApi =this.callApi.bind(this);
    this.callApi();
  }
  callApi(){
    fetch(`/api/menu`)
    .then(res => res.json())
    .then((data)=>{
      console.log('tbldata',data)
      this.setState({
        list:data.data
      })
      console.log('res',this.state.list)
    })
  }
  
  render() {
    let tb_data = this.state.list?.map((item)=>{
      return(
        <tr key={item.idMenu}>
          <td>{item.idMenu}</td>
          <td>{item.nameMenu}</td>
          <td>{item.linkMenu}</td>
        </tr>
      )
    })
    return (
      <div>
      hello
        <table>
          <tbody>
            {tb_data}
            {console.log(tb_data)}
          </tbody>
        </table>
      </div>
    )
  }
}
