import React from 'react'
import { useNavigate } from 'react-router-dom'
import close from '../assets/images/close.svg'

const SignUpPage = () => {

    const navigate = useNavigate();

  return (
    <form className='bg-black text-custom-grey p-[30px]'>
       <div className='flex mb-[30px]'>
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

       <label className='font-bold text-2xl text-white'>Create your account</label>

       <div className='mt-[30px] flex flex-col gap-[20px] mb-[35px]'>
        <input className='w-[100%] bg-transparent pl-[5px] py-[15px] border border-custom-grey rounded' type="text" placeholder='Name' />
        <input className='w-[100%] bg-transparent pl-[5px] py-[15px] border border-custom-grey rounded' type="email" placeholder='Email' />
        <input className='w-[100%] bg-transparent pl-[5px] py-[15px] border border-custom-grey rounded' type="password" placeholder='Password' />
       </div>

       <article className='mb-[20px]'>
        <h5 className='text-white'>Date of birth</h5>
        <p className='text-[14px]'>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
       </article>

       <div className='flex gap-[10px] mb-[100px]'>
        <select className='bg-transparent border border-custom-grey py-[15px] px-[20px] rounded' name="month" id="month">
            <option value="0">Month</option>
        </select>
        <select className='bg-transparent border border-custom-grey py-[15px] px-[20px] rounded' name="day" id="day">
            <option value="0">Day</option>
        </select>
        <select className='bg-transparent border border-custom-grey py-[15px] px-[20px] rounded' name="year" id="year">
            <option value="0">Year</option>
        </select>
       </div>

       <button className='bg-custom-grey w-[100%] text-black py-[10px] font-bold rounded-full'>Next</button>
    </form>
  )
}

export default SignUpPage



