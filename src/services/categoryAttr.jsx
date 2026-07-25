import httpService from "./httpService"

export const getCategoriesAttrServices =  (categoryId)=>{
    return httpService(`/admin/categories/${categoryId}/attributes` , 'get')
}


export const addCategoryAttrService = (categoryId , data)=>{
    return httpService(`/admin/categories/${categoryId}/attributes` , 'post' , data)

}