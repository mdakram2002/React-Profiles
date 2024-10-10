import React from 'react';
import Template from '../components/Template';
import signUpImg from '../assests/bg1.jpg';

const Signup = ({setIsLoggedIn}) => {
    return (
        <div className='flex items-center justify-center text-white'>
            <Template
                title="Join the million learning to code with Study Point for free."
                desc1="Build skills for today, tomorrow and veyond."
                desc2="Education to future proof of success."
                formType="signup"
                image={signUpImg}
                setIsLoggedIn={setIsLoggedIn}
            />
        </div>
    )
}

export default Signup;