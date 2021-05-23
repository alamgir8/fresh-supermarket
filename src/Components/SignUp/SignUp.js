import React from 'react';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import fbLogo from '../../img/Facebook.png';
import googleLogo from '../../img/goggle.jpg'
import { useContext } from 'react';
import { userContext } from '../../App';
<<<<<<< HEAD
=======
import swal from 'sweetalert';
>>>>>>> 033ecf5 (First commit)



!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const SignUp = () => {
        const [loggedInUser, setLoggedInUser] = useContext(userContext)
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
                let isFormFieldValid = true;
                if (e.target.name === 'email') {
                    isFormFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
                }
                if (e.target.name === 'password') {
                    const isPasswordValid = e.target.value.length > 6;
                    const isPasswordHasNumber = /\d{1}/.test(e.target.value);
                    isFormFieldValid = isPasswordValid && isPasswordHasNumber;
                }
                if (isFormFieldValid) {
                    const newUserInfo = {...user};
                    newUserInfo[e.target.name] = e.target.value;
                    setUser(newUserInfo);
                }

            }

            const handleSubmit = (e) => {
                if (user.email && user.password) {
                    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                    .then((result) => {
                    const newUserInfo = {...user};
                    newUserInfo.error = '';
                    setUser(newUserInfo);
                    updateUserName(user.name);
<<<<<<< HEAD
                    alert('Account created successfully!!')
                    })
                    .catch((error) => {
=======
                    swal({
                        title: "Account Created Successfully!",
                        icon: "success",
                      });
                    })
                    .catch((error) => {
                        swal({
                            title: "Sign Up Error!",
                            icon: "error",
                          });
>>>>>>> 033ecf5 (First commit)
                    const errorMessage = error.message;
                    const newUserInfo = {...user};
                    newUserInfo.error = errorMessage;
                    setUser(newUserInfo)

                    
                    });
                    
                }

                e.preventDefault();
            }
            const updateUserName = name => {
                const user = firebase.auth().currentUser;
            
                user.updateProfile({
                displayName: name,
                
                })
            
            }


    return (
        <div className="sign-up-section mt-5">
                        <div className="container">
                        <div className="login bg-white m-auto mt-5 p-5">
                            <form onSubmit={handleSubmit}>
                                <Form.Group >
                                    <Form.Control  onBlur={handleBlur} name='name' type="text" placeholder='Username' required/>
                                </Form.Group>
                                <Form.Group >
                                    <Form.Control  onBlur={handleBlur} name='email' type="email" placeholder="Email" required/>
                                </Form.Group>
                                 <p className='text-danger'>{user.error}</p>
                                <Form.Group >
                                    <Form.Control  onBlur={handleBlur} name='password' type="password" placeholder='Password' required/>
                                </Form.Group>
<<<<<<< HEAD
                                {/* <Form.Group >
                                    <Form.Control  onBlur={handleBlur} name='confirm-password' type="password" placeholder='Confirm password' required/>
                                </Form.Group> */}
=======
                               
>>>>>>> 033ecf5 (First commit)
                                <button className='btn btn-warning w-100'>Create an account</button>
                            </form>
                            <p className='text-center m-auto pt-4'>Already have an account?  <Link to="/login">Login</Link></p>
                        </div>
                            <p className='text-center mt-5 or'>---------------------Or-----------------------</p>
                        <div className='text-center'>
                            <button className='google-login-button btn text-white' onClick={handleGoogleSignIn}><img src={googleLogo} alt=""/> Continue With Google</button>
                        </div>
                        <div className='text-center py-3'>
                            <button className='btn fb-login-button text-white' onClick={handleFbSignIn}><img src={fbLogo} alt="fbLogo"/> Continue With Facebook</button>
                        </div>
                       
                </div>
            </div>
    );
};

export default SignUp;