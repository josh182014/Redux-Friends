import React from 'react';
import { connect } from 'react-redux';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    handleLogin = (e) => {
        e.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleLogin}>
                    <input
                        type='text'
                        name='username'
                        placeholder='Username'
                        autoComplete='off'
                    />
                    <input
                        type='text'
                        name='password'
                        placeholder='Password'
                        autoComplete='off'
                    />
                    <button>
                        Log In
                    </button>
                </form>
            </div>
        )
    }
}

export default Login