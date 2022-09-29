import React from 'react';
import DropDown from './DropDown'

const Header = ({handleChange, handleSelectedGener}) => {

  return (
    <div className='px-[40px] bg-[#025FEB]'>
      <div className='flex h-[60px] items-center justify-between'>
        <div className='flex gap-[40px]'>
          <span className='flex items-center gap-2 cursor-pointer'>
            <span className='text-[16px] text-white'>Movies showcase website</span>
          </span>
          <div class="relative">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <input onChange={(e) => handleChange(e.target.value)} type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
          </div>
          <DropDown handleSelectedGener={handleSelectedGener} />
        </div>
      </div>
    </div>
  )
}

export default Header;
