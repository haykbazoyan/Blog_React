import React from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'

export default class LogIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            login: "",
            password: '',
            data: []
        }
    }

    handleSubmit = (e) => {
        // if(!this.isCorrectPassword()){
        //     return true;
        // }
        
        const user = {
            log: this.state.login,
            pas: this.state.password
        }
        
        this.state.data.push(user);
        localStorage.setItem('key', JSON.stringify(this.state.data));

        this.setState({
            login: '',
            password: ''
        })
    }

    changeHandlerLogin = (e) => {
        this.setState({
            login: e.target.value
        })
    }

    changeHandlerPassword = (e) => {

        console.log('eee', e.target.value);

        this.setState({
            password: e.target.value
        })
    }

    isCorrectPassword = () => {
        const { password } = this.state;
        const regExp = new RegExp("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$");
         
        return regExp.test(password);
    }

    isDisable = () => {
        const { login, password } = this.state;
        // return (login === '' || password === '' || (!this.isCorrectPassword())) ? true : false;

        if (password === '' && (!this.isCorrectPassword())) {
            return false;
        } else if (login === '' || password === '' || (!this.isCorrectPassword())) {
            return true;
        } else {
            return false;
        }
    }
    
    render() {

        return (
            <div className='text-center'>
                <h3 className="text-3xl border pt-3 pb-2 mb-2">Sign Up</h3>
                <div className='w-1/4 md:items-center flex flex-col  px-8  pt-6 pb-8 mb-4'>
                    <form onSubmit={this.handleSubmit}>
                        <Input type='text' placeholder='Login' value={this.state.login} func={this.changeHandlerLogin} />
                        <Input type='password' placeholder='Password' value={this.state.password} func={this.changeHandlerPassword} />
                        <p className='text-xs text-gray-500 m-3'>{(this.isDisable()) ? 'eight characters, at least one uppercase letter, one lowercase letter, one number and one special character' : ''}</p>
                        <Button onClick={this.handleSubmit} isDisable={this.isDisable()} btnName='Submit' />
                    </form>
                </div>
            </div> 
        )
    }
}