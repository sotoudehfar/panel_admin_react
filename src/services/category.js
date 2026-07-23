import httpService from "./httpService";


export const getCategoriesServices =  (id=null)=>{
    return httpService(`/admin/categories${id ? `?parent=${id}` : ''}` , 'get')
}

export const getSingleCategorieServices =  (id)=>{
    return httpService(`/admin/categories/${id}` , 'get')
}

export const editCategorieServices =  (id , data)=>{
    return httpService(`/admin/categories/${id}` , 'put' , data )
}

export const createNewCategoryService =(data)=>{
    // i can't sent image file in categry modal . i should use formdata by sent image file
    if (data.image) {
        let formdata = new FormData();
        formdata.append('parent_id',data.parent_id)
        formdata.append('title',data.title)
        formdata.append('description',data.description)
        formdata.append('image',data.image)
        formdata.append('is_active',data.is_active)
        formdata.append('show_in_menu',data.show_in_menu)
        data=formdata;
    }
    return httpService("/admin/categories",'post',data)
}
export const deleteCategoryServise  =(id)=>{
    return httpService(`/admin/categories/${id}` , 'delete');

}