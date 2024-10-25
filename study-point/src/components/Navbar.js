import React from 'react';
import logo512 from '../assests/logo512.png';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { toast } from 'react-hot-toast';

const Navbar = (props) => {

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

    return (
        <div className='flex items-center justify-between text-white h-[60px] z-auto w-full bg-gray-950 pl-[12rem] pr-[12rem]' >
            <div className='flex items-center justify-center gap-8'>
                <Link to="/" >
                    <div>
                        <img src={logo512} alt="logo" width={45} height={45} loading='lazy' className='p-1' />
                    </div>
                </Link>
                <p className='text-xl text-gray-200 -ml-8'>Study Point</p>
            </div>

            <nav className='flex mx-40  text-gray-200 gap-x-4'>
                <ul className='flex gap-4'>
                    <li>
                        <Link to="/" >Home</Link>
                    </li>
                    <li>
                        <Link to="about" >About</Link>
                    </li>
                    <li>
                        <Link to="content" >Content</Link>
                    </li>
                    <li>
                        <Link to="contect" >Contect</Link>
                    </li>
                </ul>
            </nav>

            {/* login - signup & logout- Dashboard */}

            <div className='flex items-center gap-x-4 text-gray-200'>
                {!isLoggedIn &&
                    <Link to="/login">
                        <button
                            className='bg-gray-860 rounded-[8px] bg-gray-850 border border-gray-600 p-2'
<<<<<<< HEAD
                        >
=======
                           >
>>>>>>> 9f430543ad8ecaef55bac5f2612fd8d80e924832
                            LogIn
                        </button>
                    </Link>
                }
                {!isLoggedIn &&
                    <Link to="/signup">
                        <button
                            className='bg-gray-860 rounded-[8px] bg-gray-850 border border-gray-600 p-2'
                        >
                            SignUp
                        </button>
                    </Link>
                }
                {isLoggedIn &&
                    <Link to="/logout">
                        <button
                            className='bg-gray-860 rounded-[8px] bg-gray-850 border border-gray-600 p-2'
                            onClick={() => {
                                setIsLoggedIn(false);
                                toast.success("Logged Out")

                            }}>
                            LogOut
                        </button>
                    </Link>
                }
                {isLoggedIn &&
                    <Link to="/deshboard">
                        <button
                            className='bg-gray-860 rounded-[8px] bg-gray-850 border border-gray-600 p-2'
                        >
                            Dasheboard
                        </button>
                    </Link>
                }
            </div>
        </div>
    )
}
export default Navbar;