
export default function convertDataToFormdata(dataObj) {
    const formData = new FormData()
    for (const key in dataObj[key]){
        formData.append(key, dataObj[key])
    }
return formData

}
