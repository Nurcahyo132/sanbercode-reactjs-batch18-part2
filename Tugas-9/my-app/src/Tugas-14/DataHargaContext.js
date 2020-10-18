import React, { useEffect, createContext, useState } from 'react';
import axios from "axios";

export const DataHargaContext = createContext();

export const DataHargaProvider = (props) =>{
    const [dataBuah, setDaftarBuah] = useState(null);

    useEffect(() =>{
        if (dataBuah === null){
            axios
            .get(`http://backendexample.sanbercloud.com/api/fruits`)
            .then((res)=>{
                setDaftarBuah(
                    res.data.map((el)=>{
                        return {
                            id: el.id,
                            nama: el.name,
                            price: el.price,
                            weight: el.weight,
                        };
                    })
                );
            });
        }
    }, [dataBuah]);

    return (
        <DataHargaContext.Provider value ={[dataBuah, setDaftarBuah]}>
            {props.children}
        </DataHargaContext.Provider>
    );
};