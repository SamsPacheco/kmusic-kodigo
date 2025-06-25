import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import library from '../data/library.json'
import recents from '../data/recents.json'

export const Recents = () => {
    const location = useLocation();
  return (
    <>
    {
        location.pathname === '/library' ?
        library.map( (recent, index) => <article className='h-[90px] xl:h-[75px] bg-[#31303b] xl:bg-[#121212] flex items-center justify-start gap-2 xl:gap-3 rounded-md' key={index}>
            <figure className='h-full'>
            <img src={recent.picture_url} alt="" className='w-full h-full object-contain rounded-md' />
            </figure>
            <div>
              <h2 className='text-[19px] pl-2'>{recent.title}</h2>
              <p className='pl-2 text-sm text-[#dedddd]'>{recent.description}</p>
            </div>
            </article>
        )
        :

        recents.map( (recent, index) => <Link to={recent.id === 0 ? '/library' : '/'} className='h-[70px] bg-[#31303b] xl:bg-[#121212] flex items-center justify-start gap-2 xl:gap-3 rounded-md' key={index}>
            <figure className='h-full'>
            <img src={recent.picture_url} alt="" className='w-full h-full object-contain rounded-md' />
            </figure>
            <h2 className='hidden md:block'>{recent.title}</h2>
            <h2 className='tracking-tighter md:hidden'>{recent.title.length > 8 ? recent.title.slice(0, 8) + '..' : recent.title}</h2>
        </Link>)
    }
    </>
  )
}
