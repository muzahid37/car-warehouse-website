import React from 'react';
import { useNavigate } from 'react-router-dom';
import SocialLog from '../Components/ShearedPage/SocialLogin/SocialLog';

const SingUp = () => {
    const navigate=useNavigate();

    const navigatelogin=id=>{
        navigate(`/login`)
      }

    return (
        <div className="container">
        <div className="row">
            <h2 className="text-primary mt-5">Pleace Sgin up</h2>
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
                <input type="submit" value="Register" className="btn-primary w-50 border-0 mt-2 " />
                <p className='text-left'>Alrady have an  account? <span onClick={()=>navigatelogin()} className="text-danger  pe-auto">pleace login</span></p>
              </form>
              <SocialLog></SocialLog>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SingUp;
