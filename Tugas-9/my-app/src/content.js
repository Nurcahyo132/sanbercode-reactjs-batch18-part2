import React, { Component } from 'react';
class Content extends Component {
  render() {
    return (
      <div>
        <p>Daftar Item</p>
        <p><input type = "checkbox"></input>Semangka</p>
        <p><input type = "checkbox"></input>Jeruk</p>
        <p><input type = "checkbox"></input>Nanas</p>
        <p><input type = "checkbox"></input>Salak</p>
        <p><input type = "checkbox"></input>Anggur</p>

        <p><input type="submit" name="Kirim" value="Kirim" /></p>
      </div>
    );
  }
}
export default Content;