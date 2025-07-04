import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage'

export const AuthRouter = () => {
  return (
    <Routes>

        <Route path='login' element = { <LoginPage/>} />
        <Route path='register' element = { <RegisterPage/>} />

    </Routes>
  )
}
