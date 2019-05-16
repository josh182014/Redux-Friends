import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILED } from "../actions";


const initialState = {
    friends: [],
    isLoggingIn: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_START:
            console.log('LOGGING IN')
            return {
                ...state,
            isLoggingIn: true
            }
        case LOGIN_SUCCESS:
            console.log('LOGGED IN YIPPEE!!')
            return {
                ...state,
                isLoggingIn: false
            };
        case LOGIN_FAILED:
            console.log('Login Failed :( Nice try hacker', action.payload)
        default: 
            return state;
    }
}

export default reducer;