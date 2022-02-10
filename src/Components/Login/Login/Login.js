import React from 'react';
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

            <button onClick={handleGoogleSignIn}>Google Sign In</button>
            
        </div>
    );
};

export default Login;