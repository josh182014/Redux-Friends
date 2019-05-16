import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions'

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    handleChanges = e => {
        this.setState({
          credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
          }
        });
      };

    login = (e) => {
        e.preventDefault()
        this.props.login(this.state.credentials).then(() => {
            this.props.history.push('/protected');
        });
    }

    render() {
        console.log('here', this.props)
        return (
            <div>
                <form onSubmit={this.login}>
                    <input
                        type='text'
                        name='username'
                        placeholder='Username'
                        autoComplete='off'
                        onChange={this.handleChanges}
                        value={this.state.username}
                        required
                    />
                    <input
                        type='password'
                        name='password'
                        placeholder='Password'
                        autoComplete='off'
                        onChange={this.handleChanges}
                        value={this.state.password}
                        required
                    />
                    <button>
                    {this.props.isLoggingIn ? (
                        '.......'
                    ) : (
                        'Log in'
                    )}
                    </button>
                </form>
                {!this.props.loginFailed === false && <p>{this.props.loginFailed}</p>}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isLoggingIn: state.isLoggingIn,
    loginFailed: state.loginFailed
});
  
export default connect(
    mapStateToProps, 
    { login }
)(Login);