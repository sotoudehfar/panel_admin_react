
import axios from "axios"
import config from './config.json'
import { AlertForm } from "../layout/util/AlertForm";

axios.interceptors.response.use((res)=>{
    console.log(res);
    if (res.status!== 200 && res.status!==201){
        AlertForm("مشگل!", res.data.message , "warning");
    }
    return res
},(error)=>{
   AlertForm(error.response.status,"مشگلی  رخ داده است","error")
    return Promise.reject(error)
}
)



// این قمست کد برای ساخت یک متد است 
export const httpService =(url, method, data=null , headers)=>{
const tokeninfo =  JSON.parse(localStorage.getItem('loginToken'))
    return axios({
    url:config.onlienApi+url,
    method,
    data,
    headers:{
        Authorization:tokeninfo ? `Bearer ${tokeninfo.token}` : null,
        "Content-Type" : "application/json"
    }
 })
}
export default httpService