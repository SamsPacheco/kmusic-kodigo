import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <footer className='mt-5 h-[135px] px-2 w-full md:h-[85px] lg:mt-2 lg:justify-center flex flex-col items-center fixed  bottom-0 bg-gradient-to-t from-black via-[#121212]/90 to-transparent xl:bg-black'>
            {/* play */}
            <section className='bg-[#3f5650] w-full flex rounded-md lg:hidden'>
                <figure className='max-w-[70px] rounded-lg'>
                    <img src="https://res.cloudinary.com/dy6x06uoe/image/upload/v1750703529/_6791a167-09b7-4264-b415-d08c7331ceb3_oqccqt.jpg" alt="img-play" className='rounded-lg w-full h-full p-1' />
                </figure>
                {/* song name */}
                <div className='flex justify-between items-center w-[80%] lg:w-[90%] mx-auto'>
                    <div className='text-white leading-4'>
                        <p>Bullet In A Gun</p>
                        <p className='text-sm text-[#cdcccc]'>Imagine Dragons</p>
                    </div>
                    {/* device & play */}
                    <div className='space-x-3 lg:space-x-5 text-white pr-3'>
                        <i className="uil uil-boombox text-2xl lg:text-3xl"></i>
                        <i className="uil uil-play text-2xl lg:text-3xl"></i>
                    </div>
                </div>
            </section>

            {/* phone footer */}
            <section className='text-[#dadada] flex items-center justify-around w-full py-1 md:hidden'>
                
                <Link to='/'>
                    <span className='flex flex-col justify-center items-center text-[15px]'>
                        <i className="uil uil-estate text-2xl"></i>
                        Home
                    </span>
                </Link>

                <span className='flex flex-col justify-center items-center text-[15px]'>
                    <i className="uil uil-search text-2xl"></i>
                    Search
                </span>

                <Link to='/library'>
                    <span className='flex flex-col justify-center items-center text-[15px]'>
                        <i className="uil uil-book-alt text-2xl"></i>
                        Library
                    </span>
                </Link>

                <span className='flex flex-col justify-center items-center text-[15px]'>
                    <i className="uil uil-plus text-2xl"></i>
                    Create
                </span>
            </section>

            {/* desktop footer */}
            <section className='hidden w-full lg:grid grid-cols-[1fr_470px_1fr] lg:grid-cols-[1fr_950px_1fr] place-items-stretch gap-5 px-4 bg-[#121212]'>
                {/* song name */}
                <div className='flex'>
                    <figure className='max-w-[70px] rounded-lg'>
                        <img src="https://res.cloudinary.com/dy6x06uoe/image/upload/v1750703529/_6791a167-09b7-4264-b415-d08c7331ceb3_oqccqt.jpg" alt="img-play" className='rounded-lg w-full h-full p-1' />
                    </figure>
                    <div className='flex justify-between items-center w-[80%] lg:w-[90%] mx-auto px-3'>
                        <div className='text-white leading-4 xl:leading-5'>
                            <p className='xl:text-[20px]'>Bullet In A Gun</p>
                            <p className='text-sm xl:text-[15px] text-[#cdcccc]'>Imagine Dragons</p>
                        </div>
                    </div>
                </div>

                {/* controls */}
                <div>
                    <div className='text-white flex justify-center items-center gap-3'>
                        <span className='w-[25px] h-[30px] lg:w-[30px] lg:h-[35px] p-1 flex items-center'>
                            <img src="https://res.cloudinary.com/dy6x06uoe/image/upload/v1750719390/simbolo-dibujado-a-mano-de-flechas-aleatoria_dvx9iu.png" alt="aleatoruo icon" className='w-full' />
                        </span>

                        <span className='w-[25px] h-[30px] lg:w-[30px] lg:h-[35px] p-1 flex item-center gap-3'>
                            <img src="https://res.cloudinary.com/dy6x06uoe/image/upload/v1750720035/anterior_eohpad.png" alt="aleatoruo icon" className='w-full' />
                        </span>

                        <span className='w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] p-1 flex item-center gap-3'>
                            <img src="https://res.cloudinary.com/dy6x06uoe/image/upload/v1750720035/boton-de-pausa_j2029r.png" alt="aleatoruo icon" className='w-full' />
                        </span>

                        <span className='w-[25px] h-[30px] lg:w-[30px] lg:h-[35px] p-1 flex item-center gap-3'>
                            <img src="https://res.cloudinary.com/dy6x06uoe/image/upload/v1750720036/siguiente-icono_w5tp7d.png" alt="aleatoruo icon" className='w-full' />
                        </span>

                        <span className='w-[25px] h-[30px] lg:w-[30px] lg:h-[35px] p-[3px] flex item-center gap-3'>
                            <img src="https://res.cloudinary.com/dy6x06uoe/image/upload/v1750720035/repetir_jbeqwh.png" alt="aleatoruo icon" className='w-full' />
                        </span>

                    </div>

                    {/* line time - song */}
                    <div className='text-[#a5a5a5] grid grid-cols-[1fr_350px_1fr] lg:grid-cols-[1fr_850px_1fr]  place-items-center'>
                        <span>0:00</span>
                        <div className='h-[2px] lg:h-[3px] w-full border border-[#959494] rounded-md flex items-center'>
                            <span className='w-[40%] h-[1px] lg:h-[2px] border border-white'></span>
                        </div>
                        <span>4:49</span>
                    </div>
                </div>

                {/* icons - microphone - list - device - volume - chomercast and full screen */}
                <div className='flex items-center justify-between xl:justify-end gap-4 pr-3'>
                    <span>
                        <img className='w-[20px]' src="https://res.cloudinary.com/dy6x06uoe/image/upload/v1750786345/microfono_upvykk.png" alt="microphone-icon" />
                    </span>

                    <span>
                        <img className='w-[20px]' src="https://res.cloudinary.com/dy6x06uoe/image/upload/v1750786345/list_ei7eyp.png" alt="list-icon" />
                    </span>

                    <span>
                        <img className='w-[20px]' src="https://res.cloudinary.com/dy6x06uoe/image/upload/v1750786345/device_ewasnm.png" alt="device" />
                    </span>

                    <span>
                        <img className='w-[20px]' src="https://res.cloudinary.com/dy6x06uoe/image/upload/v1750786345/volume_td11kf.png" alt="volume-icon" />
                    </span>

                    {/* volume line */}
                    <span className='h-[1px] w-[20%] border border-white rounded-md'></span>

                    <span>
                        <img className='w-[22px]' src="https://res.cloudinary.com/dy6x06uoe/image/upload/v1750786345/chromecast_y3rhsr.png" alt="chomercast-icon" />
                    </span>

                    <span>
                        <img className='w-[20px]' src="https://res.cloudinary.com/dy6x06uoe/image/upload/v1750786345/expand_vifnpg.png" alt="full-screen-icon" />
                    </span>

                </div>
            </section>
        </footer>
    )
}
