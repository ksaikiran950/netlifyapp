import React from 'react'
import Input from './Input'
import Button from './Button'
import './style.css'

const Header = () => {
    return (
        <div class='main-header' style={{display:'flex',
            justifyContent:'space-between',
            padding:'5px'
        }}>
            {/* Logo */}
            <div className='Logo'>
                <img src="https://www.gwingsoftwaretechnologies.com/images/greencrop.png" width={'80px'} alt="Logo" />
            </div>
            {/* Search Bar */}
            <div className='header-right'>
                <div>
                <Input placeholder='Search'/>
                </div>
               

                <h6>News</h6>

                <h6>About</h6>
                <div>
                <Button name='Logout'/>

                </div>

            </div>
        </div>
    )
}

export default Header
