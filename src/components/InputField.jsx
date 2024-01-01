/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const InputField = () => {
  const [submit, setSubmit] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <div className=' mt-5 '>
      <div className=' pl-5 pr-5'>
        <form onSubmit={handleSubmit}>
          <label htmlFor="" className=' sm:text-[.6em] font-semibold'>Email address</label>
          <br />
            <input className=' border rounded p-2 sm:text-[10px] w-full mt-2 pl-3 outline-none' type="email" 
            placeholder='email@company.com'
            required
            autoFocus
            value={submit}
            onChange={(event) => setSubmit(event.target.value)}
            />
          <button type="submit" className=' sm:text-[.8em] text-white bg-[#1D213C] p-2 w-full rounded mt-3 mb-10' onClick={handleSubmit}>
          Subscribe to monthly newsletter
          </button>
        </form>
      </div>
    </div>
  )
}

export default InputField
