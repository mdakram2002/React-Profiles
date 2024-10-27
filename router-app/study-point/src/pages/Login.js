import React from 'react'
import Template from '../components/Template';
import LoginImg from '../assests/bg2.jpg';

const Login = ({setIsLoggedIn}) => {
    return (
        <div className='flex items-center justify-center text-white'>
            <Template
                title="Welcome Back"
                desc1="Build skills for today, tomorrow and veyond."
                desc2="Dedicated education to future proof of success."
                formType="login"
                image={LoginImg}
                setIsLoggedIn={setIsLoggedIn}
            />
        </div>
    )
}
export default Login;