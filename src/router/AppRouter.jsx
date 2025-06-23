import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthRouter } from '../auth/router/AuthRouter'
import { HomePage } from '../pages/HomePage'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/auth/*' element = { <AuthRouter /> } />

        {/* homePage */}
        <Route path='/' element = { <HomePage /> } />

        {/* si el usuario quier ir a alguna ruta y esta no esite  */}
        <Route path='/*' element = { <Navigate to = '/'/> } />

    </Routes>
  )
}
