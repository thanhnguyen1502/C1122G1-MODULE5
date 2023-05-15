import axios from "axios";

export const findAllProductType = () => {
    return axios.get("http://localhost:8080/productType")
}