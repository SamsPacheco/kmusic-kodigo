import React, { useEffect } from 'react'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from 'react-hook-form';
import { UserAuth } from '../../context/AuthContextProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const RegisterPage = () => {

  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const {registerWithEmailAndPassword, user} = UserAuth();

  const onSubmit = (data) => {
    registerWithEmailAndPassword(data);
  };

  useEffect(() => {
      if(!Object.keys(user).length > 0){
        console.log('no hay login aun')
      }else{
        Swal.fire({
          title: "Account successfully created",
          icon: "success",
          draggable: true,
          background: '#1F1F1F',
          color: "#fff",
          confirmButtonColor: "#3f5f95"
        });
        navigate('/') 
      }
    
    }, [user])
  
  return (
    <AuthLayout title='subscribe to kodigo Music' haveAccount='Do you have an account?' route='/auth/login' linkName='log in to Kodigo Music'>

      <form className='mt-2 flex flex-col gap-[10px] items-center' onSubmit={handleSubmit(onSubmit)}>

        <div>
          <input 
            {...register("email", { pattern: /^[a-zA-Z0-9._%+-]+@gmail\.com$/ })} // validacion de un correo gmail
            type="text" placeholder='Enter your Email' name='email' 
            className='bg-transparent border border-[#363434] min-w-[550px] p-2 rounded-lg focus:bg-black'
          />
          {errors.email && <p role="alert" className='text-sm text-red-400 text-start pt-[5px] px-2'>only gmail emails are accepted.</p>}
        </div>

        <input 
          {...register("password")} 
          type="password" placeholder='Enter your Password' name='password' 
          className='bg-transparent border border-[#363434] min-w-[550px] p-2 rounded-lg' 
        />
        <div>
        <input 
          {...register("displayName", { pattern: /^[a-zA-Z0-9_-]{8}$/ }, {require: true})} // validacion para 8 caracteres alfanumericos 
          type="text" placeholder='Enter your Username' name='displayName' 
          className='bg-transparent border border-[#363434] min-w-[550px] p-2 rounded-lg' 
        />
        {errors.displayName && <p role="alert" className='text-sm text-red-400 text-start pt-[5px] px-2'>only 8 characters allowed.</p>}
        </div>

        <button className='min-w-[250px] mx-auto bg-[#3f5f95] py-2 rounded-2xl mt-2'>Create Account</button>
      </form>

    </AuthLayout>
  )
}
