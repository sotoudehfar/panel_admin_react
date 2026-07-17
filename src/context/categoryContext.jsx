import { createContext, useState } from "react";

export const CategoryContext = createContext({

    editId : null,
    SetEditId : ()=>{}
})

export const CategoryContextContainer =({children})=>{
    const [editId, SetEditId]=useState()
    return(
        <CategoryContext.Provider value={{
            editId,
            SetEditId
        }}>
            {children}
        </CategoryContext.Provider>
    )
}
