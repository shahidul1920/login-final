import React, { createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.init'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext()

const auth = getAuth(app);

export default function AuthProvider({ children }) {
  const provider = new GoogleAuthProvider()

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)


  const userCreate = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
    setLoading(true)
  }

  //google login
  // const googleLog = () => {
  //   return signInWithPopup(auth, provider)
  //   setLoading(true)
  // }

  const googleLog = () => {
    return signInWithPopup(auth, provider)
    .then((result)=>{
      const user = result.user;
      const name = user.displayName;
      const photo = user.photoURL;
      const mail = user.email;
      const userID = user.uid;
      const userinfo = {
        userID,
        name,
        photo,
        mail,
      }
      fetch("http://localhost:3000/users", {
        method: "POST",
        headers:{
          "content-type": "application/json",
        },
        body: JSON.stringify(userinfo)
      })
      .then(res => res.json())
    })
    
    setLoading(true)
  }

  //update user
  const updateUser = (userInf)=>{
    return updateProfile(auth.currentUser, userInf) 
  }

  //login or sign in
  const signinUser =(email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
    setLoading(true)
  }

  useEffect(()=>{
    const scanUserNew = onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser)
      setLoading(false)
    })
    return ()=> scanUserNew() 
  },[]) 

  const userSignOut =()=>{
    return signOut(auth)
  }


  const authInfo = {
    userCreate,
    googleLog,
    user,
    updateUser,
    signinUser,
    userSignOut,
    loading
  }
  
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
}
