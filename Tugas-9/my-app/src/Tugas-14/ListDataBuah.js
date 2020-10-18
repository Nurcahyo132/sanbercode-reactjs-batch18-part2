import React, { useContext, useState } from "react";
import { DataHargaContext } from './DataHargaContext';
import axios  from "axios";

const ListDataBuah = () =>{
    const [dataBuah, setDaftarBuah] = useContext(DataHargaContext);
    const [input, setInput] = useState({
        name: "",
        price: "",
        weight: 0,
        id: null,
    });

    const handleEdit = (event) => {
        let idDataBuah = parseInt(event.target.value);

        axios
            .get(`http://backendexample.sanbercloud.com/api/fruits/${idDataBuah}`)
            .then((res) => {
                let dataBuah = res.data;
                setInput({
                    name: dataBuah.name,
                    price: dataBuah.price,
                    weight: dataBuah.weight,
                    id: idDataBuah,
                });
            });
    };

    const handleDelete = (event) =>{
        let idDataBuah = parseInt(event.target.value);
        axios
         .delete(`http://backendexample.sanbercloud.com/api/fruits/${idDataBuah}`)
         .then(()=>{
             setDaftarBuah(null);
         });
    };

    return(
        <div className="container-buah-context">
        <table className="table-buah-context">
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
            {dataBuah !== null &&
              dataBuah.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.weight / 1000} kg</td>
                    <td>
                      <button
                        onClick={handleEdit}
                        value={item.id}
                        className="btn-context"
                      >
                        Edit
                      </button>
                      <button
                        onClick={handleDelete}
                        value={item.id}
                        className="btn-context context-hapus"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    )
}

export default ListDataBuah