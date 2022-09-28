import React from 'react'

const Header = () => {

  return (
    <div className='px-[40px] bg-[#025FEB]'>
      <div className='flex h-[60px] items-center justify-between'>
        <div className='flex gap-[40px]'>
          <span className='flex items-center gap-2 cursor-pointer'>
            <span className='text-[16px] text-white'>Movies showcase website</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Header
