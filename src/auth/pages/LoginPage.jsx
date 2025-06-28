import { useEffect, useState } from 'react'
import { AuthLayout } from '../layout/AuthLayout'
import { UserAuth } from '../../context/AuthContextProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';

export const LoginPage = () => {

  const { googleSingIn, user, loginWithEmailAndPassword } = UserAuth();
  const navigate = useNavigate();

  // login with email 
  const [isActive, setIsActive] = useState(false);
  // useForm 
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleGoogleSingIn = async () => {
    try {
      await googleSingIn();
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (data) => {
    loginWithEmailAndPassword(data);
  };

    useEffect(() => {
        if(!Object.keys(user).length > 0){
          // console.log('no hay login aun'
        }else{
          Swal.fire({
            title: "welcome to Kodigo Music",
            imageUrl: 'https://res.cloudinary.com/dy6x06uoe/image/upload/v1750551640/icon_phm0sp.svg',
            imageWidth: 150,
            imageHeight: 150,
            draggable: true,
            background: '#1F1F1F',
            color: "#fff",
            confirmButtonColor: "#3f5f95",

          });
          navigate('/') 
        }
      
      }, [user])

  return (
    <AuthLayout title='Log in to Kodigo Music' haveAccount="Don't have an account?" route='/auth/register' linkName='register in Kodigo Music'>

      {/* login options, only the email option works */}
      <div className='font-semibold flex flex-col gap-2 lg:w-[65%] lg:mx-auto '>

        <button className='border border-[#313131] rounded-2xl py-3 relative hover:bg-[#3f5f95] text-whte lg:hidden' onClick={() => isActive ? setIsActive(false) : setIsActive(true)}>
          <i className="uil uil-envelope absolute text-3xl top-1 pt-1 left-2"></i>
          <p>Continue with email</p>
        </button>

        <button className={`border border-[#313131] rounded-2xl py-3 relative hover:bg-[#3f5f95] cursor-pointer text-white ${isActive && 'hidden'}`} onClick={handleGoogleSingIn}>
          <figure className='w-[25px] absolute left-3'>
            <img src="https://res.cloudinary.com/dy6x06uoe/image/upload/v1750553575/google_lmglxf.svg" alt="" />
          </figure>
          <p>Continue with Google</p>
        </button>

        <div className={`border border-[#313131] rounded-2xl py-3 relative hover:bg-[#3f5f95] cursor-pointer text-white ${isActive && 'hidden'}`}>
          <figure className='w-[25px] absolute left-3'>
            <img src="https://res.cloudinary.com/dy6x06uoe/image/upload/v1750553574/facebook_ndoovt.svg" alt="" />
          </figure>
          <p>Continue with Facebook</p>
        </div>

        <div className={`border border-[#313131] rounded-2xl py-3 relative hover:bg-[#3f5f95] cursor-pointer text-white ${isActive && 'hidden'}`}>
          <figure className='w-[20px] absolute left-4'>
            <img src="https://res.cloudinary.com/dy6x06uoe/image/upload/v1750553795/apple_dark_unntqf.svg" alt="" />
          </figure>
          <p>Continue with Apple</p>
        </div>

        <hr className='border-[#363434] mt-3' />

        <div className={`${isActive ? 'block' : 'hidden'} lg:block`}>

          <form className='mt-2 flex flex-col gap-2 items-center' onSubmit={handleSubmit(onSubmit)}>
            {/* <div className='w-[90%]'>
              <input {...register("email", { pattern: /^[a-zA-Z0-9._%+-]+@gmail\.com$/ })} type="text" placeholder='Enter your Email' name='email' className='bg-transparent border border-[#363434] w-full p-2 rounded-lg' />
              {errors.email && <p role="alert" className='text-sm text-red-400 text-start pt-[5px] px-2'>only gmail emails are accepted.</p>}
            </div> */}

            <div className='w-[90%]'>
              <input 
                {...register("email", { pattern: /^[a-zA-Z0-9._%+-]+@gmail\.com$/ })} // validacion de un correo gmail
                type="text" placeholder='Enter your Email' name='email' 
                className='bg-transparent border border-[#363434] w-full p-2 rounded-lg'
              />
              {errors.email && <p role="alert" className='text-sm text-red-400 text-start pt-[5px] px-2'>only gmail emails are accepted.</p>}
          </div>

            <input {...register("password")} type="password" placeholder='Enter your Password' name='password' className='bg-transparent border border-[#363434] w-[90%] p-2 rounded-lg' />

            <button className='w-[85%] mx-auto bg-[#3f5f95] py-2 rounded-2xl mt-2'>Confirm</button>
          </form>
        </div>

      </div>

    </AuthLayout>
  )
}
