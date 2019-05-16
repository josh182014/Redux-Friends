import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILED, FETCH_FRIENDS_START, FETCH_FRIENDS_SUCCESS, FETCH_FRIENDS_FAILURE } from "../actions";


const initialState = {
    friends: [],
    isLoggingIn: false,
    isFindingFriends: false,
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
            return {
                ...state,
                isLoggingIn: false
            }
        case FETCH_FRIENDS_START:
            console.log('fetching friends')
            return {
                ...state,
                isFindingFriends: true
            }
        case FETCH_FRIENDS_SUCCESS:
            console.log('friends fetched!', action.payload)
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