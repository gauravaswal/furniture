
const CartDropdown = () => {
    return (
            <div className="desktop_cart d-flex align-items-center">
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
    )
}

export default CartDropdown