import axios from "axios";

export const findAll = () => {
    return axios.get("http://localhost:8080/product")
}

export const removeProduct = (id) => {
    return axios.delete(`http://localhost:8080/product/${id}`)
}



export const searchByProduct = async (name, productType) => {
    try {
        let url = `http://localhost:8080/product?name_like=${name}`;
        if(productType) {
            url += `&productType=${productType}`
        }
        debugger

        const rs = axios.get(url)
        console.log(name,productType)
        return (await rs).data
    }catch (er){
        console.log(er)
    }
}

export const updateProduct = (id, values) => {
    return axios.patch(`http://localhost:8080/product/${id}`, {...values})
}

export const findById = (id) => {
    return axios.get(`http://localhost:8080/product/${id}`)
}