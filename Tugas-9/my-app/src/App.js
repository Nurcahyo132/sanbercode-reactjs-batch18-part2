import React from 'react';
import './App.css';

function App(){
  return (
    <div className = "App">
      
        <h1 >Form Pembelian Buah</h1>
        <p><label style={{marginLeft:10}} ><strong>Nama Pelanggan</strong></label>
        <input style={{marginLeft:100}} type = "text" name = "Nama Pelanggan"></input></p>
        <p style={{position:"fixed", paddingTop:120, paddingLeft:10}}><strong>Daftar Item</strong></p>
        <p><input style={{marginLeft:230}} type = "checkbox"></input>Semangka</p>
        <p><input style={{marginLeft:230}} type = "checkbox"></input>Jeruk</p>
        <p><input style={{marginLeft:230}} type = "checkbox"></input>Nanas</p>
        <p><input style={{marginLeft:230}} type = "checkbox"></input>Salak</p>
        <p><input style={{marginLeft:230}} type = "checkbox"></input>Anggur</p>
        <p><button style={{borderRadius:50, margintop:50, marginLeft:10}} type ="submit" class="submit-btn">Kirim</button></p>
     </div>
  )
}

export default App;
