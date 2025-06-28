import { Link } from 'react-router-dom'
import { UserAuth } from '../context/AuthContextProvider'
import { useEffect, useState } from 'react';

export const Navbar = () => {

  const {user, googleSingOut} = UserAuth();
  console.log(user.displayName)
  const logoIcon = Object.keys(user).length > 0 ? user.email.slice(0,1) : ""

  
  
  console.log(logoIcon)

  const [isActive, setIsActive] = useState(false);

  // log out 
  const handleGoogleLogOut = async () => {
    try {
      await googleSingOut();
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
    {/* desktop */}
      <nav className='h-full w-full text-white lg:grid lg:grid-cols-[1fr_550px_1fr] xl:grid-cols-[1fr_850px_1fr] gap-4 py-2 relative hidden'>

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

        {/* bell - group & user profile */}
        <div className='flex items-center justify-end gap-6 pr-5'>
          <i className="uil uil-bell text-[30px]"></i>
          <i className="uil uil-users-alt text-[30px]"></i>

          {/* debe de desplegar un drop con la info y log out */}
          <div className='w-10 h-10 rounded-full bg-[#3f5f95] flex justify-center items-center'>
            {
              Object.keys(user).length > 0 ?
                
                <button  className='text-2xl' onClick={() => !isActive ? setIsActive(true) : setIsActive(false)}>{ logoIcon }</button>

                :

                <button  className='text-2xl' onClick={() => !isActive ? setIsActive(true) : setIsActive(false)}><i className="uil uil-user"></i></button>

            }
            <div className={`absolute w-[200px] h-[270px] py-4 right-5 top-[65px] bg-[#2d2d2d] p-4 space-y-4 rounded-lg  ${isActive ? 'block' : 'hidden'}`}>
                <span className='flex justify-between cursor-pointer'>Account <i className="uil uil-external-link-alt"></i></span>
                <p className='cursor-pointer'>Profile</p>
                <span className='flex justify-between cursor-pointer'>Support <i className="uil uil-external-link-alt"></i></span>
                <p className='cursor-pointer'>Private Session</p>
                <p className='cursor-pointer'>Settings</p>
                <hr className={`${Object.keys(user).length > 0 ? '' : 'pb-4'}`}/>
                {
                  Object.keys(user).length > 0 ? 
                  <button onClick={handleGoogleLogOut}>log out</button>
                  :
                  <Link to='/auth/login'>Log In</Link>
                }
                
            </div>
          </div>
        </div>
      </nav>
    
    {/* movile */}
      <nav className='text-white flex items-center gap-2 p-5 lg:hidden'>

        <div className='w-10 h-10 rounded-full bg-[#3f5f95] flex justify-center items-center'>
            {
              Object.keys(user).length > 0 ?
                
                <button  className='text-2xl' onClick={() => !isActive ? setIsActive(true) : setIsActive(false)}>{ logoIcon }</button>

                :

                <button  className='text-2xl' onClick={() => !isActive ? setIsActive(true) : setIsActive(false)}><i className="uil uil-user"></i></button>

            }
            <div className={`absolute w-[200px] h-[275px] py-4 left-5 top-[70px] bg-[#2d2d2d] p-4 space-y-4 rounded-lg  ${isActive ? 'block' : 'hidden'}`}>
                <span className='flex justify-between cursor-pointer'>Account <i className="uil uil-external-link-alt"></i></span>
                <p className='cursor-pointer'>Profile</p>
                <span className='flex justify-between cursor-pointer'>Support <i className="uil uil-external-link-alt"></i></span>
                <p className='cursor-pointer'>Private Session</p>
                <p className='cursor-pointer'>Settings</p>
                <hr className={`${Object.keys(user).length > 0 ? '' : 'pb-4'}`}/>
                {
                  Object.keys(user).length > 0 ? 
                  <button onClick={googleSingOut}>log out</button>
                  :
                  <Link to='/auth/login'>Log In</Link>
                }
                
            </div>
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
