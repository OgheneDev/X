import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import close from '../assets/images/close.svg'
import google from '../assets/images/google.png'

const SignInPage = () => {

    const navigate = useNavigate();

  return (
    <form  className='bg-black text-custom-grey p-[40px]'>
      <div className='flex mb-[50px]'>
       <button onClick={() => navigate('/')}>
        <img src={close} alt="Close" className="w-[20px] h-[20px]" />
       </button>
        <svg
          viewBox='0 0 24 24'
          aria-hidden='true'
          className='w-[30px] mx-auto'
          fill='white'
        >
         <g>
         <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
         </g>
        </svg>
       </div>

       <label className='font-bold text-2xl text-white'>Sign into X</label>

       <div className='mt-[30px] flex flex-col gap-[20px] mb-[30px]'>
       <button 
        className='bg-white text-[black] py-[10px] rounded-full flex justify-center gap-[10px] items-center w-[100%] md:w-fit md:px-[50px]'
        >
            <img src={google} alt="google" className='w-[20px] text-custom-grey font-bold'/>Sign up with Google</button>
          <span className='text-center text-white'>or</span>

          <input type="email" placeholder='email' className='w-[100%] bg-transparent pl-[5px] py-[15px] border border-custom-grey rounded' />
       </div>

       <div className='flex flex-col gap-[20px] mb-[40px]'>
        <button className='bg-white text-black rounded-full w-[100%] py-[5px]'>Next</button>
        <button className='bg-transparent border text-white border-white w-[100%] py-[5px] rounded-full'>Forgot password?</button>
       </div>

       <p className='mb-[100px]'>Don't have an account? <Link to='/sign-up' className='text-custom-blue'>Sign up</Link></p>
    </form>
  )
}

export default SignInPage
