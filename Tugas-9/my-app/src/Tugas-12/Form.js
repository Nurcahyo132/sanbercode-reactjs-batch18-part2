import React, {Component} from "react"


class Form extends Component{

  constructor(props){
    super(props)
    this.state ={
     dataHargaBuah : [
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
    ],
     inputName : "",
     inputHarga: "",
     inputBerat:  0,
        
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(event){
    let index = event.target.value
    let newdataHargaBuah = this.state.dataHargaBuah
    let editeddataHargaBuah = newdataHargaBuah[this.state.indexOfForm]
    newdataHargaBuah.splice(index, 1)

    if (editeddataHargaBuah !== undefined){
      // array findIndex baru ada di ES6
      var newIndex = newdataHargaBuah.findIndex((el) => el === editeddataHargaBuah)
      this.setState({dataHargaBuah: newdataHargaBuah, indexOfForm: newIndex})
      
    }else{
      
      this.setState({dataHargaBuah: newdataHargaBuah})
    }
    
  }
  
  handleEdit(event){
    let index = event.target.value
    let dataHargaBuah = this.state.dataHargaBuah[index]
    this.setState({
      inputName: dataHargaBuah.nama,
      inputHarga: dataHargaBuah.harga,
      inputBerat: dataHargaBuah.berat,
      indexOfForm: index
    })
  }

  handleChange(event){
    let typeOfInput = event.target.name
    switch (typeOfInput){
      case "name":
      {
        this.setState({inputName: event.target.value});
        break
      }
      case "harga":
      {
        this.setState({inputHarga: event.target.value});
        break
      }
      case "berat":
      {
        this.setState({inputBerat: event.target.value});
          break
      }
    default:
      {break;}
    }
  }

  handleSubmit(event){
    // menahan submit
    event.preventDefault()

    let nama = this.state.inputName
    let harga = this.state.inputHarga.toString()
    let berat = this.state.inputBerat


    let newdataHargaBuah = this.state.dataHargaBuah
    let index = this.state.indexOfForm
    
    if (index === -1){
      newdataHargaBuah = [...newdataHargaBuah, {nama, harga, berat}]
    }else{
      newdataHargaBuah[index] = {nama, harga, berat}
    }

    this.setState({
      dataHargaBuah: newdataHargaBuah,
      inputName: "",
      inputHarga: "",
      inputBerat: 0
    })

  }
  render(){
    return(
      <>
        <h1>Daftar Harga Buah</h1>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Harga</th>
              <th>Berat</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
              {
                this.state.dataHargaBuah.map((item, index)=>{
                  return(                    
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{item.nama}</td>
                      <td>{item.harga}</td>
                      <td>{item.berat/1000} kg</td>
                      <td>
                        <button onClick={this.handleEdit} value={index}>Edit</button>
                        &nbsp;
                        <button onClick={this.handleDelete} value={index}>Delete</button>
                      </td>
                    </tr>
                  )
                })
              }
          </tbody>
        </table>
        {/* Form */}
        <h1 style={{textAlign:"center"}}>Form Daftar Harga Buah</h1>
        <div style={{width: "50%", margin: "0 auto", display: "block"}}>
          <div style={{border: "1px solid #aaa", padding: "20px",borderRadius: "8px"}}>
            <form onSubmit={this.handleSubmit}>
              <label style={{float: "left"}}>
                Nama:
              </label>
              <input style={{float: "right"}} type="text" required name="name" value={this.state.inputName} onChange={this.handleChange}/>
              <br/>
              <br/>
              <label style={{float: "left"}}>
                Harga:
              </label>
              <input style={{float: "right"}} type="text" required name="harga" value={this.state.inputHarga} onChange={this.handleChange}/>
              <br/>
              <br/>
              <label style={{float: "left"}}>
                Berat (dalam gram):
              </label>
              <input style={{float: "right"}} type="number" required name="berat" value={this.state.inputBerat} onChange={this.handleChange}/>
              <br/>
              <br/>
              <div style={{width: "100%", paddingBottom: "20px"}}>
                <button style={{ float: "right"}}>submit</button>
              </div>
            </form>
          </div>
        </div>
      </>
    )
  }

}

export default Form