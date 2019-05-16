import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILED, FETCH_FRIENDS_START, FETCH_FRIENDS_SUCCESS, FETCH_FRIENDS_FAILURE } from "../actions";


const initialState = {
    friends: [],
    isLoggingIn: false,
    isFindingFriends: false,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_START:
            return {
                ...state,
            isLoggingIn: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggingIn: false
            };
        case LOGIN_FAILED:
            console.log('Login Failed :( Nice try hacker', action.payload)
            return {
                ...state,
                isLoggingIn: false
            }
        case FETCH_FRIENDS_START:
            return {
                ...state,
                isFindingFriends: true
            }
        case FETCH_FRIENDS_SUCCESS:
            return {
                ...state,
                friends: action.payload,
                isFindingFriends: false
            }
        default: 
            return state;
    }
}

export default reducer;