import React from 'react'
import Input from '../Components/Input'
import  Button from '../Components/Button'
import './LoginContainer.css'


const LoginContainer = () => {
    return (
        <div className='Container'>
            <h1>Login</h1>
            <div style={{ padding:'15px'}}>
                <Input placeholder='Username'/>
            </div>
            <div style={{ padding:'15px'}}>
                <Input placeholder='Password'/>
            </div>
            <div style={{ padding:'15px'}}>
                <Button name='Login'/>
            </div>
            


        </div>
    )
}

export default LoginContainer
