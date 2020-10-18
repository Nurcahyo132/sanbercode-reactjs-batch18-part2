import React, { useContext, useState } from 'react';
import { DataHargaContext } from './DataHargaContext';
import axios from 'axios';

const FormDataBuah = () => {
    const [dataBuah, setDaftarBuah] = useContext(DataHargaContext);
    const [input, setInput] = useState({
        name: "",
        price: "",
        weight: 0,
        id: null,
    });

    const handleChange = (event) => {
        let typeOfInput = event.target.name;
        let value = event.target.value;

        switch (typeOfInput){
            case "name": {
                setInput({ ...input, name: value });
                break;
            }

            case "price": {
                setInput ({ ... input, price: value });
                break;
            }

            case "weight": {
                setInput({ ...input, weight: value});
                break;
            }
            default: {
                break;
            }
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        let name = input.name;
        let price = input.price.toString();

        if (input.id === null) {
            axios
            .post(`http://backendexample.sanbercloud.com/api/fruits`, {
                name,
                price,
                weight: input.weight,
            })
            .then((res)=>{
                setDaftarBuah([
                    ...dataBuah,
                    { id: res.data.id, name, price, weight: input.weight},
                ]);
            });
        } else {
            axios
            .put(`http://backendexample.sanbercloud.com/api/fruits/${input.id}`,{
                name,
                price,
                weight: input.weight,
            })
            .then(() =>{
                let dataBuah = dataBuah.find((el) => el.id === input.id);
                dataBuah.name = name;
                dataBuah.price = price;
                dataBuah.weight = input.weight;
                setDaftarBuah([...dataBuah]);
            });
        }
        setInput({ name: "", price:"", weight: 0, id: null});
    };

    return (
        <div className="container-form-context">
        <form onSubmit={handleSubmit} className="form-buah-context">
  
            <input
              onChange={handleChange}
              type="text"
              name="name"
              placeholder="Name"
              required
              value={input.name}
              className="input-context"
            />
  
            <input
              onChange={handleChange}
              type="text"
              name="price"
              placeholder="Price"
              required
              value={input.price}
              className="input-context"
            />
  
            <input
              onChange={handleChange}
              type="number"
              name="weight"
              placeholder="Weight"
              required
              value={input.weight}
              className="input-context"
            />
          <button className="btn-form-context">Submit</button>
        </form>
      </div> 
    );
};

export default FormDataBuah;