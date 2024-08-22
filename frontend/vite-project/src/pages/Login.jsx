import React from 'react';

const LoginForm = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-gray-100 flex items-center justify-center">
        <form className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <input 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
              type="text" 
              id="email" 
              required 
            />
            <label 
              htmlFor="email" 
              className="block text-gray-700 text-sm font-bold mt-2"
            >
              Username
            </label>
          </div>
          <div className="mb-4">
            <input 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
              type="password" 
              id="pass" 
              required 
            />
            <label 
              htmlFor="pass" 
              className="block text-gray-700 text-sm font-bold mt-2"
            >
              Password
            </label>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-blue-500 hover:underline">
              <a href="#">Forgot Password?</a>
            </span>
            <button 
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="w-1/2 bg-gray-200 flex items-center justify-center">
        <div className="w-full max-w-md">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 731.67004 550.61784">
            {/* Aquí irían los paths del SVG */}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
