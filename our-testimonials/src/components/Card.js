import React from 'react';
import './Card.css'
import { FaQuoteLeft, FaQuoteRight, } from 'react-icons/fa';

const Card = (props) => {
    let review = props.review;

    return (
        <div className="container2">
            <div className="imgee">
                <img
                    src={review.image} alt='' />
                <div className="empt">
                </div>
            </div>

            <div className="review">
                <p className="para1">{review.name}</p>
                <p className="para2">{review.job}</p>
            </div>

            <div
                className="qleft">
                <FaQuoteLeft />
            </div>
            <div className="text">
                <p>{review.text}</p>
            </div>
            <div
               className="qright">
                <FaQuoteRight />
            </div>
        </div>
    )
}
export default Card;