import React from 'react'
import { useNavigate } from 'react-router';

const Labs = () => {
  const navigate = useNavigate();

  function clickHandler() {
    // Move to About Page
    navigate('/about');

  }
  return (
    <div>
      <div>This is Labs Page</div>
      <button onClick={clickHandler}>Move to About Page</button>
    </div>
  )
}

export default Labs;