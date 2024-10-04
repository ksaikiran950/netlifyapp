import React from 'react'
import './style.css'

const input = (props) => {
    const{placeholder} = props
    return <input id= 'input-component' type="text" placeholder={placeholder}/>
}

export default input
