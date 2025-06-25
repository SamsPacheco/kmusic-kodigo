import React from 'react'
import { Footer, Library, LikedSongs, Navbar} from '../components'


export const LibraryPage = () => {
    return (
        <>
            <header className='h-[60px] hidden lg:block md:my-1'>
                <Navbar />
            </header>

            <main className='max-w-[1890px] grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-2 mx-auto text-white mt-3 h-[90dvh] overflow-y-hidden'>
                
                <Library />
                <LikedSongs />

            </main>

            <Footer />
        </>
    )
}
