import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import google from '../assets/images/google.png'

const HomePage = () => {

   const navigate = useNavigate();

   const handleSignUpClick = () => {
     navigate('/sign-up')
   }

  return (
    <div className="bg-black text-white p-[30px] md:flex md:py-[100px] md:gap-[200px] md:pl-[150px]">
    <svg
       viewBox="0 0 24 24"
       aria-hidden="true"
       className="w-[50px] mb-[50px] md:w-[350px]"
       fill="white" // Add this to change the color to white
    >
  <g>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
  </g>
   </svg>

    <div className='md:w-fit'>
    <h1 className='text-4xl font-bold mb-[40px] md:text-[60px] md:mb-[60px]'>Happening now</h1>

    <h3 className='text-2xl md:text-2xl font-bold mb-[20px]'>Join today.</h3>
    <div className='flex flex-col gap-[10px] mb-[70px] md:w-fit'>
    <button className='bg-white text-[black] py-[10px] rounded-full flex justify-center gap-[10px] items-center md:w-fit md:px-[50px]'><img src={google} alt="" className='w-[20px]' />Sign up with Google</button>
      <span className='text-center '>or</span>
      <button onClick={handleSignUpClick} className='bg-custom-blue py-[10px] rounded-full md:w-fit md:px-[80px]'>Create account</button>
      <p className='text-[12px] md:w-[300px] text-custom-grey'>By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p>
    </div>

    <div className='flex flex-col gap-[10px] mb-[20px]'>
        <p className='font-bold'>Already have an account?</p>
        <Link to="/sign-in"><button className='rounded-full text-blue-400 border border-blue-400 py-[10px] w-[100%] md:w-fit md:px-[90px]'>Sign in</button></Link>
    </div>
    
    </div>
  </div>
  )
}

export default HomePage
