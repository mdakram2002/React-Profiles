import React from 'react';
import './App.css'
import Review from './components/Review';
import reviews from './data';

function App() {
  return (
    <div className="container1">
      <div className="second-con">
        <h1>Our Reviews</h1>
        <div className="empt"></div>
        <Review reviews={reviews} />
      </div>
    </div>
  );
}

export default App;
