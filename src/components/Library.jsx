import { Recents } from './Recents'
import { useLocation } from 'react-router-dom'


export const Library = () => {
  const location = useLocation();
  return (
    <section className={`px-5 space-y-3 xl:bg-[#121212] rounded-md xl:px-[8px] ${ location.pathname === '/' && 'hidden' } xl:block`}>
      {/* library */}
      <section className='text-white pt-3 xl:p-5 space-y-5 xl:px-3 fixed top-0 left-0 right-0 px-4 lg:static bg-black h-28  xl:bg-[#121212]'>
        <article className='flex justify-between items-center'>
          <div className='flex gap-3 justify-start items-center'>
            <span className='w-10 h-10 rounded-full bg-[#3f5f95] flex  justify-center items-center cursor-pointer text-xl lg:hidden'>S</span>
            <h3 className='text-[25px] tracking-tight font-semibold'>Your Library</h3>
          </div>
          <div className='space-x-5 text-2xl'>
            <i className="uil uil-search"></i>
            <i className="uil uil-plus text-[28px]"></i>
          </div>
        </article>

        {/* options */}
        <article className='space-x-3'>
          <span className='px-[14px] bg-[#333333] py-[10px] text-sm rounded-2xl'>Playlists</span>
          <span className='px-[14px] bg-[#333333] py-[10px] text-sm rounded-2xl'>Podcasts</span>
          <span className='px-[14px] bg-[#333333] py-[10px] text-sm rounded-2xl'>Albums</span>
          <span className='px-[14px] bg-[#333333] py-[10px] text-sm rounded-2xl'>Artists</span>
        </article>
      </section>

      {/* recent icon */}
      <section className='h-screen md:h-auto lg:pt-0 pt-[100px] space-y-3 lg:px-2 overflow-y-scroll pb-[170px] md:pb-[98px] lg:pb-0 lg:overflow-auto '>
        <div className='flex justify-between items-center px-3 lg:hidden'>
        <span className='tracking-tighter'>
          <i className="uil uil-arrow-down text-2xl"></i>
          <i className="uil uil-arrow-up text-2xl pr-1"></i>
          Recents
        </span>
        <i className="uil uil-apps text-2xl"></i>
      </div>
        <Recents />
      </section>
    </section>
  )
}
