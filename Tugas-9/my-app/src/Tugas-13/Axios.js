import React, { useEffect, useState } from 'react';
import axios from "axios";

const Axios = () => {
    let daftarBuah = {
        id: 0,
        name: "",
        price: "",
        weight: 0
    }
    const [dataBuah, setDataBuah] = useState([])
    const [tempBuah, setTempBuah] = useState(daftarBuah)
    const [load, setLoad] = useState(false)

    const getData = () => {
        setLoad(true)
        axios.get('http://backendexample.sanbercloud.com/api/fruits')
            .then((res) => {
                setLoad(false)
                let data = res.data
                data = data.filter((e) => {
                    return e.weight > 0
                })
                setDataBuah(data)
            })
            .catch((err) => {
                setLoad(null)
            })
    }

    useEffect(() => {
        getData()
    }, [])

    const handleChange = (e) => {
        const id = e.target.id
        const value = e.target.value
        setTempBuah({ ...tempBuah, ...{ [id]: value } });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoad(true)
        if (tempBuah.name !== "") {
            if (tempBuah.id === 0) {
                axios.post("http://backendexample.sanbercloud.com/api/fruits", tempBuah)
                    .then((res) => {
                        if (res.status === 201) {
                            getData()
                            setLoad(false)
                            setTempBuah(daftarBuah)
                        }
                    })
                    .catch((err) => {
                        setLoad(null)
                    })
            } else {
                axios.put(`http://backendexample.sanbercloud.com/api/fruits/${tempBuah.id}`, tempBuah)
                    .then((res) => {
                        if (res.status === 200) {
                            getData()
                            setLoad(false)
                            setTempBuah(daftarBuah)
                        }
                    })
                    .catch((err) => {
                        setLoad(null)
                    })
            }
        } else {
            alert("Data Tidak Boleh Kosong!")
            setLoad(false)
        }
    }

    const handleEdit = (e) => {
        setTempBuah(dataBuah[e.target.value])
    }

    const handleRemove = (e) => {
        setLoad(true)
        const id = dataBuah[e.target.value].id
        axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${id}`)
            .then((res) => {
                if (res.data === "success") {
                    getData()
                    alert("Data Berhasil Dihapus")
                }
            })
            .catch((err) => {
                alert("Gagal Hapus Data")
            })
    }

    return (<>
        <h1 style={{ textAlign: "center" }}> Tabel Harga Buah</h1>
        <table style={{ border: "1px solid", width: "40%", margin: "0 auto" }}>
            <thead style={{ background: "#aaa" }}>
                <tr>
                    <th>Nama</th>
                    <th>Harga</th>
                    <th>Berat</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody style={{ background: "coral" }}>
                {load && (<td colSpan="6">Processing data</td>)}
                {load === null && (<td colSpan="6">Fatal Eror</td>)}
                {dataBuah !== null && dataBuah.map((el, index) => {
                    return (<>
                        <tr>
                            <td>{el.name}</td>
                            <td>Rp. {el.price}</td>
                            <td>{el.weight / 1000} kg</td>
                            <td style={{ textAlign: 'center' }}><button value={index} onClick={handleEdit}>Edit</button>  <button value={index} onClick={handleRemove}>Delete</button></td>
                        </tr>
                    </>)
                })}
            </tbody>
        </table>
        <div id="form" style={{ width: "40%", margin: "0 auto" }}>
            <h2>Form Tambah Buah</h2>
            <form className="input">
                <div className="form-group" >
                    <label htmlFor="#nama">Nama Buah</label>
                    <div className="input-wrap">
                        <input type="text" id="name" name="nama" value={tempBuah.name} onChange={handleChange} required />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="#harga">Harga</label>
                    <div className="input-wrap">
                        <input type="number" id="price" value={tempBuah.price} onChange={handleChange} required />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="#berat">Berat (g)</label>
                    <div className="input-wrap">
                        <input type="number" id="weight" onChange={handleChange} value={parseInt(tempBuah.weight)} required />
                    </div>
                </div>
                <span><button onClick={handleSubmit}>Submit</button></span>
            </form>
        </div>
    </>)
}

export default Axios 