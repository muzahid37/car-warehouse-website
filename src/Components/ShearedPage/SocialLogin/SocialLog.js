import React from 'react';

const SocialLog = () => {
    return (
       <div>
            <div className='d-flex align-items-center'>
            <div style={{height:"1px"}} className='bg-primary w-50'></div>
            <div className='mx-2'>or</div>
            <div style={{height:"1px"}} className='bg-primary w-50'></div>

        </div>
        <div>
            <button className='btn-primary w-50 border-0 text-light'><img src='https://i.ibb.co/vXW9QWM/google-1.png' alt="" /><span>Login with google</span></button>
        </div>
       </div>
    );
};

export default SocialLog;