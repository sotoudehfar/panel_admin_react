import httpService from "./httpService"

export const getAllGuaranteeService = ()=>{
    return httpService("/admin/guarantees" , "get")
};


export const addNewGuaranteeService = (data) =>{
    return httpService("/admin/guarantees" , "post" , data);
};


export const editGuaranteeService = (guaranteeId, data) =>{
    return httpService(`/admin/guarantees/${guaranteeId}` , "put", data);
}

export const deleteGuaranteeServise = (guaranteeId) =>{
    return httpService(`/admin/guarantees/${guaranteeId}` , "delete");
}