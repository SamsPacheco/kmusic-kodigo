import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>

    {/* desktop */}
      <nav className='h-full w-full text-white lg:grid lg:grid-cols-[1fr_550px_1fr] xl:grid-cols-[1fr_850px_1fr] gap-4 py-2 hidden'>

        <div className='flex items-center lg:pl-20 pl-32'>
          <i className="text-4xl uil uil-angle-left"></i>
          <i className="text-4xl uil uil-angle-right"></i>
        </div>

        <div className='flex justify-center gap-1 xl:gap-2'>
          {/* home button */}
          <div className='flex justify-center items-center rounded-full w-[55px] h-[55px] bg-[#1f1f1f]'>
            <Link to='/'>
              <i className="uil uil-estate text-[28px] xl:text-[35px]"></i>            
            </Link>
          </div>

          {/* input - search */}
          <div className='bg-[#1f1f1f] flex items-center px-[10px] rounded-3xl flex-1 relative'>
            <div className='w-[90%] flex'>
              <i className="uil uil-search text-2xl"></i>
              <input type="text" placeholder='What do you want to play?' className='bg-transparent px-3 w-[70%] outline-none' />
            </div>

            <span className='w-[1px] h-[60%] border border-[#6a6a6a]' />

            <div className='absolute right-4 xl:right-[32px]'>
              <i className="uil uil-shopping-basket text-[28px] xl:text-[32px]"></i>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-end pr-12 gap-6'>
          <i className="uil uil-bell text-[30px]"></i>
          <i className="uil uil-users-alt text-[30px]"></i>

          {/* debe de desplegar un drop con la info y log out */}
          <div className='w-10 h-10 rounded-full bg-[#3f5f95] flex  justify-center items-center cursor-pointer'>
            <h1 className='text-2xl'>S</h1>
          </div>
        </div>
      </nav>

      <nav className='text-white flex items-center gap-2 p-5 lg:hidden'>
        <div className='w-10 h-10 rounded-full bg-[#3f5f95] flex  justify-center items-center cursor-pointer'>
          {/* extraer la primera letra del correo que ingresa */}
          <h1 className='text-2xl'>S</h1>
        </div>
        <span className='px-3 py-[6px] rounded-2xl bg-[#3f5f95] text-white'>
          <p>All</p>
        </span>
        <span className='border-2 border-[#adb1a5] px-3 py-[6px] rounded-2xl bg-[#1e1e1e] text-[#cfcfcf]'>
          <p>Music</p>
        </span>
        <span className='px-3 py-[7px] rounded-2xl bg-[#1e1e1e] text-[#cfcfcf]'>
          Podcasts
        </span>
      </nav>
    </>
  )
}
