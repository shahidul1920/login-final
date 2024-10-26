import React, { createContext } from 'react'
import app from '../firebase/firebase.init'
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext()

export default function AuthProvider({ children }) {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider()
  const userSign = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
  }

  //google login
  const googleLog = () => {
    signInWithPopup(auth, provider)
  }


  const authInfo = {
    userSign,
    googleLog
  }
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
}
