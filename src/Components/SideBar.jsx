import React from 'react'

const SideBar = () => {
    return (
        <div>
            <nav className='sidebar'>
                <div className='menu-content'>
                    <ul className="menu-items">
                        <div className="menu-title">
                        Netlify User
                        </div>

                        <li className="item">
                            <a href="">
                            Sites

                            </a>
                        </li>
                        <li className="item">
                            <a href="">
                            Build
                            </a>
                        </li>
                        <li className="item">
                            <a href="">
Integration 
                        </a>
                        </li>
                        <li className="item">
                            <a href="">
Domains
                        </a>
                        </li>
                    </ul>  

                </div>

            </nav>
        </div>
    )
}

export default SideBar
