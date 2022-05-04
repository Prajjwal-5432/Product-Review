import { ADD_COMMENT } from "../Constants/actionTypes";

const comments = new Array(100);

for (let i = 0; i < comments.length; ++i) {
    comments[i] = []
}

const commentReducer = (state = comments, action) => {
    switch (action.type) {
        case ADD_COMMENT: {
            state[action.ind].unshift(action.value)
            return state;
        }
        default:
            return state
    }
}

export default commentReducer