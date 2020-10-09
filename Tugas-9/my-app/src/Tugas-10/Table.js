import React, {Component } from 'react';
import Table2 from './Table2';

class TampilBuah extends Component {
  render() {
    let dataHargaBuah = [
      {
        nama: "Semangka",
        harga: 10000,
        berat: 1000
      },
      {
        nama: "Anggur",
        harga: 40000,
        berat: 500 
      },
      {
        nama: "Strawberry",
        harga: 30000,
        berat: 400
      },
      {
        nama: "Jeruk",
        harga: 30000,
        berat: 1000
      },
      {
        nama: "Mangga",
        harga: 30000,
        berat: 500
      }
   ]
    
    return (
      <div className="container">
        <h1 style={{textAlign: "center", fontFamily: "Times New Roman"}}>Tabel Harga Buah</h1>
        <Table2 dataHargaBuah={dataHargaBuah} />
      </div>
    )
  }
}

export default TampilBuah