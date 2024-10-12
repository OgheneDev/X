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
            <button className='bg-white text-[black] py-[10px] rounded-full flex justify-center gap-[10px] items-center md:w-fit md:px-[50px]'>
        <svg 
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="w-[20px]"
         ><g>
        <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z"></path>
        </g></svg>
        Sign in with apple
    </button>
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
