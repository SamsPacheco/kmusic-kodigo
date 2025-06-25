import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthRouter } from '../auth/router/AuthRouter'
import { HomePage, LibraryPage } from '../pages'


export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/auth/*' element = { <AuthRouter /> } />

        {/* homePage */}
        <Route path='/' element = { <HomePage /> } />
        {/* library -> only movile */}
        <Route path='/library' element = { <LibraryPage /> } />

        {/* si el usuario quier ir a alguna ruta y esta no esite  */}
        <Route path='/*' element = { <Navigate to = '/'/> } />

    </Routes>
  )
}
