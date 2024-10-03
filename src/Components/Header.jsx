import React from 'react'
import Input from './Input'
import Button from './Button'

const Header = () => {
    return (
        <div style={{display:'flex',
            justifyContent:'space-between',
            padding:'5px'
        }}>
            {/* Logo */}
            <div className='Logo'>
                <img src="https://www.gwingsoftwaretechnologies.com/images/greencrop.png" width={'80px'} height={'55px'} alt="Logo" />
            </div>
            {/* Search Bar */}
            <div style={{display:'flex',
                justifyContent:'space-around',
                width:'50%',
                height:'55px'
            }}>
                <Input placeholder='Search'/>

                <h6>News</h6>

                <h6>About</h6>

                <Button name='Logout'/>
            </div>
        </div>
    )
}

export default Header
