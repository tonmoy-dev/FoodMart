import React from 'react';
import GoogleButton from 'react-google-button';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {user, logout, signInWithGoogle} = useAuth() || {}

    const handleGoogleSignIn = () =>{
        signInWithGoogle()
    }
    return (
        <div>
            {
                user?.email ?
                <button onClick={logout}>Logout</button>
                :
                <button>Login</button>
            }

<GoogleButton
  onClick={ handleGoogleSignIn }
/>
            
        </div>
    );
};

export default Login;