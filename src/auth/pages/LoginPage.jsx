import React from 'react'

export const LoginPage = () => {
  return (
    <main className='w-[85%] lg:w-full mx-auto h-[100dvh] flex items-center text-white lg:bg-gradient-to-t from-black via-[#070707] to-[#363434]'>
        <section className='text-center lg:w-[50%] mx-auto px-4 bg-black lg:rounded-lg lg:bg-gradient-to-t from-[#141414] via-[#070707] to-black py-10'>

          {/* logo and h2 */}
          <div className='mb-6 flex flex-col gap-4'>
            <figure className='w-[20%] mx-auto'>
              <img src="https://res.cloudinary.com/dy6x06uoe/image/upload/v1750551640/icon_phm0sp.svg" alt="logo" />
            </figure>
            <h2 className='text-2xl font-bold tracking-tighter'>Log in to Kmusic</h2>
          </div>

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

            <hr className='border-[#363434] mt-3'/>

            <div className='hidden lg:block'>
              <form className='mt-2 flex flex-col gap-2 items-center'>
                <input type="text" placeholder='Enter your Email' name='Email' className='bg-transparent border border-[#363434] w-[90%] p-2 rounded-lg'/>
                <input type="text" placeholder='Enter your Password' name='Password' className='bg-transparent border border-[#363434] w-[90%] p-2 rounded-lg'/>

                <button className='w-[85%] mx-auto bg-[#3f5f95] py-2 rounded-2xl mt-2'>Confirm</button>
              </form>
            </div>

            {/* login with email & password when the view is in a desktop */}
            
          </div>

          <div className='mt-5 lg:flex justify-center items-center gap-2'>
            <p>Don't have an account?</p>
            <p className='font-bold pt-3 lg:pt-0 underline'>register in kmusic</p>
          </div>
        </section>
    </main>
  )
}
