import {useContext, createContext, useState, useEffect} from 'react'
import { GoogleAuthProvider,  signOut, onAuthStateChanged, signInWithPopup, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { FirebaseAuth } from '../../firebase/firebaseConfig';

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState({}) // datos de la persona que se registro 
    

    const googleSingIn = () => { // inicio de sesion 
        const provider = new GoogleAuthProvider();
        signInWithPopup(FirebaseAuth, provider);
    }

    const googleSingOut = async() => {
        console.log('cierre de sesion')
        await signOut(FirebaseAuth);
    }

    const registerWithEmailAndPassword = async(data) => {
        try {
            const {email, password, displayName} = data;
            await createUserWithEmailAndPassword(FirebaseAuth, email, password);
            await updateProfile(FirebaseAuth.currentUser, { displayName }) // actualizamos el usuario para agg el displayName

        } catch (error) {
           console.log(error) 
        }
    }

    

    useEffect(() => {
        const suscribed = onAuthStateChanged( FirebaseAuth, (currentUser) => {
            if(!currentUser){
                // console.log("no hay usuario suscrito")
                setUser('')
            }else{
                // console.log('usuario actual: ',currentUser);
                const {displayName, email} = currentUser
                setUser({displayName, email});
            }
            
            
        })
    
        return  () => suscribed();
    }, [])
    


    return (
        <AuthContext.Provider value={{googleSingIn, user, googleSingOut, registerWithEmailAndPassword}}>
            {children}
        </AuthContext.Provider>
    )

}

// authentication del usuario 
export const UserAuth = () => {
    return useContext(AuthContext)
}