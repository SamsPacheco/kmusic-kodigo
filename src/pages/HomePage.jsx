import React from 'react'
import { Footer, Library, Music, Navbar } from '../components'


export const HomePage = () => {
  return (
    <>
      <header className='h-[60px]'>
        <Navbar />
      </header>
      
      <main className='text-white mt-3'>
        <section className='max-w-[1890px] grid grid-cols-1 xl:grid-cols-[400px_1fr] gap-2 mx-auto overflow-x-hidden'>
          <Library />
          <Music />
        </section>
      </main>

      <Footer/>
    </>
  )
}
