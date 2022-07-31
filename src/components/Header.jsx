import React from 'react'
import Logo from "../images/pwc.png"

const Header = () => {
    return (

        <div className='container'>
            <header>
                <div>
                    <img src={Logo} alt="" className='logo' />
                    <span>Currency Converter</span>
                </div>
            </header >
        </div >
    )
}

export default Header