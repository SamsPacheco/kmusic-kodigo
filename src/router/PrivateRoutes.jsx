import { UserAuth } from '../context/AuthContextProvider'
import { Navigate } from 'react-router-dom';

export const PrivateRoutes = ({children}) => {
    // const first = useContext(second)
    const {user} = UserAuth();
    
  return (user.isLoged === 'no-authenticated') ? 
  
        <Navigate to = '/auth/login' />
     : 
        children
   
  
}
