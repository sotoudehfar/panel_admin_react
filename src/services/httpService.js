
import axios from "axios"
import config from './config.json'
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