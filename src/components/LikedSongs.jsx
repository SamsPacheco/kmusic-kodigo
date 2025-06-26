import React from 'react'
import musicList from '../data/likedSongs.json'
export const LikedSongs = () => {
  return (
    <main className='rounded-md lg:bg-gradient-to-t from-[#121212] via-[#191919] to-[#262f59] hidden lg:block h-screen  overflow-y-scroll'>

      {/* header "" */}
      <section className='flex items-end gap-5 p-8'>
        <figure className='w-[180px] xl:w-[250px] rounded-lg'>
          <img src="https://res.cloudinary.com/dy6x06uoe/image/upload/v1750638527/liked-songs-640_tuplhm.jpg" alt="liked-img" className='rounded-lg' />
        </figure>
        <div>
          <span className='text-sm text-[#d4d3d3]'>Playlist</span>
          <h1 className='my-3 text-5xl xl:text-7xl font-[1000] tracking-tighter'>Liked Songs</h1>
          <span className='font-semibold'> User - <span className='text-sm text-[#d4d3d3]'>15 songs</span> </span>
        </div>
      </section>

      {/* songs list */}
      <section className='p-8 bg-gradient-to-t from-[#070707] via-[#101010] to-[#0f1325]/70 h-screen'>
        <section className='flex justify-between items-center mb-3'>

          {/* play - aleatory - download icons */}
          <article className='flex items-center gap-4'>
            <span className='w-[45px] xl:w-[55px]'>
              <img src="https://res.cloudinary.com/dy6x06uoe/image/upload/v1750890306/play-button_qpig73.png" alt="play-icon" />
            </span>
            <span className='w-[20px] xl:w-[30px]'>
              <img src="https://res.cloudinary.com/dy6x06uoe/image/upload/v1750719390/simbolo-dibujado-a-mano-de-flechas-aleatoria_dvx9iu.png" alt="aleatory-icon" />
            </span>
            <i className="uil uil-arrow-circle-down text-[25px] xl:text-[35px] text-gray-400"></i>
          </article>

          {/* search - date added list */}
          <article className='space-x-5 flex items-center text-[#d4d3d3]'>
            <i className="uil uil-search text-[15px] xl:text-[20px]"></i>
            <span className='space-x-2'>Date added <i className="uil uil-list-ul text-[15px] xl:text-[23px]"></i></span>
          </article>
        </section>

        {/* table */}
        <section>
          <table className="min-w-full table-auto">
            <thead className="text-left text-sm text-gray-400 border-b border-gray-700">
              <tr>
                <th className="px-4 py-2 w-8">#</th>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Album</th>
                <th className="px-4 py-2">Date added</th>
                <th className="px-4 py-2 w-12 text-center">
                 <i className="uil uil-clock"></i>
                </th>
              </tr>
            </thead>

            <tbody className="text-sm">

              {
                musicList.map((music, index) => <tr key={index} className='border-b border-gray-800 hover:bg-gray-800'>
                  <td className="px-4 py-3">{index + 1}</td>
                  <td className="px-4 py-3 flex items-center gap-3">
                    <img src={music.photo_url} alt="cover" className="w-10 h-10 rounded" />
                    <div>
                      <p className="font-semibold text-white">{music.title}</p>
                      <p className="text-gray-400 text-xs">{music.artis}</p>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-300">{music.album}</td>
                  <td className="px-4 py-3 text-gray-300">{music.dateAdded}</td>
                  <td className="px-4 py-3 text-center text-gray-300">2:59</td>
                </tr>)
              }

            </tbody>
          </table>
        </section>
      </section>

    </main>
  )
}
