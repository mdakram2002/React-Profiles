import React from 'react'
import { useNavigate } from 'react-router';

const Support = () => {
  const navigate = useNavigate();

  function clickHandler() {
    // Move to About Page
    navigate('./About')
  }

  function backHandler() {
    navigate(-1);
  }


  return (
    <div>
      <div>This is Support Page</div>
      <button onClick={clickHandler}>Move to About page</button>
      <button onClick={backHandler}>Go Back</button>
    </div>
  )
}

export default Support;