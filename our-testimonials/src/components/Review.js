import React from 'react';
import './Review.css'
import Card from './Card';
import { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Review = (props) => {
    let reviews = props.reviews;
    const [index, setIndex] = useState(0);

    function leftShiftHandler() {
        if (index - 1 < 0) {
            setIndex(reviews.length - 1);
        }
        else {
            setIndex(index - 1);
        }
    }

    function rightShiftHandler() {
        if (index + 1 >= reviews.length) {
            setIndex(0);
        }
        else {
            setIndex(index + 1);
        }
    }

    function surpriseHandler() {
        let randomIndex = Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);
    }

    return (

        <div className="container3">
            <Card review={reviews[index]}></Card>

            <div className="btn">
                <button
                    onClick={leftShiftHandler}
                    className="btn-rightleft">
                    <FaAngleLeft />
                </button>
                <button
                    onClick={rightShiftHandler}
                    className="btn-rightleft">
                    <FaAngleRight />
                </button>
            </div>

            <div className="mrr">
                <button
                    onClick={surpriseHandler}
                    className="surprise">
                    Surprise Me
                </button>
            </div>

        </div>
    )
}

export default Review;