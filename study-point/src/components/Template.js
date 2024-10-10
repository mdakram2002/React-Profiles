import React from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { FcGoogle } from "react-icons/fc";
import gridImg from '../assests/grid.png'



const Template = ({ title, desc1, desc2, image, formType, setIsLoggedIn }) => {
    return (
        <div className='flex w-10/12 max-w-[1000px] py-12 -mt-[1rem] gap-x-1 gap-y-20 justify-between pl-[4.40rem] pr-[1rem]' >
            <div className='w-10/12 max-w-[450px] mx-0 '>
                <h1
                    className='text-white font-bold text-[1.6rem] leading-2.3 -mb-[8px]'
                >{title}</h1>
                <p className='text-[0.9rem] leading-[1.625] mt-4'>
                    <span className='text-gray-50'>{desc1}</span>
                    <br />
                    <span className='text-blue-200'>{desc2}</span>
                </p>
                <br />


                {formType === "signup" ?
                    (<SignupForm setIsLoggedIn={setIsLoggedIn} />)
                    :
                    (<LoginForm setIsLoggedIn={setIsLoggedIn} />)}

                <div className='flex w-fll items-center gap-x-2 w-10/12 max-w-[450px]'>
                    <div className='w-full h-[1px] bg-gray-500 mt-1' ></div>
                    <p className='text-gray-500 font-medium leading-[1.375rem] mt-1'>
                        OR
                    </p>
                    <div className='w-full h-[1px] bg-gray-500 mt-1'></div>
                </div>

                <button className='flex w-10/12 max-w-[450px] justify-center items-center rounded-[8px] font-medium text-gray-200 border-gray-100 px-[12px] py-[8px] gap-x-2'>
                    <FcGoogle className='pt-[1px] text-[1.275rem]'/>
                    <p className='border-gray-300'>Sign Up with Google</p>
                </button>
            </div>

            <div className='relative w-10/12 max-w-[450px] pt-[4rem] gap-x-2 '>

                <img
                    className='left-1 ml-[5rem]'
                    src={gridImg}
                    alt="pattern"
                    width={350}
                    height={400}
                    loading="lazy"

                />
                <img
                    className='absolute -top-4 left-4 pt-[4rem] gap-x-2 ml-[5rem]'
                    src={image}
                    alt="students"
                    width={350}
                    height={400}
                    loading="lazy"
                />
            </div>
        </div>
    )
}

export default Template;