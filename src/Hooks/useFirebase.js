import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut,onAuthStateChanged  } from "firebase/auth";
import firebsaeInitilization from './../pages/Login/Firebase/firebase.init';

firebsaeInitilization();
const useFirebase=()=>{
    const [user,SetUser]=useState();
    const [isLoding,setIsLoding]=useState(true)

    const auth = getAuth();
    
    //sing in with google
    const singInWithGoogle=()=>{
        setIsLoding(true);
        const googleProvider= new GoogleAuthProvider();
      return  signInWithPopup(auth,googleProvider)
        // .then(result=>{
        //     SetUser(result.user)
        // })
        // .finally(()=>setIsLoding(false))
        
    }

    //log out
    const logOut=()=>{
        setIsLoding(true);
        signOut(auth).then(() => {
       })
       .finally(()=>setIsLoding(false))   
    }
    //user objerbation
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              SetUser(user)
            } else {
              SetUser({})
            }
            setIsLoding(false)
          });
    },[])

    return {
        user,
        singInWithGoogle,
        logOut,
        isLoding,
    }
}

export default useFirebase;