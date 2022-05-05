import React from "react";
import SocialLog from "../ShearedPage/SocialLogin/SocialLog";

const Login = () => {

    const handleSubmitButton=()=>{

    }
  return (
    <div className="container">
      <div className="row">
          <h2 className="text-primary mt-5">Pleace login</h2>
        <div className="col-12">
          <div className="form-container w-50 m-auto mt-5">
            <form action="">
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
              <p>Have your account? <span className="text-danger  pe-auto">pleace sing up</span></p>
            </form>
            <SocialLog></SocialLog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
