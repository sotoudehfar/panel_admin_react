import httpService from "./httpService"

export const getCategoriesAttrServices =  (categoryId)=>{
    return httpService(`/admin/categories/${categoryId}/attributes` , 'get')
}