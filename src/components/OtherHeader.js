import { Link } from "react-router-dom";

const OtherHeader = () => {
    return (
        <>
            <header>
                <div className="header-mobile d-md-none">
                    <div className="mobile hidden-md-up text-xs-center d-flex align-items-center justify-content-around">

                        <div id="mobile_mainmenu" className="item-mobile-top">
                            <i className="fa fa-bars" aria-hidden="true"></i>
                        </div>

                        <div className="mobile-logo">
                            <Link to="/">
                                <img className="logo-mobile img-fluid" src="img/home/logo-mobie.png" alt="Prestashop_Furnitica" />
                            </Link>
                        </div>

                        <div className="mobile-menutop" data-target="#mobile-pagemenu">
                            <i className="zmdi zmdi-more"></i>
                        </div>
                    </div>

                    <div id="mobile_search" className="d-flex">
                        <div id="mobile_search_content">
                            <form method="get" action="#">

                                <input type="text" name="s" value="" placeholder="Search" />
                                <button type="submit">
                                    <i className="fa fa-search"></i>
                                </button>
                            </form>
                        </div>
                        <div className="desktop_cart">
                            <div className="blockcart block-cart cart-preview tiva-toggle">
                                <div className="header-cart tiva-toggle-btn">
                                    <span className="cart-products-count">1</span>
                                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                </div>
                                <div className="dropdown-content">
                                    <div className="cart-content">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className="product-image">
                                                        <a href="product-detail.html">
                                                            <img src="img/product/5.jpg" alt="Product" />
                                                        </a>
                                                    </td>
                                                    <td>
                                                        <div className="product-name">
                                                            <a href="product-detail.html">Organic Strawberry Fruits</a>
                                                        </div>
                                                        <div>
                                                            2 x
                                                            <span className="product-price">£28.98</span>
                                                        </div>
                                                    </td>
                                                    <td className="action">
                                                        <a className="remove" href="#">
                                                            <i className="fa fa-trash-o" aria-hidden="true"></i>
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr className="total">
                                                    <td colspan="2">Total:</td>
                                                    <td>£92.96</td>
                                                </tr>

                                                <tr>
                                                    <td colspan="3" className="d-flex justify-content-center">
                                                        <div className="cart-button">
                                                            <a href="product-cart.html" title="View Cart">View Cart</a>
                                                            <a href="product-checkout.html" title="Checkout">Checkout</a>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="header-top d-xs-none ">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-2 col-md-2 d-flex align-items-center">
                                <div id="logo">
                                    <Link to="/">
                                        <img src="img/home/logo.png" alt="logo" className="img-fluid" />
                                    </Link>
                                </div>
                            </div>

                            <div className="col-sm-5 col-md-5 align-items-center justify-content-center navbar-expand-md main-menu">
                                <div className="menu navbar collapse navbar-collapse">
                                    <ul className="menu-top navbar-nav">
                                        <li>
                                            <a href="#" className="parent">Home</a>
                                        </li>
                                        <li>
                                            <a href="#" className="parent">Blog</a>
                                        </li>
                                        <li className="nav-link">
                                            <a href="#" className="parent">Products</a>
                                        </li>
                                        <li>
                                            <a href="contact.html" className="parent">Contact US</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-sm-5 col-md-5 d-flex align-items-center justify-content-end" id="search_widget">
                                <form method="get" action="#">

                                    <span role="status" aria-live="polite" className="ui-helper-hidden-accessible"></span>
                                    <input type="text" className="ui-autocomplete-input" name="s" placeholder="Search" />
                                    <button type="submit">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </form>

                                <div id="block_myaccount_infos" className="hidden-sm-down dropdown">
                                    <div className="myaccount-title ">
                                        <a href="#acount" data-toggle="collapse" className="acount">
                                            <i className="fa fa-user" aria-hidden="true"></i>
                                            <span>Account</span>
                                            <i className="fa fa-angle-down" aria-hidden="true"></i>
                                        </a>

                                    </div>

                                    <div id="acount" className="collapse">

                                        <div className="account-list-content">

                                            <div>
                                                <Link to="/signin" className="login" >
                                                    <i className="fa fa-cog"></i>
                                                    <span>My Account</span>
                                                </Link>
                                            </div>
                                            <div>
                                                <Link to="/signin" className="login" >
                                                    <i className="fa fa-sign-in"></i>
                                                    <span>Sign in</span>
                                                </Link>
                                            </div>
                                            <div>
                                                <Link to="/signup" className="register" >
                                                    <i className="fa fa-user"></i>
                                                    <span>Register Account</span>
                                                </Link>
                                            </div>
                                            <div>
                                                <Link to="/checkout" className="check-out" >
                                                    <i className="fa fa-check" aria-hidden="true"></i>
                                                    <span>Checkout</span>
                                                </Link>
                                            </div>
                                            <div className="link_wishlist">
                                                <Link to="/wishlist" className="check-out" >
                                                    <i className="fa fa-heart"></i>
                                                    <span>My Wishlists</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="desktop_cart">
                                    <div className="blockcart block-cart cart-preview tiva-toggle">
                                        <div className="header-cart tiva-toggle-btn">
                                            <span className="cart-products-count">1</span>
                                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                        </div>
                                        <div className="dropdown-content">
                                            <div className="cart-content">
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td className="product-image">
                                                                <a href="product-detail.html">
                                                                    <img src="img/product/5.jpg" alt="Product" />
                                                                </a>
                                                            </td>
                                                            <td>
                                                                <div className="product-name">
                                                                    <a href="product-detail.html">Organic Strawberry Fruits</a>
                                                                </div>
                                                                <div>
                                                                    2 x
                                                                    <span className="product-price">£28.98</span>
                                                                </div>
                                                            </td>
                                                            <td className="action">
                                                                <a className="remove" href="#">
                                                                    <i className="fa fa-trash-o" aria-hidden="true"></i>
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr className="total">
                                                            <td colspan="2">Total:</td>
                                                            <td>£92.96</td>
                                                        </tr>

                                                        <tr>
                                                            <td colspan="3" className="d-flex justify-content-center">
                                                                <div className="cart-button">
                                                                    <a href="product-cart.html" title="View Cart">View Cart</a>
                                                                    <a href="product-checkout.html" title="Checkout">Checkout</a>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}
export default OtherHeader