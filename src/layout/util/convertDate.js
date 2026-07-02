import jMoment from "jalali-moment"

export const convertDate = (data)=>{
    return jMoment(data).format("jYYYY/jMM/jDD")
}