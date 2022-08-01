import React from "react";
import Header from "../components/Header";
import PropTypes from "prop-types";
import ConverterLeft from "../components/ConverterLeft";
import ConverterRight from "../components/ConverterRight";


const Converter = (props) => {
  return (
    <div>
      <Header />
      <div className="container converter-wrapper">
        <section>
          <h3>All-In-One Currency Converter</h3>

          <section className="card converter-main">
            <div className="converter-left">
            <ConverterLeft 
                    currencies={props.currencies}
                    amount={props.amount1}
                    currency={props.currency1}
                    onAmountChange={props.onAmountChange1}
                    onCurrencyChange={props.onCurrencyChange1}
            />
            
            <div className='bottom-left'>
                <small>1 {props.currency1}</small>
                <small>=</small>
                <small>{(props.rates[props.currency2] / props.rates[props.currency1]).toFixed(3)} {props.currency2}</small>
            </div>
            </div>
            

            <div className="switch">
              <i className="fa-solid fa-arrow-right-arrow-left"></i>
            </div>
            
            
           <div className="converter-right">
           <ConverterRight
                currencies={props.currencies}
                amount={props.amount2}
                currency={props.currency2}
                onAmountChange={props.onAmountChange2}
                onCurrencyChange={props.onCurrencyChange2}
            />
            
            <div className='bottom-right'>
                <small>1 {props.currency2}</small>
                <small>=</small>
                <small>{(props.rates[props.currency1] / props.rates[props.currency2]).toFixed(3)} {props.currency1}</small>
            </div>
           </div>
                        
          </section>
        </section>
      </div>
    </div>
  );
};

Converter.propTypes = {
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    currencies: PropTypes.array,
    onAmountChange: PropTypes.func,
    onCurrencyChange: PropTypes.func
  }
  

export default Converter;




