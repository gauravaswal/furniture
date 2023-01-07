const RelatedProduct = (props) => {
    return (
        <>
            <div className="related">
                <div className="title-tab-content  text-center">
                    <div className="title-product justify-content-start">
                        <h2>Related Products</h2>
                    </div>
                </div>
                <div className="tab-content">
                    <div className="row">
                        {props.product.map(item => {

                            return <div className="item text-center col-md-4">
                                <div className="product-miniature js-product-miniature item-one first-item">
                                    <div className="thumbnail-container border">
                                        {item?.productImages.length ? 
                                           <img src={process.env.REACT_APP_API_URL_SERVICE + item?.productImages[0]?.image} className="img-fluid image-cover" alt="img" />
                                        : <a href="product-detail.html">
                                            <img className="img-fluid image-cover" src="img/product/3.jpg" alt="img" />
                                            <img className="img-fluid image-secondary" src="img/product/14.jpg" alt="img" />
                                        </a>
                                        }

                                        <div className="highlighted-informations">
                                            <div className="variant-links">
                                                <a href="#" className="color beige" title="Beige"></a>
                                                <a href="#" className="color orange" title="Orange"></a>
                                                <a href="#" className="color green" title="Green"></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-description">
                                        <div className="product-groups">
                                            <div className="product-title">
                                                <a href="product-detail.html">{item?.name}</a>
                                            </div>
                                            <div className="rating">
                                                <div className="star-content">
                                                    <div className="star"></div>
                                                    <div className="star"></div>
                                                    <div className="star"></div>
                                                    <div className="star"></div>
                                                    <div className="star"></div>
                                                </div>
                                            </div>
                                            <div className="product-group-price">
                                                <div className="product-price-and-shipping">
                                                    <span className="price">£{item?.productPrice?.price}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-buttons d-flex justify-content-center">
                                            <form action="#" method="post" className="formAddToCart">
                                                <a className="add-to-cart" href="#" data-button-action="add-to-cart">
                                                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                                </a>
                                            </form>
                                            <a className="addToWishlist" href="#" data-rel="1" onClick="">
                                                <i className="fa fa-heart" aria-hidden="true"></i>
                                            </a>
                                            <a href="#" className="quick-view hidden-sm-down" data-link-action="quickview">
                                                <i className="fa fa-eye" aria-hidden="true"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        })}


                    </div>
                </div>
            </div>
        </>
    )

}
export default RelatedProduct