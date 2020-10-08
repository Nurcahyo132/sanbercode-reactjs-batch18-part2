import React, { Component } from 'react';
class header extends Component {
  render() {
    return (
      <div className = "header">
        <h1>Form Pembelian Buah</h1>
        <p><label>Nama Pelanggan</label>
        <input type = "text" name = "Nama Pelanggan"></input></p>
      </div>
    );
  }
}
export default header;