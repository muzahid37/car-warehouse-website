import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SocialLog = () => {
    const [signInWithGoogle, user,  error] = useSignInWithGoogle(auth);

    const navigate=useNavigate();
    if(user){
        navigate('/')
      }
     
    return (
       <div>
            <div className='d-flex align-items-center'>
                 <div style={{height:"1px"}} className='bg-primary w-50'></div>
            <div className='mx-2'>or</div>
            <div style={{height:"1px"}} className='bg-primary w-50'></div>
           

            </div>
            <p>{error?.message}</p>
            <div>
            <button onClick={()=>signInWithGoogle()} className='btn-primary w-50 border-0 text-light'><img src='https://i.ibb.co/vXW9QWM/google-1.png' alt="" /><span>Login with google</span></button>
            </div>
       </div>
    );
};

export default SocialLog;