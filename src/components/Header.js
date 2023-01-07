import { Link } from "react-router-dom";
import { LoginUser } from "../components/LoginUser";
import { useNavigate } from "react-router-dom";
import CartDropdown from "../components/CartDropdown"
const Header = () => {
    const navigate = useNavigate();
    const handlelogout = () => {
        localStorage.clear();
        navigate("/signin")
    }
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
                                                        <div className="cart-button d-flex justify-content-center">
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

                <div className="header-top d-xs-none">
                    <div className="row margin-0">

                        <div className="d-flex icon-menu align-items-center justify-content-center">
                            <i className="fa fa-bars" aria-hidden="true" id="icon-menu"></i>
                        </div>
                        <div className="main-menu d-flex align-items-center justify-content-start navbar-expand-md">
                            <div className="menu navbar collapse navbar-collapse">
                                <ul className="menu-top navbar-nav">
                                    <li className="nav-link">
                                        <Link to="/" className="parent">
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <a href="#" className="parent">Blog</a>
                                    </li>
                                    <li>
                                        <Link to="/" className="parent">
                                            Product
                                        </Link>
                                    </li>
                                    <li>
                                        <a href="contact.html" className="parent">Contact US</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex-2 d-flex align-items-center justify-content-center">
                            <div id="logo">
                                <Link to="/">
                                    <img src="img/home/logo.png" alt="logo" />
                                </Link>
                            </div>
                        </div>

                        <div id="search_widget" className="d-flex align-items-center justify-content-end">
                            <div className="search-header-top d-flex align-items-center justify-content-center">
                                <i className="search fa fa-search"></i>
                            </div>
                            <div id="block_myaccount_infos">
                                <div className="myaccount-title hidden-sm-down dropdown d-flex align-items-center justify-content-center">
                                    <a href="#acount" data-toggle="collapse" className="acount">
                                        <i className="fa fa-user" aria-hidden="true"></i>
                                    </a>
                                </div>
                                <div id="acount" className="collapse">
                                    <div className="account-list-content">
                                        <div>
                                            <a className="login" href="user-acount.html" rel="nofollow" title="Log in to your customer account">
                                                <i className="fa fa-cog"></i>
                                                <span>My Account</span>
                                            </a>
                                        </div>
                                        {LoginUser() ? <div>
                                            <div className="login">
                                                <i className="fa fa-sign-in"></i>
                                                <span onClick={handlelogout}>Logout</span>
                                            </div>
                                        </div> : <div style={{margin:"-17px"}}><div>
                                            <Link className="login" to="/signin" >

                                                <i className="fa fa-sign-in"></i>
                                                <span>Sign in</span>
                                            </Link>
                                        </div>
                                            <div>
                                                <Link className="register" to="/signup" >
                                                    <i className="fa fa-user"></i>
                                                    <span>Register Account</span>

                                                </Link>
                                            </div>
                                        </div>
                                        }


                                        <div>
                                            <Link className="check-out" to="/checkout" >
                                                <i className="fa fa-check" aria-hidden="true"></i>
                                                <span>Checkout</span>

                                            </Link>
                                        </div>
                                        <div>
                                            <Link className="check-out" to="/wishlist" >
                                                <i className="fa fa-heart"></i>My Wishlists
                                            </Link>
                                            {/* <a href="user-wishlist.html" title="My Wishlists">
                                                <i className="fa fa-heart"></i>My Wishlists
                                            </a> */}
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <CartDropdown />
                        </div>

                    </div>
                </div>

                <div id="tiva-searchBox" className="d-flex align-items-center text-center active">
                    <div className="container">
                        <span className="tiva-seachBoxClose">
                            <i className="zmdi zmdi-close"></i>
                        </span>
                        <div className="tiva-seachBoxInner">
                            <div className="title-search">
                                <i className="fa fa-search" aria-hidden="true"></i>
                                <span>Search</span>
                            </div>
                            <div className="description">
                                Find your product with fast search. Enter some keyword such as dress, shirts, shoes etc. Or can search by product sku.
                            </div>
                            <div id="search" className="search-widget d-flex justify-content-center">
                                <form method="get" action="#">
                                    <span role="status" aria-live="polite" className="ui-helper-hidden-accessible"></span>
                                    <input type="text" name="s" value="" placeholder="Search" className="ui-autocomplete-input" autocomplete="off" />
                                    <button type="button">
                                        Search
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


        </>
    )
}
export default Header