import axios from "axios";

export const findAll = async () => {
    try {
        const result = await axios.get('http://localhost:3001/customer');
        return result.data;
    } catch (arr) {
        console.log(arr)
    }
}

export const findAllCustomerType = async () => {
    try {
        const result = await axios.get('http://localhost:3001/customerType');
        return result.data;
    } catch (arr) {
        console.log(arr)
    }
}

export const findAllGender = async () => {
    try {
        const result = await axios.get('http://localhost:3001/gender');
        return result.data;
    } catch (arr) {
        console.log(arr)
    }
}



export const remove = async (id) => {
    try {
        const result = await axios.delete(`http://localhost:3001/customer/${id}`)
        return result.data
    } catch (error) {
        return error
    }
}

export const create = async (values)=>{
    try {
        await axios.post('http://localhost:3001/customer', {...values})
    }catch (e){
        console.log(e)
    }
}

export const update = async (id, values) => {
    try {
        await axios.put(`http://localhost:3001/customer/${id}`, {...values})
    } catch (e) {
        console.log(e)
    }
}

export const findById = async (id) => {
    try {
        const result = await axios.get(`http://localhost:3001/customer/${id}`);
        return result.data;
    } catch (arr) {
        console.log(arr)
    }
}