import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

import PropTypes from 'prop-types'; 
import auth from '../Firebase/firebase.config';
import axios from 'axios';

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    //create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //sign in user
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    //google sign in
    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    //logout
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // observe auth state change to get current user

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('Current value of the current user', currentUser);
           
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = {
                email:userEmail
            }
           
            setUser(currentUser);
            setLoading(false);

            //if user exist ,show token
            if(currentUser){

               

                axios.post('https://book-bliss-server-c9k31lj59-ji-jetus-projects.vercel.app/jwt' ,loggedUser,{withCredentials : true})
                .then(res =>{
                    console.log('token response',res.data);
                })

            }
            else {
                axios.post('https://book-bliss-server-c9k31lj59-ji-jetus-projects.vercel.app/logout',loggedUser,{withCredentials:true})

                .then(res => {
                    console.log(res.data);
                })
            }


        });
        return () => {
            unSubscribe();
        }
    }, [])

    //reuseable 
    const authInfo = { 
        user, 
        loading,
        createUser, 
        signInUser,
        signInWithGoogle,
        logOut 
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;



AuthProvider.propTypes = {
    children: PropTypes.node
}
