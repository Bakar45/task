import React from 'react'

const Navbar = () => {
  return (
    <div className='h-[60px]  bg-red- py-2 px-14 md:px-8 sm:px-8 flex justify-between items-center bg-white shadow-sm' >
      <div>
        <span className='text-sky-400  text-3xl md:text-2xl sm:text-xl font-bold' >Stock</span>
        <span className='text-blue-700  text-3xl md:text-2xl sm:text-xl font-bold font-bold'>Clubs</span>
      </div>
      <div className='list-none flex w-[30vw] sm:w-[40vw] justify-between  '>
        <li className='text-sky-500  text-lg sm:text-sm md:text-mdml-  font-bold'>App</li>
        <li className='text-sky-500   text-lg sm:text-sm md:text-md ml-  font-bold'>Security</li>
        <li className='text-sky-500   text-lg sm:text-sm md:text-md  ml- font-bold'>Contact</li>
      </div>
    </div>
  )
}

export default Navbar