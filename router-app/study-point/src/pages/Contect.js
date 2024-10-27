import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';


const Contect = ({ setIsLoggedIn }) => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: "", lastName: "", email: "", message: true,
    });

    function changeHandler(event) {
        setFormData((prevData) => {
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        });
    }

    function submitHandler(event) {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Submited Successfully");
        navigate("/contect");
    }
    console.log(formData);


    return (
        <div className='flex flex-col items-center w-11/12 max-w-max-[400px] mt-[70px] ml-14'>
            <h1 className='flec-col text-gray-50 font-bold text-2xl'>Work with Us</h1>
            <form
                className='flex flex-col w-10/12 max-w-[400px] gap-y-3 mt-1 '
                onSubmit={submitHandler}>

                <label className='w-full relative'>
                    <p className='text-[0.8rem] text-gray-50 mb-1 leading-[1.375rem] '>First Name <sup className='text-pink-200'>*</sup></p>
                    <input
                        type="text"
                        required
                        name="firstName"
                        onChange={changeHandler}
                        placeholder="Enter First Name"
                        value={formData.firstName}
                        className='bg-gray-800 rounded-[0.3rem] text-gray-50 w-full p-[5px]'
                    />
                </label>

                <label className=''>
                    <p className='text-[0.8rem] text-gray-50 mb-1 leading-[1.375rem] '>Last Name <sup className='text-pink-200'>*</sup></p>
                    <input
                        type="text"
                        required
                        name="lastName"
                        onChange={changeHandler}
                        placeholder="Enter Last Name"
                        value={formData.lastName}
                        className='bg-gray-800 rounded-[0.3rem] text-gray-50 w-full p-[5px]'
                    />
                </label>


                <label className=''>
                    <p className='text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem]' >
                        Email Address<sup className='text-pink-200'>*</sup>
                    </p>
                    <input
                        className='bg-gray-800 rounded-[0.3rem] text-gray-50 w-full p-[7px]'
                        required
                        type="text"
                        value={formData.email}
                        onChange={changeHandler}
                        placeholder='Enter Email Address'
                        name="email"
                    />
                </label>

                <label>
                    <p className='text-[0.8rem] text-gray-50 mb-1 leading-[1.375rem] '>Message
                        <sup className='text-pink-200'>*</sup></p>
                </label>
                <textarea
                    required
                    className='bg-gray-800 text-gray-50'
                    name="messege" id="messege" cols="50" rows="3"></textarea>

                <button
                    className='bg-yellow-400 rounded-[8px] font-medium text-gray-900 p-[5px] mb-[8px] mt-[5px]'
                >
                    Submit
                </button>
            </form>
        </div >
    )
}

export default Contect;
