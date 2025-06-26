import React from 'react'
import { AuthLayout } from '../layout/AuthLayout'

export const LoginPage = () => {
  return (
    <AuthLayout title='Log in to Kodigo Music' haveAccount="Don't have an account?" route='/auth/register' linkName='register in Kodigo Music'>

      {/* login options, only the email option works */}
      <div className='font-semibold flex flex-col gap-2 lg:w-[65%] lg:mx-auto '>

        <div className='border border-[#313131] rounded-2xl py-3 relative bg-[#3f5f95] text-black lg:hidden'>
          <i class="uil uil-envelope absolute text-3xl top-1 pt-1 left-2"></i>
          <p>Continue with email</p>
        </div>

        <div className='border border-[#313131] rounded-2xl py-3 relative text-whte'>
          <figure className='w-[25px] absolute left-3'>
            <img src="https://res.cloudinary.com/dy6x06uoe/image/upload/v1750553575/google_lmglxf.svg" alt="" />
          </figure>
          <p>Continue with Google</p>
        </div>

        <div className='border border-[#313131] rounded-2xl py-3 relative  text-white'>
          <figure className='w-[25px] absolute left-3'>
            <img src="https://res.cloudinary.com/dy6x06uoe/image/upload/v1750553574/facebook_ndoovt.svg" alt="" />
          </figure>
          <p>Continue with Facebook</p>
        </div>

        <div className='border border-[#313131] rounded-2xl py-3 relative  text-white'>
          <figure className='w-[20px] absolute left-4'>
            <img src="https://res.cloudinary.com/dy6x06uoe/image/upload/v1750553795/apple_dark_unntqf.svg" alt="" />
          </figure>
          <p>Continue with Apple</p>
        </div>

        <hr className='border-[#363434] mt-3' />

        <div className='hidden lg:block'>
          <form className='mt-2 flex flex-col gap-2 items-center'>
            <input type="text" placeholder='Enter your Email' name='Email' className='bg-transparent border border-[#363434] w-[90%] p-2 rounded-lg' />
            <input type="text" placeholder='Enter your Password' name='Password' className='bg-transparent border border-[#363434] w-[90%] p-2 rounded-lg' />

            <button className='w-[85%] mx-auto bg-[#3f5f95] py-2 rounded-2xl mt-2'>Confirm</button>
          </form>
        </div>

      </div>

    </AuthLayout>
  )
}
