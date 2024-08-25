import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/images/banner.jpg";
import "../pages/OrderSuccess.css";

export default function LoginSignup() {
    const [isSignIn, setIsSignIn] = useState(true);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const toggleForm = () => {
        setIsSignIn(!isSignIn);
        setErrors({});
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone) => {
        return phone.length === 10 && !isNaN(phone);
    };

    const handleSignIn = async (e) => {
        e.preventDefault();
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;

        let validationErrors = {};

        if (!validateEmail(email)) {
            validationErrors.email = 'Please enter a valid email address.';
        }

        if (!password) {
            validationErrors.password = 'Please enter your password.';
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/api/signin', { email, password });
            alert('Signed in successfully!');
            navigate("/home");
            console.log(response.data);
        } catch (error) {
            alert('Sign in failed!');
            console.error(error);
        }
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        const fullname = e.target.elements.fullname.value;
        const phone = e.target.elements.phone.value;
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;

        let validationErrors = {};

        if (!fullname) {
            validationErrors.fullname = 'Please enter your full name.';
        }

        if (!validatePhone(phone)) {
            validationErrors.phone = 'Phone number must be exactly 10 digits.';
        }

        if (!validateEmail(email)) {
            validationErrors.email = 'Please enter a valid email address.';
        }

        if (!password) {
            validationErrors.password = 'Please enter a password.';
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/api/signup', {
                fullname,
                phone,
                email,
                password,
            });
            alert('Signed up successfully!');
            setIsSuccess(true);
            setIsSignIn(true);
            console.log(response.data);
        } catch (error) {
            alert('Sign up failed!');
            console.error(error);
        }
    };

    const sectionStyle = {
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    };

    return (
        <div style={sectionStyle}>
            <div className='login-form'>
                <div className="form-container">
                    <div className={`frame ${!isSignIn && !isSuccess ? 'frame-long' : ''} ${isSuccess ? 'frame-short' : ''}`}>
                        <div className={`nav ${isSuccess ? 'nav-up' : ''}`}>
                            <ul className="links">
                                <li className={isSignIn ? 'signin-active' : 'signin-inactive'}>
                                    <a href="#" className="btn" onClick={toggleForm}>Sign in</a>
                                </li>
                                <li className={!isSignIn ? 'signup-active' : 'signup-inactive'}>
                                    <a href="#" className="btn" onClick={toggleForm}>Sign up</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <form className={`form-signin ${!isSignIn ? 'form-signin-left' : ''}`} onSubmit={handleSignIn}>
                                <label htmlFor="email">Email</label>
                                <input className="form-styling" type="text" name="email" required />
                                {errors.email && <p className="error">{errors.email}</p>}
                                <label htmlFor="password">Password</label>
                                <input className="form-styling" type="password" name="password" required />
                                {errors.password && <p className="error">{errors.password}</p>}
                                <div className="btn-animate">
                                    <button type="submit" className="btn-signin">Sign in</button>
                                </div>
                            </form>

                            <form className={`form-signup ${isSignIn ? '' : 'form-signup-left'}`} onSubmit={handleSignUp}>
                                <label htmlFor="fullname">Full name</label>
                                <input className="form-styling" type="text" name="fullname" required />
                                {errors.fullname && <p className="error">{errors.fullname}</p>}
                                <label htmlFor="phone">Phone</label>
                                <input className="form-styling" type="number" name="phone" required />
                                {errors.phone && <p className="error">{errors.phone}</p>}
                                <label htmlFor="email">Email</label>
                                <input className="form-styling" type="email" name="email" required />
                                {errors.email && <p className="error">{errors.email}</p>}
                                <label htmlFor="password">Password</label>
                                <input className="form-styling" type="password" name="password" required />
                                {errors.password && <p className="error">{errors.password}</p>}
                                <button type="submit" className="btn-signup">Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
