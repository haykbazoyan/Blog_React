import React from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { Redirect } from "react-router-dom"
import styles from './Login.module.css'


export default class LogIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            login: '',
            password: '',
            data: localStorage.getItem('authentication') ? JSON.parse(localStorage.getItem('authentication')) : [],
            isAuth: false
        }
    }

    handleSubmit = (e) => {
        
        const user = {
            log: this.state.login,
            pas: this.state.password
        }
        
        this.state.data.push(user)
        localStorage.setItem('authentication', JSON.stringify(this.state.data));
        
        this.setState({
            login: '',
            password: '',
            isAuth: true
        });
        
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
        const regExp = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$");
         
        return regExp.test(password);
    }

    isDisable = () => {
        const { login, password } = this.state;
        return (login === '' || password === '' || (!this.isCorrectPassword())) ? true : false;
    }
    
    render() {
        if (this.state.isAuth) {
            return <Redirect to={"/createPost"} />
        }

        return (
            <div className={`${styles.container}`}>
                <h3 className="text-3xl mt-5">Sign Up</h3>
                
                <form className='flex flex-col mt-5 w-2/3' onSubmit={this.handleSubmit}>
                    <Input type='text' placeholder='Login' value={this.state.login} func={this.changeHandlerLogin} />
                    <Input type='password' placeholder='Password' value={this.state.password} func={this.changeHandlerPassword} />
                    <p className='text-xs text-gray-500 mt-2 mb-3'>{(this.isDisable()) ? 'Eight characters, at least one uppercase letter, one lowercase letter, one number and one special character!' : ''}</p>
                    <Button onClick={this.handleSubmit} isDisable={this.isDisable()} btnName='Submit' />
                </form>
            </div> 
        )
    }
}