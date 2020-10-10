import React, { Component } from 'react';

const TableHeader = () => {
    return (
        <thead style={{backgroundColor:"#AAAAAA", textAlign:"center", fontFamily:"Times New Roman" }} >
            <tr>
                <th style={{width: "500px"}}>Nama</th>
                <th style={{width: "300px"}}>Harga</th>
                <th style={{width: "300px"}}>Berat</th>
            </tr>
        </thead>
    )
}

const TableBody = props => {
    const rows = props.dataHargaBuah.map((rows, index) => {
      return (
        <tr key={index} >
          <td >{rows.nama}</td>
          <td >{rows.harga}</td>
          <td >{rows.berat/1000}kg</td>
        </tr>
      )
    });
    
    return (
      <tbody style={{backgroundColor:"#FF7F50", fontFamily:"Times New Roman" }}>{rows}</tbody>
    )
  }
  
  class Table extends Component {
    render() {
      const { dataHargaBuah } = this.props
      
      return (
        <table style={{margin: "0 auto", border: "1px solid"}}>
          <TableHeader />
          <TableBody dataHargaBuah={dataHargaBuah} />
        </table>
      )
    }
  }
  

export default Table