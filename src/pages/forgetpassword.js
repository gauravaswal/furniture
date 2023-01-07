import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
    return (
        <div className="user-reset-password blog">
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
                                            <span>User Reset Password</span>
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
                            <div id="content-wrapper" className="onecol">
                                <div id="main">
                                    <div className="page-content">
                                        <form action="#" className="forgotten-password" method="post" id="customer-form">
                                            <h1 className="text-center title-page">User Reset Password</h1>
                                            <div className="form-fields text-center ">
                                                <div className="form-group center-email-fields">
                                                    <div className="email">
                                                        <input type="email" name="email" id="email" value="" className="form-control" placeholder="Email address" />
                                                    </div>
                                                    <div>
                                                        <button className="form-control-submit btn btn-primary" name="submit" type="submit">
                                                            Send reset link
                                                        </button>
                                                    </div>
                                                </div>
                                                <Link to="/signin" className="account-link">

                                                <i className="fa fa-angle-left" aria-hidden="true"></i>
                                                    <span className="text-center">Back to login</span>
                                                </Link>
                                            </div>
                                        </form>
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
export default ForgetPassword