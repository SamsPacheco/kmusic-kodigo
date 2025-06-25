import React from 'react'

export const Carrousel = ({carousel, title}) => {
  return (
    <>
    <h2 className='text-lg xl:text-2xl font-bold'>{title}</h2>
      <section className='mt-2 flex gap-5 lg:gap-3 overflow-x-scroll pr-[440px] md:pr-[125px] lg:pr-[0px] hide-scrollbar'>
        {carousel.map( (card, index) => <article className='min-w-[200px] xl:min-w-[0px] text-white my-2' key={index}>
          <figure className='overflow-hidden'>
            <img src={card.picture_url} alt="album-preview" className='rounded-md'/>
          </figure>
          <p className='text-[#d0cdcd] text-[15px] py-2'>{card.description}</p>
        </article>)}
      </section>
    </>
  )
}
