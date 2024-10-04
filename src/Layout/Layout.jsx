import React from 'react'
import './Layout.css'
import Header from '../Components/Header'
import SideBar from '../Components/SideBar'

const Layout = () =>
{
    return (
        <div>
            {/* Header */}
            <div className="Header">
                <Header />
            </div>

            {/* SideBar */}
            <div className="SideBar"><SideBar/></div>

            <div className='Content'>

            </div>
        </div>
    )
}

export default Layout
