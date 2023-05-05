import axios from "axios";

export const getBlog = () => {
    return axios.get(`http://localhost:3000/posts`)
}

export const createBlog = (values) =>{
    return axios.post(`http://localhost:3000/posts`,{...values})
    alert("create success")
}

export const removeBlog = (id) => {
    return axios.delete(`http://localhost:3000/posts/${id}`)
    alert("Delete Success");
}

export const findById = (id) => {
    return axios.get(`http://localhost:3000/posts/${id}`)
}

export const updateBlog = (id, values) => {
    return axios.patch(`http://localhost:3001/posts/${id}`, {...values})
}