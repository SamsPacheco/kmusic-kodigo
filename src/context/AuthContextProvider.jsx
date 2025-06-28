import {useContext, createContext, useState, useEffect} from 'react'
import { GoogleAuthProvider,  signOut, onAuthStateChanged, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { FirebaseAuth } from '../../firebase/firebaseConfig';
import Swal from 'sweetalert2';

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState({}) // datos de la persona que se registro 
    

    const googleSingIn = () => { // login with google
        const provider = new GoogleAuthProvider();
        signInWithPopup(FirebaseAuth, provider);
    }

    const googleSingOut = async() => { // log out with google
        console.log('cierre de sesion')
        await signOut(FirebaseAuth);
    }

    const registerWithEmailAndPassword = async(data) => { // create account with user & password and login 
        try {
            const {email, password, displayName} = data;
            await createUserWithEmailAndPassword(FirebaseAuth, email, password);
            // console.log('displayName ',displayName)
            await updateProfile(FirebaseAuth.currentUser, { displayName }) // actualizamos el usuario para agg el displayName

        } catch (error) {
           console.log(error) 
        }
    }

    const loginWithEmailAndPassword = ({email, password}) => { // login with email 
        // console.log(email, password)
         signInWithEmailAndPassword(FirebaseAuth, email, password)
            .then((userCredential) => {
                console.log('login')
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                // ...
            })
            .catch((error) => {
                Swal.fire({
                title: "Oops...",
                icon: "error",
                text: "Incorrect username or password!",
                draggable: true,
                background: '#1F1F1F',
                color: "#fff",
                confirmButtonColor: "#3f5f95",
            });
            });
    }

    

    useEffect(() => {
        const suscribed = onAuthStateChanged( FirebaseAuth, (currentUser) => {
            if(!currentUser){
                // console.log("no hay usuario suscrito")
                setUser('')
            }else{
                // console.log('usuario actual: ',currentUser);
                setUser(currentUser);
            }
            
            
        })
    
        return  () => suscribed();
    }, [])
    


    return (
        <AuthContext.Provider value={{googleSingIn, user, googleSingOut, registerWithEmailAndPassword, loginWithEmailAndPassword}}>
            {children}
        </AuthContext.Provider>
    )

}

// authentication del usuario 
export const UserAuth = () => {
    return useContext(AuthContext)
}