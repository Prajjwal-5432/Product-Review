import { ADD_COMMENT } from "../Constants/actionTypes"
export const addComment = (ind, value) => {
    return {
        type: ADD_COMMENT,
        ind,
        value
    }
}