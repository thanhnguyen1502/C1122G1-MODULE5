import {CREATE_POST, GET_ALL_POST} from "../action/types";
import {rootReducer} from "./index";

const initialState = []

const postReducer = (posts = initialState, action) => {
    if (!action){
        return posts
    }
    debugger
    const {type, payload} = action

    switch (type) {
        case GET_ALL_POST:
            return payload

        case CREATE_POST:
            return [...posts, payload]
        default:
            return posts
    }
}

export default postReducer()