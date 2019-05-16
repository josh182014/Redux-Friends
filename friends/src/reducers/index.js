import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILED, FETCH_FRIENDS_START, FETCH_FRIENDS_SUCCESS, FETCH_FRIENDS_FAILURE } from "../actions";


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
            break;
        case FETCH_FRIENDS_START:
            console.log('fetching friends')
        case FETCH_FRIENDS_SUCCESS:
            console.log('friends fetched!', action.payload)
            return {
                ...state,
                friends: action.payload
            }
        default: 
            return state;
    }
}

export default reducer;