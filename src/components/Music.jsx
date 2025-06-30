import recents from '../data/recents.json'
import carousel1 from '../data/carousel_1.json'
import carousel2 from '../data/carousel_2.json'
import carousel3 from '../data/carousel_3.json'

import { Carrousel } from './Carrousel'
import { Recents } from './Recents'


export const Music = () => {

  
  return (
    <section className='p-5 rounded-md lg:bg-gradient-to-t from-[#121212] via-[#212020] to-[#1e1d1d] border'>
      {/* all - Music - Podcast */}
      <section className='text-white lg:flex items-center gap-[6px] mb-5 hidden'>
        <span className='px-3 py-[6px] rounded-2xl bg-[#d3d4d5] text-black'>
          <p>All</p>
        </span>
        <span className='px-3 py-[6px] rounded-2xl bg-[#292929] text-[#cfcfcf]'>
          <p>Music</p>
        </span>
        <span className='px-3 py-[7px] rounded-2xl bg-[#292929] text-[#cfcfcf]'>
          Podcasts
        </span>
      </section>
      
    {/* recents */}
    <section className='grid grid-cols-2 lg:grid-cols-4 gap-2 overflow-hidden'>
      <Recents/>
    </section>

    {/* carrousels It's New Music! */}

    <section className='mt-4 min-w-[100dvh] overflow-hidden'>
      <Carrousel carousel={carousel1} title="It's New Music!" />
    </section>

    <section className='mt-4 min-w-[100dvh]'>
      <Carrousel carousel={carousel2} title="Your top mixes" />
    </section>

    <section className='mt-4 min-w-[100dvh]'>
      <Carrousel carousel={carousel3} title="Best of artist" />
    </section>
    
    </section>
  )
}
