//nada de lo que he hecho aqui es completamente valido, hay una confusion
import { createContext, useState } from "react"; 

export const DataContext = createContext()


export function DataContextProvider (){


    const [valor, setValor] = useState(0)

    

    return (
        <DataContext.Provider value={valor}>
            
        </DataContext.Provider>
    )
}