import React from 'react'
import { AuthLayout } from '../layout/AuthLayout'

export const RegisterPage = () => {
  return (
    <AuthLayout title='subscribe to kodigo Music' haveAccount='Do you have an account?' route='/auth/login' linkName='log in to Kodigo Music'>

      <form className='mt-2 flex flex-col gap-[10px] items-center'>
        <input type="text" placeholder='Enter your Email' name='Email' className='bg-transparent border border-[#363434] min-w-[550px] p-2 rounded-lg' />
        <input type="text" placeholder='Enter your Password' name='Password' className='bg-transparent border border-[#363434] min-w-[550px] p-2 rounded-lg' />
        <input type="text" placeholder='Enter your Username' name='UserName' className='bg-transparent border border-[#363434] min-w-[550px] p-2 rounded-lg' />


        <button className='min-w-[250px] mx-auto bg-[#3f5f95] py-2 rounded-2xl mt-2'>Create Account</button>
      </form>

    </AuthLayout>
  )
}
