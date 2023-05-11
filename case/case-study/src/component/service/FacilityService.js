import axios from "axios";

export const findAll = async () => {
    try {
        const result = await axios.get('http://localhost:3001/facilitiesList');
        return result.data;
    } catch (arr) {
        console.log(arr)
    }
}

export const remove = async (id) => {
    try {
         await axios.delete(`http://localhost:3001/facilitiesList/${id}`)
    } catch (error) {
        return error
    }
}

export const create = async (values)=>{
    try {
        await axios.post('http://localhost:3001/facilitiesList', {...values})
    }catch (e){
        console.log(e)
    }
}

export const update = async (id, values) => {
    try {
        await axios.patch(`http://localhost:3001/facilitiesList/${id}`, {...values})
    } catch (e) {
        console.log(e)
    }
}

export const findById = async (id) => {
    try {
        const result = await axios.get(`http://localhost:3001/facilitiesList/${id}`);
        return result.data;
    } catch (arr) {
        console.log(arr)
    }
}

