import React from "react";
import { DataHargaProvider} from "./DataHargaContext";
import FormDataBuah from "./FormDataBuah";
import ListDataBuah from "./ListDataBuah";

const DataHargaBuah = () => {
    return (
        <DataHargaProvider>
            <ListDataBuah />
            <FormDataBuah />
        </DataHargaProvider>
    )
}

export default DataHargaBuah;