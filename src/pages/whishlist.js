import Header from "../components/OtherHeader";
import Footer from "../components/Footer";
const Whishlist = () => {
    return (
        <div className="user-wishlist blog">
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
                                            <span>Wishlists</span>
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
                                        <div id="mywishlist">
                                            <h1 className="title-page">My Wishlists</h1>
                                            <form method="post" className="std" id="customer-form">
                                                <fieldset>
                                                    <h3>New wishlist</h3>
                                                    <div className="input-group">
                                                        <input type="text" id="name" name="name" placeholder="Name" className="form-control" value="" />
                                                        <button className="btn" type="submit" data-action="show-password" data-text-show="Show" data-text-hide="Hide">
                                                            Save
                                                        </button>
                                                    </div>
                                                </fieldset>
                                            </form>
                                            <div id="block-history" className="block-center">
                                                <table className="std table">
                                                    <thead>
                                                        <tr>
                                                            <th className="first_item">Name</th>
                                                            <th className="item mywishlist_first">Qty</th>
                                                            <th className="item mywishlist_first">Viewed</th>
                                                            <th className="item mywishlist_second">Created</th>
                                                            <th className="item mywishlist_second">Direct Link</th>
                                                            <th className="item mywishlist_second">Default</th>
                                                            <th className="last_item mywishlist_first">Delete</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr id="wishlist_1">
                                                            <td>
                                                                <a href="javascript:;" onClick="javascript:WishlistManage('block-order-detail', '1');">My wishlist</a>
                                                            </td>
                                                            <td className="bold align_center">
                                                                3
                                                            </td>
                                                            <td>0</td>
                                                            <td>2018-06-14</td>
                                                            <td>
                                                                <a href="javascript:;" onClick="javascript:WishlistManage('block-order-detail', '1');">View</a>
                                                            </td>
                                                            <td className="wishlist_default">
                                                                <p className="is_wish_list_default">
                                                                    <i className="icon icon-check-square"></i>
                                                                </p>
                                                            </td>
                                                            <td className="wishlist_delete">
                                                                <a href="javascript:;" onClick="return (WishlistDelete('wishlist_1', '1', 'Do you really want to delete this wishlist ?'));">Delete</a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="page-home">
                                                <a className="btn btn-default" href="index-2.html">
                                                    <i className="fa fa-home" aria-hidden="true"></i>
                                                    <span>Homepage</span>
                                                </a>
                                            </div>
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
export default Whishlist