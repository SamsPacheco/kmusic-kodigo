import { Link } from "react-router-dom"

export const AuthLayout = ({children, title = '', haveAccount = '', route = '', linkName = ''}) => {
    return (
        <main className='w-[90%] lg:w-full mx-auto h-[100dvh] flex items-center text-white lg:bg-gradient-to-t from-black via-[#070707] to-[#363434]'>

            <section className='text-center lg:w-[50%] xl:w-[40%] mx-auto px-4 bg-black lg:rounded-lg lg:bg-gradient-to-t from-[#141414] via-[#070707] to-black py-10'>

                {/* logo and h2 */}
                <div className='mb-6 flex flex-col gap-4'>
                    <figure className='w-[20%] mx-auto'>
                        <img src="https://res.cloudinary.com/dy6x06uoe/image/upload/v1750551640/icon_phm0sp.svg" alt="logo" />
                    </figure>
                    <h2 className='text-2xl font-bold tracking-tighter'>{title}</h2>
                </div>

                {children}

                {/* have account -> login (route) else -> register (route*/}
                <div className='mt-5 lg:flex justify-center items-center gap-2'>
                    <p>{haveAccount}</p>
                    <Link className='font-bold pt-3 lg:pt-0 underline' to={route}>{linkName}</Link>
                </div>

            </section>

        </main>
    )
}
