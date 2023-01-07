import Header from "../components/OtherHeader";
import Footer from "../components/Footer";
import React, { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import { axiosRequest } from "../helper/Api";
import { Apis } from "../helper/ApiEndpoints";
const Register = () => {
    const [value, setValue] = useState({
        email: "",
        firstName: "",
        lastName: "",
        password: ""
    })
    const [isLoading, setIsLoading] = useState(false);
    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        let result = await axiosRequest(Apis.Register, value, 'post')
        setIsLoading(false)
        if (result?.data.code == 201) {
            toast.success('successful')
        } else {
            toast.warn("Warning Notification !")
        }

    }
    return (
        <div className="user-register blog">
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
                                            <span>About us</span>
                                        </a>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </nav>
                </div>

                <div id="wrapper-site">
                    <div className="container">
                        <div className="row">
                            <div id="content-wrapper" className="col-xs-12 col-sm-12 col-md-12 col-lg-12 onecol">
                                <div id="main">
                                    <div id="content" className="page-content">
                                        <div className="register-form text-center">
                                            <h1 className="text-center title-page">Create Account</h1>
                                            <form onSubmit={handleSubmit} id="customer-form" className="js-customer-form" method="post">
                                                <div>
                                                    <div className="form-group">
                                                        <div>
                                                            <input className="form-control" name="firstName" onChange={handleChange} type="text" placeholder="First name" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <div>
                                                            <input className="form-control" name="lastName" onChange={handleChange} type="text" placeholder="Last name" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <div>
                                                            <input className="form-control" name="email" onChange={handleChange} type="email" placeholder="Email" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <div>
                                                            <div className="input-group js-parent-focus">
                                                                <input className="form-control js-child-focus js-visible-password" onChange={handleChange} name="password" type="password" placeholder="Password" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="clearfix">
                                                    <div>

                                                        <button className="btn btn-primary" data-link-action="sign-in" type="submit">
                                                            Create Account
                                                        </button>
                                                        <ToastContainer />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
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
export default Register

