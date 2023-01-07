import Header from "../components/OtherHeader";
import Footer from "../components/Footer";
const Myaccount = () => {
    return (
        <div className="user-acount">
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
                                            <span>My Account</span>
                                        </a>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </nav>

                    <div className="acount head-acount">
                        <div className="container">
                            <div id="main">
                                <h1 className="title-page">My Account</h1>
                                <div className="content" id="block-history">
                                    <table className="std table">
                                        <tbody>
                                            <tr>
                                                <th className="first_item">My Name :</th>
                                                <td>David James</td>
                                            </tr>
                                            <tr>
                                                <th className="first_item">Company :</th>
                                                <td>TivaTheme</td>
                                            </tr>
                                            <tr>
                                                <th className="first_item">Address :</th>
                                                <td>123 canberra Street, New York, USA</td>
                                            </tr>
                                            <tr>
                                                <th className="first_item">City :</th>
                                                <td>New York</td>
                                            </tr>
                                            <tr>
                                                <th className="first_item">Postal/Zip Code :</th>
                                                <td>10001</td>
                                            </tr>
                                            <tr>
                                                <th className="first_item">Phone :</th>
                                                <td>0123456789</td>
                                            </tr>
                                            <tr>
                                                <th className="first_item">Country:</th>
                                                <td>USA</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                                <button className="btn btn-primary" data-link-action="sign-in" type="submit">
                                    view Address
                                </button>
                                <div className="order">
                                    <h4>Order
                                        <span className="detail">History</span>
                                    </h4>
                                    <p>You haven't placed any orders yet.</p>
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

export default Myaccount