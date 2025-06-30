import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthRouter } from '../auth/router/AuthRouter'
import { HomePage, LibraryPage } from '../pages'
import { PrivateRoutes } from './PrivateRoutes'


export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/auth/*' element = { <AuthRouter /> } />

        <Route path='/' element = { 
          <PrivateRoutes>
            <HomePage />
          </PrivateRoutes>
          }
        />

        <Route path='/library' element = { 
          <PrivateRoutes>
            <LibraryPage />
          </PrivateRoutes>
          }
        />

        <Route path="*" element={<Navigate to="/" />} />

    </Routes>
  )
}
