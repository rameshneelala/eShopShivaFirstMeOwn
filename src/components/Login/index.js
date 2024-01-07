import {Component} from 'react'
import Cookies from 'js-cookie'
// import {Navigate} from 'react-router-dom'


import './index.css'
const error = 'Invalid Username and Password'

class Login extends Component {
    state = {
        username: '',
        password: '',
        showError: false,
    }

    changeUsername = event => {
        this.setState({username: event.target.value})
    }

    changePassword = event => {
        this.setState({password: event.target.value})
    }

    submitForm = async e => {
        // e.preventDefault()
        const {username, password} = this.state 
        const userDetails = {
            username: username,
            password: password
        }
        const url = 'https://apis.ccbp.in/login'
        const options = {
            method: 'POST',
            body: JSON.stringify(userDetails),
        }
        const response = await fetch(url, options)
        const data = await response.json()
        console.log(data)
        if (response.ok) {
            const jwtToken = data.jwt_token
            console.log(jwtToken)
            const {history} = this.props 
            Cookies.set('jwt_token', jwtToken, {expires: 30})
            history.replace('/')
        }else {
            this.setState(prevState => ({
                showError: !prevState.showError
            }))
        }
    }

    render(){
        const {username, password, showError} = this.state
        // if (Cookies.get('jwt_token') !== undefined) {
        //     return <Navigate to="/" />
        //   }
      
    
        return (
    <div className='login-container'>
        <div className="login-box">
            <h1 className="heading">Login</h1>
            <form onSubmit={this.submitForm} className="login-details" id='form'>
                <div className="username">
                    <label type='username' htmlFor='input1'>Username</label>
                    <input id='input1' value={username}  type='text' className="input-box" placeholder='Enter Username' onChange={this.changeUsername} />
                </div>

                <div className="password">
                <label type='password' htmlFor='input2'>Password</label>
                    <input id='input2' value={password} type='password' className="input-box" placeholder='Enter Password' onChange={this.changePassword} />
                </div>

                <div className='button-container'>
                <button type='button' className='login-button'>Login</button>
                </div>
                {showError && <p>{error}</p>}
            </form>
            </div>        
    </div>
    )
        }
}

export default Login 
