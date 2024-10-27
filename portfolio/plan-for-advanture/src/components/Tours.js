import React from 'react';
import Card from './Card';

function Tours({ tours, removeTours }) {
    return (
        <div className="container">
            <div>
                {/* heading */}
                <h2 className="title">Plan For Adventure</h2>
            </div>
            {/* contents */}
            <div className="cards">
                {
                    tours.map((tours) => {
                        return (
                            <Card key={tours.id} {...tours} removeTours={removeTours}></Card>
                        )
                    })
                }
            </div>
        </div>
    );
}
export default Tours;