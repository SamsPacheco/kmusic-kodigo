import React from 'react'
import { Library, Music, Navbar } from '../components'


export const HomePage = () => {
  return (
    <>
    <header className='h-[65px]'>
      <Navbar/>
    </header>
    <main className='text-white mt-2'>
      <section className='max-w-[1870px] grid grid-cols-1 xl:grid-cols-[400px_1fr] h-[90dvh] gap-2 mx-auto'>
        <Library/>
        <Music/>
      </section>
    </main>
    </>
  )
}
