import React ,{createContext, useEffect, useState} from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const provider = new GoogleAuthProvider();

const auth = getAuth(app)

const UserContext = ({children}) => {

  const [ user ,setUser] = useState(null);
   const [loading , setLoading] = useState(true);
  const createUser = (email,password) => {
  

      return createUserWithEmailAndPassword(auth,email,password);
   }

   const signIn = (email,password) =>{

    setLoading(true);
    
      return signInWithEmailAndPassword(auth, email, password)
   }
   const logOut = ()=>{
    
      return signOut(auth);
   }
   useEffect(()=> {
    const unSubscribe = onAuthStateChanged(auth,currentUser => {
        console.log('current user inside', currentUser);
        setUser(currentUser);
        setLoading(false);
       
    });
    return () => unSubscribe();
 } ,[])
   const LoginWithGoogle = () => {
    setLoading(true);
      return signInWithPopup(auth, provider)
   }


 const authInfo = {user,loading,createUser,signIn,logOut,LoginWithGoogle}

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default UserContext;