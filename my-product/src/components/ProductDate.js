import React from 'react';
import './ProductDate.css';


const ProductDate = (props) => {

    const day = props.date.toLocalString('en-US', { month: 'long' });
    const month = props.date.toLocalString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();


    return (
        <div className="product-date" >
            <div className="product-date-day">{day}</div>
            <div className="product-date-month">{month}</div>
            <div className="product-date-year">{year}</div>
        </div >
    );
}
export default ProductDate;