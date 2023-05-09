import postService from "../../service/PostService"
import {CREATE_POST, GET_ALL_POST} from "./types";
export const getAllPosts = () => async (dispatch) => {
    try {
        debugger
        const res = await postService.findAll();
        dispatch({
            type: GET_ALL_POST,
            payload: res.data
        })
    }catch (err){
        console.log(err)
    }
}

export const createPosts = (post) => async (dispatch) => {
    try {
        const res = await postService.save(post);

        dispatch({
            type: CREATE_POST,
            payload: res.data
        })
    }catch (err){
        console.log(err)
    }
}