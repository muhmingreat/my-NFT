import React from 'react'

const Header = () => {
  return (
    <div className='w-4/5 flex md:justify-center justify-between items-center py-4 mx-auto'>
        <div className='md:flex-[0.5] flex-initial justify-center items-center '>
            <h1 className=' text-white font-bold text-5xl w-32 cursor-pointer'> Time:Less</h1>
        </div>
        <ul className='md:flex-[0.5] text-white md:flex
            hidden justify-between items-center flex-initial'>
            <li className='mx-4 cursor-pointer'> Market</li>
            <li className='mx-4 cursor-pointer'> Artist</li>
            <li className='mx-4 cursor-pointer'> Features</li>
            <li className='mx-4 cursor-pointer'> Community</li>
        </ul>
        <button className='shadow-xl shadow-black bg-[#e32979] hover:bg-
        [#bd255f] text-white md:text-xs p-2 rounded-full'>
            Connect Wallet
        </button>
    </div>
  )
}

export default Header