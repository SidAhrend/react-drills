import React, {Component} from 'react';

class Login extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        };

        this.handleLogin = this.handleLogin.bind(this)
    
    }
    
    handlePasswordChange(password){
        this.setState({password: password}) 
    }
    handleUsernameChange(username){
        this.setState({username: username})
    }
    handleLogin(){
        return alert(`Congratulations, ${this.state.username} you are logged in. Your Password is ${this.state.password}`)
    }

    render(){
    return(
        <div>
            <h1>Password</h1>
            <input 
                onChange={(event) => this.handlePasswordChange(event.target.value) }
                type='text' />
            <h1>Username</h1>
            <input 
                onChange={(event) => this.handleUsernameChange(event.target.value) }
                type='text' />
            <button onClick={this.handleLogin} >Enter</button>
        </div>
        )
    }
}
export default Login;