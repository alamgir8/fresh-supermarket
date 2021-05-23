import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import fbLogo from '../../img/Facebook.png';
import googleLogo from '../../img/goggle.jpg';
import './Login.css'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { useState } from 'react';
import { useContext } from 'react';
import { userContext } from '../../App';
import swal from 'sweetalert';




!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const [user, setUser] = useState({
            name: '',
            email: '',
            password: '',
            error: ''
        })


    const googleProvider = new firebase.auth.GoogleAuthProvider();
            const handleGoogleSignIn = () => {
                    firebase.auth()
                    .signInWithPopup(googleProvider)
                    .then((result) => {
                    const user = result.user;
                    setLoggedInUser(user);
                    history.replace(from);
                            
                    }).catch((error) => {
                    const errorMessage = error.message;
                    const email = error.email;
                    console.log(errorMessage, email);
                    });
                }

    const fbProvider = new firebase.auth.FacebookAuthProvider();
            const handleFbSignIn = () => {
                firebase
                .auth()
                .signInWithPopup(fbProvider)
                .then((result) => {
                    const user = result.user;
                    setLoggedInUser(user);
                    history.replace(from);
                            
                    }).catch((error) => {
                    const errorMessage = error.message;
                    const email = error.email;
                    console.log(errorMessage, email);
                    });
            
                }



    const handleBlur = (e) => {
        let isFormValid = true;
        if (e.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 8;
            const isPasswordHasNumber = /\d{1}/.test(e.target.value);
            isFormValid = isPasswordValid && isPasswordHasNumber;
          }
        if (isFormValid) {
            const newUser = {...user};
            newUser[e.target.name] = e.target.value;
            setUser(newUser);
        }
    }
    const handleSubmit = (e) => {
        if (user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((res) => {
                const user = res.user;
                swal({
                    title: "Login Successfully!",
                    icon: "success",
                  });
                setLoggedInUser(user);
                setUser(user);
                history.replace(from);
           
            })
            
            .catch((error) => {
                swal({
                    title: "Login Error!",
                    icon: "error",
                  });
              const errorMessage = error.message;
              const newUserInfo = {...user};
              newUserInfo.error = errorMessage;
              setUser(newUserInfo);
             });
          }
          e.preventDefault();
    }
    return (
        <div className="login-section mt-5">
              <div className="container">
                <div className="login bg-white m-auto mt-5 p-5">
             
                <form onSubmit={handleSubmit}>
                    <Form.Group >
                        <Form.Control  onBlur={handleBlur} name='email' defaultValue='alamgir1@gmail.com'  type="email" placeholder='Email' required/>
                    </Form.Group>
                        <Form.Group >
                        <Form.Control  onBlur={handleBlur} name='password' defaultValue='abcd1234@@@@####'  type="password" placeholder='Password' required/>
                    </Form.Group>
                        <p className='text-danger'>{}</p>
                        <button className='btn btn-success w-100'>Login</button>
                     <p className='text-center m-auto pt-4'>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                  
                </form>
         </div>
            <p className='text-center mt-5 or'>---------------------Or-----------------------</p>
                  <div className='text-center'>
                      <button className='google-login-button btn text-white' onClick={handleGoogleSignIn}><img src={googleLogo} alt="goggleLogo"/> Continue With Google</button>
                  </div>
                  <div className='text-center py-3'>
                      <button className='btn fb-login-button text-white' onClick={handleFbSignIn}><img src={fbLogo} alt="fbLogo"/> Continue With Facebook</button>
                  </div>
          </div>
        </div>
    );
};

export default Login;