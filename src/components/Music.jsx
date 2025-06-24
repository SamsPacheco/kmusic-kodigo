import recents from '../data/recents.json'
import carousel1 from '../data/carousel_1.json'
import carousel2 from '../data/carousel_2.json'
import { Carrousel } from './Carrousel'


export const Music = () => {

  
  return (
    <main className='p-5 rounded-md lg:bg-gradient-to-t from-[#121212] via-[#070707] to-[#2f2659]'>
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
      {recents.map( (recent, index) => <article className='h-[70px] bg-[#31303b] flex items-center gap-2 xl:gap-3 rounded-md' key={index}>
        <figure className='h-full'>
          <img src={recent.picture_url} alt="" className='w-full h-full object-contain rounded-md' />
        </figure>
        <h2 className='hidden md:block'>{recent.title}</h2>
        <h2 className='tracking-tighter md:hidden'>{recent.title.length > 8 ? recent.title.slice(0, 8) + '..' : recent.title}</h2>
      </article>)}
    </section>

    {/* carrousels It's New Music! */}

    <section className='mt-3 min-w-[100dvh] overflow-hidden'>
      <Carrousel carousel={carousel1} title="It's New Music!" />
    </section>

    <section className='mt-3 min-w-[100dvh]'>
      <Carrousel carousel={carousel2} title="Your top mixes" />
    </section>
    
    </main>
  )
}
