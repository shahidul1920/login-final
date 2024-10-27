import React, { createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.init'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";

export const AuthContext = createContext()

const auth = getAuth(app);

export default function AuthProvider({ children }) {
  const provider = new GoogleAuthProvider()

  const [user, setUser] = useState(null)


  const userCreate = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  //google login
  const googleLog = () => {
    return signInWithPopup(auth, provider)
  }

  //update user
  const updateUser = (userInf)=>{
    return updateProfile(auth.currentUser, userInf) 
  }

  //login or sign in
  const signinUser =(email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
  }

  useEffect(()=>{
    const scanUserNew = onAuthStateChanged(auth,(currentUser)=>{
      console.log('user scanning');
      setUser(currentUser)
    })
    return ()=> scanUserNew()
  },[])


  const authInfo = {
    userCreate,
    googleLog,
    user,
    updateUser,
    signinUser
  }
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
}
