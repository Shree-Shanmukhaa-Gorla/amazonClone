import React, { useState } from 'react'; 
import './Login.css';
import { Link, useNavigate } from "react-router-dom";
import {auth} from './firebase';

function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault() //prevents refreshing of the page.

        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            navigate('/');
        }).catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault() //prevents refreshing of the page.
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            //success in creating a new user with email and password.
            if(auth){
                //if login is successful, then navigate to the home page with route (/).
                navigate('/');
            }
        }).catch(error => alert(error.message))
    }

  return (
    <div className='login'>
        <Link to='/'> <img className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' /></Link>

        <div className='login__container'>
            <h1>Sign-in</h1>
            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type='Password' value={password} onChange={e => setPassword(e.target.value)}></input>

                <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
            </form>

            <p>
                By signing-in you agree to Shree's Amazon Clone's 
                set of conditions for Use & Sale. Please see 
                our Privacy notice, our Cookies Notice and out 
                interest-Based Ads Notice.
            </p>

            <button onClick={register} className='login__registerButton'>Create your Amazon account</button>
        </div>
    
    </div>


  )
}

export default LoginPage