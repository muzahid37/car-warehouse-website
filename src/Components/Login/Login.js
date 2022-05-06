import React from "react";
import { useNavigate } from "react-router-dom";
import SocialLog from "../ShearedPage/SocialLogin/SocialLog";
import auth from "../../firebase.init"
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const navigate=useNavigate();

    const navigatesingup=id=>{
        navigate(`/singup`)
      }

      if(user){
          navigate('/')
      }

      const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;

        signInWithEmailAndPassword(email,password);
        // 
    }
  return (
    <div className="container">
      <div className="row">
          <h2 className="text-primary mt-5">Pleace login</h2>
        <div className="col-12">
          <div className="form-container w-50 m-auto mt-5">
            <form onSubmit={handleLogin} action="">
              <input className="w-100 mt-2"
                type="email"
                name="email"
                id=""
                placeholder="Enter your email address "
                required
              />
              <br />
              <input className="w-100 mt-2"
                type="password"
                name="password"
                id=""
                placeholder="Enter your password"
                required
              />
              <br />
              <input type="submit" value="Submit" className="btn-primary w-50 border-0 mt-2" />
              <p>Have your account? <span onClick={()=>navigatesingup()} className="text-danger  pe-auto">pleace sing up</span></p>
              <p>{error?.message}</p>
            </form>
            <SocialLog></SocialLog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
