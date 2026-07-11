import React, { useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import auth from '../../firebase/firebase.init';


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const authInfo = {
        user,
        setUser,
        loading, 
        setLoading, 
        signInWithGoogle,
    }

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return() => {
            unsubcribe()
        }
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;