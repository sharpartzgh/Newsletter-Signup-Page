/* eslint-disable no-unused-vars */
import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import InputField from './InputField';

const Content = () => {
  return (
    <div className='container-wrapper '>
      <div className='maintext p-5'>
        <h1 className="text-[#1D213C] text-[2em] font-bold">Stay Updated!</h1>
        <p className='sm:text-[15px] mt-3'>Join over 60,000+ product managers receiving monthly updates on: </p>
      </div>
      <div className='pl-5 pr-8 sm:text-[.8em] flex flex-col items-start gap-2'>
        <div className='flex justify-center gap-2'>
          <FaCheckCircle className=' mt-1 text-[#FF5D4F]'/><span> Product discovery and building what matters</span>
        </div>
        <div className='flex justify-center gap-2'>
          <FaCheckCircle className=' mt-1 text-[#FF5D4F]' /><span>Measuring to ensure updates are a success</span>
        </div>
        <div className='flex gap-2 items-center'>
          <FaCheckCircle className='text-[#FF5D4F]' /><span>An much!</span>
        </div>
      </div>
      <InputField />
    </div>
  )
}

export default Content
