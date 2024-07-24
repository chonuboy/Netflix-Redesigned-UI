import React, { useState } from 'react'
import "./signup.css"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { auth } from "../../../../firebase";
import { useNavigate } from 'react-router-dom';
const Signup = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const create = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Creating User
                const user = userCredential.user;
                console.log('User created:', user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log('Error message:', errorMessage);
            });
    };

    const logIn = async (e) => {
        e.preventDefault();
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log('User created:', user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log('Error message:', errorMessage);
            });
        navigate("/");
        window.location.reload();
    }

    return (
        <>  <Navbar />
            <div className='bg_img_gradient'></div>
            <div className='bg'>
                <div className='all'>
                    <div>
                        <h1>Sign In</h1>
                        <form action="" name='user__info'>
                            <input type="text" placeholder='Email or mobile number' className='mail' value={email} onChange={e => setEmail(e.target.value)} />
                            <input type="Password" placeholder='Password' className='password' value={password} onChange={e => setPassword(e.target.value)} />
                            <button className='sign' onClick={logIn}>Sign In</button>
                            <h3 className='or'>OR</h3>
                            <button className='sign__in-code'>Use a sign -in code</button>
                            <p>Forgot Password?</p>
                        </form>
                    </div>
                    <div className='tick'>
                        <input type="checkbox" name='remember' id='remember' />
                        <h5 className='remember__text'>Remember Me</h5>
                    </div>
                    <div className="sign__footer">
                        <p>New to Netflix? <strong onClick={create}>Sign up now</strong></p>
                    </div>
                </div>
            </div>
            <div className='signup__foot'>
                <Footer />
            </div>

        </>
    )
}

export default Signup