import React from 'react'
import Header from '../components/Header'
// Flag Icons
import { FlagIcon } from "react-flag-kit";
import CountryData from '../components/CountryData';

const Converter = () => {


    return (

        <div>
            <Header />
            <div className='container converter-wrapper'>

                <section>
                    <h3>All-In-One Currency Converter</h3>

                    <section className='card converter-main'>
                        <div className='converter-left'>
                            <div className='top-left'>
                                <small>You Have</small>
                                {/* Dynamically pass in the country name here */}
                                <small className='country'>Nigeria</small>
                            </div>
                            <div className='body-left'>
                                <div className='input-group'>
                                    <input type='number' />

                                    <select id='country'>
                                        <option value='NG'>NG</option>
                                        <option value='US'>US</option>
                                        <option value=''></option>
                                    </select>
                                    {/* Pass a prop here code={country-code} to change flag dynamically */}
                                    <FlagIcon className='flag' code="NG" width={18} height={15} />
                                </div>
                            </div>

                            <div className='bottom-left'>
                                <small>1USD</small>
                                <small>=</small>
                                <small>750.00</small>
                            </div>
                        </div>

                        <div className='switch'>
                            <i className="fa-solid fa-arrow-right-arrow-left"></i>
                        </div>

                        <div className='converter-right'>
                            <div className='top-right'>
                                <small>You Get</small>
                                {/* Dynamically pass in the country name here */}
                                <small className='country'>United States</small>
                            </div>
                            <div className='body-right'>
                                <div className='input-group'>
                                    <input type='number' />
                                    <select id='country'>
                                        <option value='US'>US</option>
                                        <option value='NGN'>NG</option>
                                        <option value=''></option>
                                    </select>
                                    {/* Pass a prop here code={country-code} to change flag dynamically */}
                                    <FlagIcon className='flag' code="US" width={18} height={15} />
                                </div>
                            </div>

                            <div className='bottom-right'>
                                <small>1NGN</small>
                                <small>=</small>
                                <small>0.00133333USD</small>
                            </div>
                        </div>

                    </section>
                </section>


            </div>
        </div>
    )
}

export default Converter