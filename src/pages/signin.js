import Header from "../components/OtherHeader"
import Footer from "../components/Footer"
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import React, { useState } from "react"
import { toast } from 'react-toastify';
import { SigninValidation } from "../formValidation"
import { axiosRequest } from "../helper/Api";
import { Apis } from "../helper/ApiEndpoints";
import { useNavigate } from "react-router-dom";

const Signin = () => {
    const [value, setValue] = useState({
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState({
        email: "",
        password: ""
    })
    let navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const validationResult = await SigninValidation(value)
        if (Object.keys(validationResult).length) {
            setErrors(validationResult)
        } else {
            setIsLoading(true)
            let result = await axiosRequest(Apis.Login, value, 'post')
            setIsLoading(false)
            if (result?.data?.code === 200) {
                localStorage.setItem('loginDetail', JSON.stringify(result.data.data));
               navigate("/", { replace: true });
            } else {
                // toast.warn("Warning Notification !")
                console.log("--sucess1111")
            }
        }
    }
    return (
        <div className="user-login blog">
            {isLoading ? <Loader /> : ""}
            <Header />
            <div className="main-content">
                <div className="wrap-banner">
                    <nav className="breadcrumb-bg">
                        <div className="container no-index">
                            <div className="breadcrumb">
                                <ol>
                                    <li>
                                        <a href="#">
                                            <span>Home</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span>Login</span>
                                        </a>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </nav>

                </div>
                <div id="wrapper-site">
                    <div id="content-wrapper" className="full-width">
                        <div id="main">
                            <div className="container">
                                <h1 className="text-center title-page">Log In</h1>
                                <div className="login-form">
                                    <form id="customer-form" onSubmit={handleSubmit} method="post">
                                        <div>
                                            <div className="form-group no-gutters">
                                                <input className="form-control" name="email" onChange={handleChange} value={value?.email} type="email" placeholder=" Email" />
                                                {errors && errors.email ? <span style={{ color: 'red' }}>
                                                    {errors.email}
                                                </span> : ""}
                                            </div>
                                            <div className="form-group no-gutters">
                                                <div className="input-group js-parent-focus">
                                                    <input className="form-control js-child-focus js-visible-password" name="password" value={value?.password} onChange={handleChange} type="password" placeholder="Password" />

                                                </div>
                                                {errors && errors.password ? <span style={{ color: 'red' }}>
                                                    {errors.password}
                                                </span> : ""}
                                            </div>
                                            <div className="no-gutters text-center">
                                                <div className="forgot-password">
                                                    <Link to="/forget-password" >

                                                        Forgot your password?

                                                    </Link>
                                                    {/* <a href="user-reset-password.html" rel="nofollow">
                                                        Forgot your password?
                                                    </a> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="clearfix">
                                            <div className="text-center no-gutters">
                                                <input type="hidden" name="submitLogin" value="1" />
                                                <button className="btn btn-primary" data-link-action="sign-in" type="submit">
                                                    Sign in
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Signin