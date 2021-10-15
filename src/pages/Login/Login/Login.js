import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const {user, singInWithGoogle,setIsLoding}=useAuth();
    const location=useLocation();
    const history=useHistory();
    const redirect_url=location.state?.from || '/booking';

    const handelgoogleLogIn=()=>{
        singInWithGoogle()
       .then(result=>{
        history.push(redirect_url);
       })
    //    .finally(()=>setIsLoding(false))
    }
    return (
        <div className="mb-5 mt-3">
            <h3>please login</h3>
            <button onClick={handelgoogleLogIn} className="btn btn-warning">Sing in with google</button>
        </div>
    );
};

export default Login;