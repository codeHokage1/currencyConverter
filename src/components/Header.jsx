import React from 'react'
import Logo from "../images/pwc.png"

const Header = () => {
    return (
        <header className='container'>
            <div>
                <img src={Logo} alt="" className='logo' />
                <span>Currency Converter</span>
            </div>
            <nav>
                <ul>
                    <li></li>
                </ul>
            </nav>

        </header>
    )
}

export default Header