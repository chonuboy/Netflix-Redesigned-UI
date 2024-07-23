import React from 'react';
import "./login.css";
import { useNavigate } from 'react-router-dom';
import Footer from '../Home/Components/Footer/Footer';

const Login = () => {

  const nav = useNavigate();

  return (
    <>
      <div className='img_gradient'></div>
      <div className='main'>
        <div class="main__content">
          <h1>Unlimited movies, TV shows and more</h1>
          <h3>watch anywhere .cancel anytime.Ready to watch?</h3>
        </div>
        <div class="main__div-email">
          <h3>Enter your email to create or restart your membership.</h3>
          <div>
            <input type="email" placeholder="Email  address" />
            <button onClick={() => nav("/signup")}>Get Started {">"} </button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}


export default Login