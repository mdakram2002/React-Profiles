import React, { useState } from 'react';


function Card({ id, image, info, price, name, removeTours }) {

    // when the substring is shown undefined then we write the below code handeling this error.
    // let str = undefined;
    // str = str || ' ';
    // console.log(str?.substring(1) || ' ');

    const [readmore, setReadmore] = useState(false);
<<<<<<< HEAD
    const description = readmore ? info : `${info.substring(0, 180)}...`;
=======
    const description = readmore ? info :`${info.substring(0, 180)}...`;
>>>>>>> 9f430543ad8ecaef55bac5f2612fd8d80e924832

    function readmoreHandler() {
        setReadmore(!readmore);
    }


    return (

        <div className="card">
            <img src={image} alt="" className="image" />

            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">₹ {price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>

                <div className="description">
                    {description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore ? `Show Less` : `Read More`}
                    </span>
                </div>
            </div>

            <button className="btn-red" onClick={() => removeTours(id)}>
                Not Interested
            </button>
        </div>
    );
}
export default Card;