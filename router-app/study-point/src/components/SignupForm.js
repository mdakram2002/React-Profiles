import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const SignupForm = ({ setIsLoggedIn }) => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({

    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [accountType, setAccountType] = useState("students");

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
    if (formData.password !== formData.confirmPassword) {
      toast.error("Password do not match");
      return;
    }

    setIsLoggedIn(true);
    toast.success("Access granted");
    const accountData = {
      ...formData
    };

    const finalData = {
      ...accountData,
      accountType
    }

    console.log("printing the final account data")
    console.log(finalData);
    navigate("/deshboard");
  }

  return (

    <div className='flex flex-col w-10/12 max-w-[450px] gap-y-3'>
      <div className='flex gap-x-7 mb-1 p-1 rounded-full max-w-max bg-gray-800'>
        <button
          onClick={() => setAccountType("students")}
          className={`${accountType === "students" ? " bg-gray-950 text-gray-100" :
            "bg-transparent text-gray-300"} py-1 px-3 rounded-full transition-all duration-200`}
        >Student</button>

        <button
          className={`${accountType === "instructors" ? " bg-gray-950 text-gray-100" :
            "bg-transparent text-gray-300"} py-1 px-3 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("instructors")}
        >Instructor</button>
      </div>

      <form onSubmit={submitHandler}>

        {/* first and last name */}

        <div className='flex gap-x-4 mb-3'>
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

          <label className='w-full relative'>
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
        </div>


        <label className='w-full relative'>
          <p className='text-[0.8rem] text-gray-50 mb-1 leading-[1.375rem] '>Email Address <sup className='text-pink-200'>*</sup></p>
          <input
            type="email"
            required
            name="email"
            onChange={changeHandler}
            placeholder="Enter Email Address"
            value={formData.email}
            className='bg-gray-800 rounded-[0.3rem] text-gray-50 w-full p-[5px]'
          />
        </label>


        {/* create password and confirmPassword form */}


        <div className='flex gap-x-4 '>
          <label className='w-full relative mt-2'>
            <p className='text-[0.8rem] text-gray-50 mb-1 leading-[1.375rem] '>Create Password <sup className='text-pink-200'>*</sup></p>
            <input
              className='bg-gray-800 rounded-[0.3rem] text-gray-50 w-full p-[5px] '
              type={showPassword ? ("text") : ("password")}
              required
              name="password"
              onChange={changeHandler}
              placeholder="Enter Password"
              value={formData.password}
            />
            <span
              className='absolute right-2 top-[34px] cursor-pointer '
              onClick={() => { setShowPassword((prev) => !prev) }}>
              {showPassword ? (<AiOutlineEyeInvisible fontSize={16} fill='#a2abba' />) :
                (<AiOutlineEye fontSize={18} fill='#a2abba' />)}
            </span>
          </label>


          <label className='w-full relative mt-2'>
            <p className='text-[0.8rem] text-gray-50 mb-1 leading-[1.375rem] '>
              Confirm Password <sup className='text-pink-200'>*</sup></p>
            <input
              className='bg-gray-800 rounded-[0.3rem] text-gray-50 w-full p-[5px]'
              type={showConfirmPassword ? ("text") : ("password")}
              required
              name="confirmPassword"
              onChange={changeHandler}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
            />
            <span
              className='absolute right-1 top-[34px] cursor-pointer '
              onClick={() => { setShowConfirmPassword((prev) => !prev) }}>
              {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={16} fill='#a2abba' />) :
                (<AiOutlineEye fontSize={18} fill='#a2abba' />)}
            </span>
          </label>
        </div>


        <div>
          <button className='bg-yellow-400 rounded-[8px] font-medium text-gray-900 p-[5px] mb-[5px] mt-[20px] w-full'>
            Create Account
          </button>
        </div>
      </form>
    </div >
  )
}
export default SignupForm;
