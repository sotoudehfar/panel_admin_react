import httpService from "./httpService";




export const  LoginService = (values)=> {
  return (
    httpService("/auth/login" , "post", {
   ...values,
    remember : values.remember ? 1 : 0,
}) 
  )
}

export const LogoutService = (headers)=> {
  return (
    httpService("/auth/logout" , "get")
)}

export const getUserServices =()=>{
    return httpService("/auth/user" , "get")
}