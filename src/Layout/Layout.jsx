import React from 'react'
import './Layout.css'
import Header from '../Components/Header'

const AppLayout = () =>
{
    return (
        <div>
            {/* Header */}
            <div className="header">
                <Header />
            </div>

            {/* SideBar */}
            <div className="sidebar">SideBar</div>

            <div></div>
        </div>
    )
}

export default AppLayout
