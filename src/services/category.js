import httpService from "./httpService";


export const getCategoriesServices =  (id=null)=>{
    return httpService(`/admin/categories${id ? `?parent=${id}` : ''}` , 'get')
}