import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START })
    return axios
    .post('http://localhost:5000/api/login', creds)
    .then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.payload)
    })
    .catch(err => console.log(err))
}