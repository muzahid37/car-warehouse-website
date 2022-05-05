import React from "react";

const Login = () => {

    const handleSubmitButton=()=>{
        
    }
  return (
    <div className="container">
      <div className="row">
          <h2 className="text-primary mt-5">Pleace login</h2>
        <div className="col-12">
          <div className="form-container w-50 m-auto mt-5 border">
            <form action="">
              <input className="w-100 mt-2"
                type="email"
                name="email"
                id=""
                placeholder="enter your email address "
                required
              />
              <br />
              <input className="w-100 mt-2"
                type="password"
                name="password"
                id=""
                placeholder="imter your password"
                required
              />
              <br />
              <input type="submit" value="Submit" className="btn-primary border-0 mt-2" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
