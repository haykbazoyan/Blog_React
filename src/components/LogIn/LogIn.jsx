import React from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'

export default class LogIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            login: [],
            password: '',
            value: ''
        }
    }

    handleSubmit = (e) => {
        // const { value } = this.state;
        console.log('works');
        console.log('val', this.state.value)
        
        this.setState(({ login, value }) => ({
            login: [...login, value],
        })); 

        console.log('login', this.state.login)
    }

    setInputValue = (value) => {
        this.setState({
            value,
        });
        console.log('value:', this.state.value);
    }
    
    render() {
        return (
            <div className='text-center'>
                <h3 className="text-3xl border pt-3 pb-2 mb-2">Sign Up</h3>
                <div className='w-1/4 md:items-center flex flex-col  px-8  pt-6 pb-8 mb-4'>
                    <Input type='text' placeholder='Login' name='login' onChange={this.setInputValue} />
                    <Input type='password' placeholder='Password' name='password' onChange={this.setInputValue} />
                    <Button onClick={this.handleSubmit} isDisable='false' btnName='Submit' />
                </div>
            </div> 
        )
    }
}