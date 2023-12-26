import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { AuthProvider } from '../store/Auth';
import { useAuth } from '../store/Auth';
import '../Scss/Login.scss';

export default function Login() {
  const navigate = useNavigate();
  const {storeTokenInLS}=useAuth()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {email,password}=formData;
    try {
      const res = await fetch("http://localhost:4000/Login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        email,password
      })
    });
    if(res.ok){
      const data=await res.json();
      console.log(data)
      storeTokenInLS(data.token)
      //localStorage.setItem("token",data.token)
      window.alert("loggedin successfully")
      navigate("/")
     } 
    
    else{
      window.alert("Invalid Credentials")
    }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <section className="login-section">
      <div className="container login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <div className="d-flex align-items-center mb-3 pb-1">
            <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }}></i>
            <span className="h1 fw-bold mb-0"></span>
          </div>

          <h2 className="text-uppercase text-center mb-5">Sign in</h2>
          <div className="form-outline mb-4">
            <input
              name="email"
              type="email"
              id="form2Example17"
              className="form-control form-control-lg"
              onChange={handleChange}
            />
            <label className="form-label" htmlFor="form2Example17" name="email">
              Email address
            </label>
          </div>

          <div className="form-outline mb-4">
            <input
              name="password"
              type="password"
              id="form2Example27"
              className="form-control form-control-lg"
              onChange={handleChange}
            />
            <label className="form-label" htmlFor="form2Example27" name="password">
              Password
            </label>
          </div>

          <div className="pt-1 mb-4">
            <button className="btn btn-dark btn-lg btn-block" type="submit" style={{ backgroundColor: '#146C94' }}>
              Login
            </button>
          </div>

          <a className="small text-muted" href="#!">
            Forgot password?
          </a>
          <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
            Don't have an account? <a href="/signup" style={{ color: '#393f81' }}>Register here</a>
          </p>
          <a href="#!" className="small text-muted">
            Terms of use.
          </a>
          <a href="#!" className="small text-muted">
            Privacy policy
          </a>
        </form>
      </div>
    </section>
  );
}