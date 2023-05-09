import request from '../http-common'
import axios from "axios";

export const findAll = () => {
    return request.get('/posts')
}

export const save = (blog) => {
    return request.post("/posts", {...blog})
}

const postService = {
    findAll,
    save
}

export default postService;