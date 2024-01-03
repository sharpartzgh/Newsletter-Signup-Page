import React, { useState } from 'react';

const InputField = () => {
  const [email, setEmail] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState(null);

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailErrorMessage(isValidEmail(email) ? null : 'Valid email required');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isValidEmail(email)) {
      return; // Prevent submission if email is invalid
    }

    // Proceed with form submission (e.g., send data to server)
    console.log('Form submitted with valid email:', email);
    setEmailErrorMessage(null);
    setEmail('')
  };

  return (
    <div className="pl-5 pr-5">
      <form onSubmit={handleSubmit}>
        <label htmlFor="emailInput" className="sm:text-[.6em] font-semibold flex items-center justify-between">
          Email address
          <span className="text-[#FF5D4F]">{emailErrorMessage}</span>
        </label>
        <br />
        <input
          className="border active:border-1 active:border-black rounded p-2 sm:text-[10px] w-full mt-0 pl-3 outline-none"
          type="email"
          id="emailInput"
          placeholder="email@company.com"
          required
          autoFocus
          value={email}
          onChange={handleEmailChange}
        />
        <button type="submit" className="sm:text-[.8em] text-white bg-[#1D213C] p-2 w-full rounded mt-3 mb-10 hover:bg-gradient-to-r from-[#FF5378] to-[#FF693E] hover:shadow-2xl hover:shadow-[#FF693E] ">
          Subscribe to monthly newsletter
        </button>
      </form>
    </div>
  );
};

export default InputField;
