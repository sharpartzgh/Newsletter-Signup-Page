/* eslint-disable no-unused-vars */
import React from 'react'
import { CiCircleCheck } from "react-icons/ci";

const Content = () => {
  return (
    <div className='container-wrapper'>
      <div className='maintext'>
        <h1 className="text">Stay Updated</h1>
        <p>Join over 60,000+ product managers receiving monthly updates on: </p>
      </div>
      <div className=''>
        <div className='flex justify-center gap-1'>
          <CiCircleCheck className=' mt-1'/><span> Product discovery and building what matters</span>
        </div>
        <div className='flex justify-center gap-1'>
          <CiCircleCheck className=' mt-1' /><span>Measuring to ensure updates are a success</span>
        </div>
        <div className='flex gap-1 items-center'>
          <CiCircleCheck /><span>An much more</span>
        </div>
      </div>
    </div>
  )
}

export default Content
