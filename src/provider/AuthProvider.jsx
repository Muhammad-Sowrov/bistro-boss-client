import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";
const auth = getAuth(app);


export const AuthContext = createContext(null);



const AuthProvider = ({ children }) => {



  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const axiosPublic = useAxiosPublic();
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const withGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL:photo
    });
}
  

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user being spying");
      setUser(currentUser);
      if (currentUser) {
        // get token and store client
        const userInformation = {
          email: currentUser.email
        };
        axiosPublic.post('/jwt', userInformation)
        .then(res => {
          if (res.data.token) {
            localStorage.setItem('access-token', res.data.token)
          }
        })

        
      }else{
        // TODO: remove token (client side, local storage, caching in memory)
        localStorage.removeItem('access-token')

      }



      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, [axiosPublic]);
  const userInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    updateUserProfile,
    withGoogle
    
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
