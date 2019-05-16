import { LOGIN_START } from "../actions";


const initialState = {
    friends: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_START:
            return state;
        default: 
            return state;
    }
}

export default reducer;