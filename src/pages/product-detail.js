import Header from "../components/OtherHeader";
import Footer from "../components/Footer";
import React, { useEffect, useState } from 'react';
import { Apis } from "../helper/ApiEndpoints";
import { axiosRequest } from "../helper/Api";
import { useParams } from 'react-router-dom';
import Sidebar from "../components/Sidebar";
import RelatedProduct from "../components/RelatedProduct"
import Loader from "../components/Loader";

import Navbar from "../components/Navbar";
const ProductDetail = () => {
    const [product, setProduct] = useState({})
    const [isLoading, setIsLoading] = useState(false);
    const [relatedproducts, setRelatedProduct] = useState([])
    const [category, setCategory] = useState([])
    const { id } = useParams();
    useEffect(() => {
        (async () => {
            setIsLoading(true)
            const categoryresult = await axiosRequest(Apis.CategorySubcategory, {}, "get")
            setCategory(categoryresult?.data?.data)
            const productResult = await axiosRequest(Apis.ProductView + `/` + id, {}, "get")
            if (productResult.status == 200) {
                const productListResult = await axiosRequest(Apis.ProductList + `?type=relatedproduct&productId=${id}&categoryId=${productResult?.data?.data?.categoryProduct?.id}&limit=3`, {}, "get")
                setIsLoading(false)
                setRelatedProduct(productListResult?.data?.data)
                setProduct(productResult?.data?.data)
            }
        })()
    }, [])
    return (

        <div id="product-detail">
            {isLoading ? <Loader /> : ""}

            <Header />
            <div className="main-content">
                <div id="wrapper-site">
                    <div id="content-wrapper">
                        <div id="main">
                            <div className="page-home">

                                <Navbar />
                                {/* <nav className="breadcrumb-bg">
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
                                                        <span>Living Room</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span>{product?.categoryProduct?.name}</span>
                                                    </a>
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                </nav> */}
                                <div className="container">
                                    <div className="content">
                                        <div className="row">
                                            <div className="sidebar-3 sidebar-collection col-lg-3 col-md-3 col-sm-4">

                                                <Sidebar category={category} />


                                                <div className="sidebar-block">
                                                    <div className="title-block">
                                                        Best seller
                                                    </div>
                                                    <div className="product-content tab-content">
                                                        <div className="row">
                                                            <div className="item col-md-12">
                                                                <div className="product-miniature item-one first-item d-flex">
                                                                    <div className="thumbnail-container border">
                                                                        <a href="product-detail.html">
                                                                            <img className="img-fluid image-cover" src="img/product/1.jpg" alt="img" />
                                                                            <img className="img-fluid image-secondary" src="img/product/22.jpg" alt="img" />
                                                                        </a>
                                                                    </div>
                                                                    <div className="product-description">
                                                                        <div className="product-groups">
                                                                            <div className="product-title">
                                                                                <a href="product-detail.html">Nulla et justo augue</a>
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
                                                                                    <span className="price">£28.08</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="item col-md-12">
                                                                <div className="product-miniature item-one first-item d-flex">
                                                                    <div className="thumbnail-container border">
                                                                        <a href="product-detail.html">
                                                                            <img className="img-fluid image-cover" src="img/product/2.jpg" alt="img" />
                                                                            <img className="img-fluid image-secondary" src="img/product/11.jpg" alt="img" />
                                                                        </a>
                                                                    </div>
                                                                    <div className="product-description">
                                                                        <div className="product-groups">
                                                                            <div className="product-title">
                                                                                <a href="product-detail.html">Nulla et justo augue</a>
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
                                                                                    <span className="price">£31.08</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="item col-md-12">
                                                                <div className="product-miniature item-one first-item d-flex">
                                                                    <div className="thumbnail-container border">
                                                                        <a href="product-detail.html">
                                                                            <img className="img-fluid image-cover" src="img/product/3.jpg" alt="img" />
                                                                            <img className="img-fluid image-secondary" src="img/product/14.jpg" alt="img" />
                                                                        </a>
                                                                    </div>
                                                                    <div className="product-description">
                                                                        <div className="product-groups">
                                                                            <div className="product-title">
                                                                                <a href="product-detail.html">Nulla et justo augue</a>
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
                                                                                    <span className="price">£20.08</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="col-sm-8 col-lg-9 col-md-9">
                                                <div className="main-product-detail">
                                                    <h2>{product?.name}</h2>
                                                    <div className="product-single row">
                                                        <div className="product-detail col-xs-12 col-md-5 col-sm-5">
                                                            <div className="page-content" id="content">
                                                                <div className="images-container">
                                                                    <div className="js-qv-mask mask tab-content border">
                                                                        {product && product.productImages?.length ? product?.productImages.map((item, index) => {
                                                                            if (index == 0) {
                                                                                return <div id="item1" className="tab-pane fade active in show">
                                                                                    <img src={process.env.REACT_APP_API_URL_SERVICE + item.image} alt="img" />
                                                                                </div>
                                                                            } else {

                                                                                return <div id={"item" + index} className="tab-pane fade">
                                                                                    <img src={process.env.REACT_APP_API_URL_SERVICE + item.image} alt="img" />
                                                                                </div>
                                                                            }
                                                                        })
                                                                            : <div id="item3" className="tab-pane fade">
                                                                                <img src="img/product/1.jpg" alt="img" />
                                                                            </div>
                                                                        }
                                                                        <div className="layer hidden-sm-down" data-toggle="modal" data-target="#product-modal">
                                                                            <i className="fa fa-expand"></i>
                                                                        </div>
                                                                    </div>
                                                                    <ul className="product-tab nav nav-tabs d-flex">
                                                                        {product && product.productImages?.length ? product?.productImages.map((item, index) => {
                                                                            if (index == 0) {
                                                                                return <li className="active col">
                                                                                    <a href="#item1" data-toggle="tab" aria-expanded="true" className="active show">
                                                                                        <img src={process.env.REACT_APP_API_URL_SERVICE + item.image} alt="img" />
                                                                                    </a>
                                                                                </li>

                                                                            } else {

                                                                                return <li className="col">
                                                                                    <a href="#item2" data-toggle="tab">
                                                                                        <img src={process.env.REACT_APP_API_URL_SERVICE + item.image} alt="img" />
                                                                                    </a>
                                                                                </li>
                                                                            }
                                                                        })
                                                                            : <li className="col">
                                                                                <a href="#item2" data-toggle="tab">
                                                                                    <img src="img/product/1.jpg" alt="img" />
                                                                                </a>
                                                                            </li>
                                                                        }
                                                                    </ul>
                                                                    <div className="modal fade" id="product-modal" role="dialog">
                                                                        <div className="modal-dialog">

                                                                            <div className="modal-content">
                                                                                <div className="modal-header">
                                                                                    <div className="modal-body">
                                                                                        <div className="product-detail">
                                                                                            <div>
                                                                                                <div className="images-container">
                                                                                                    <div className="js-qv-mask mask tab-content">
                                                                                                        <div id="modal-item1" className="tab-pane fade active in show">
                                                                                                            <img src="img/product/1.jpg" alt="img" />
                                                                                                        </div>
                                                                                                        <div id="modal-item2" className="tab-pane fade">
                                                                                                            <img src="img/product/2.jpg" alt="img" />
                                                                                                        </div>
                                                                                                        <div id="modal-item3" className="tab-pane fade">
                                                                                                            <img src="img/product/3.jpg" alt="img" />
                                                                                                        </div>
                                                                                                        <div id="modal-item4" className="tab-pane fade">
                                                                                                            <img src="img/product/5.jpg" alt="img" />
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <ul className="product-tab nav nav-tabs">
                                                                                                        <li className="active">
                                                                                                            <a href="#modal-item1" data-toggle="tab" className=" active show">
                                                                                                                <img src="img/product/1.jpg" alt="img" />
                                                                                                            </a>
                                                                                                        </li>
                                                                                                        <li>
                                                                                                            <a href="#modal-item2" data-toggle="tab">
                                                                                                                <img src="img/product/2.jpg" alt="img" />
                                                                                                            </a>
                                                                                                        </li>
                                                                                                        <li>
                                                                                                            <a href="#modal-item3" data-toggle="tab">
                                                                                                                <img src="img/product/3.jpg" alt="img" />
                                                                                                            </a>
                                                                                                        </li>
                                                                                                        <li>
                                                                                                            <a href="#modal-item4" data-toggle="tab">
                                                                                                                <img src="img/product/5.jpg" alt="img" />
                                                                                                            </a>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-info col-xs-12 col-md-7 col-sm-7">
                                                            <div className="detail-description">
                                                                <div className="price-del">
                                                                    <span className="price">£{product?.productPrice?.price}</span>
                                                                    <span className="float-right">
                                                                        <span className="availb">Availability: </span>
                                                                        <span className="check">
                                                                            <i className="fa fa-check-square-o" aria-hidden="true"></i>IN STOCK</span>
                                                                    </span>
                                                                </div>
                                                                <p className="description">Proin gravida nibh vel velit auctor aliquet. Aenean lorem quis bibendum
                                                                    auctor, nisi elit consequat etiam non auctor.</p>
                                                                <div className="has-border cart-area">
                                                                    <div className="product-quantity">
                                                                        <div className="qty">
                                                                            <div className="input-group">
                                                                                <div className="quantity">
                                                                                    <span className="control-label">QTY : </span>
                                                                                    <input type="text" name="qty" id="quantity_wanted" value="1" className="input-group form-control" />

                                                                                    <span className="input-group-btn-vertical">
                                                                                        <button className="btn btn-touchspin js-touchspin bootstrap-touchspin-up" type="button">
                                                                                            +
                                                                                        </button>
                                                                                        <button className="btn btn-touchspin js-touchspin bootstrap-touchspin-down" type="button">
                                                                                            -
                                                                                        </button>
                                                                                    </span>
                                                                                </div>
                                                                                <span className="add">
                                                                                    <button className="btn btn-primary add-to-cart add-item" data-button-action="add-to-cart" type="submit">
                                                                                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                                                                        <span>Add to cart</span>
                                                                                    </button>
                                                                                    <a className="addToWishlist" href="#">
                                                                                        <i className="fa fa-heart" aria-hidden="true"></i>
                                                                                    </a>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="clearfix"></div>
                                                                    <p className="product-minimal-quantity">
                                                                    </p>
                                                                </div>
                                                                <div className="rating-comment has-border d-flex">
                                                                    <div className="review-description d-flex">
                                                                        <span>REVIEW :</span>
                                                                        <div className="rating">
                                                                            <div className="star-content">
                                                                                <div className="star"></div>
                                                                                <div className="star"></div>
                                                                                <div className="star"></div>
                                                                                <div className="star"></div>
                                                                                <div className="star"></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="read after-has-border">
                                                                        <a href="#review">
                                                                            <i className="fa fa-commenting-o color" aria-hidden="true"></i>
                                                                            <span>READ REVIEWS (3)</span>
                                                                        </a>
                                                                    </div>
                                                                    <div className="apen after-has-border">
                                                                        <a href="#review">
                                                                            <i className="fa fa-pencil color" aria-hidden="true"></i>
                                                                            <span>WRITE A REVIEW</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="content">
                                                                    <p>SKU :
                                                                        <span className="content2">
                                                                            <a href="#">e-02154</a>
                                                                        </span>
                                                                    </p>
                                                                    <p>Categories :
                                                                        <span className="content2">
                                                                            <a href="#">{product?.categoryProduct?.name}</a>
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="review">
                                                        <ul className="nav nav-tabs">
                                                            <li className="active">
                                                                <a data-toggle="tab" href="#description" className="active show">Description</a>
                                                            </li>
                                                            <li>
                                                                <a data-toggle="tab" href="#review">Reviews (2)</a>
                                                            </li>
                                                        </ul>

                                                        <div className="tab-content">
                                                            <div id="description" className="tab-pane fade in active show">
                                                                <p>{product?.description}
                                                                </p>

                                                            </div>

                                                            <div id="review" className="tab-pane fade">
                                                                <div className="spr-form">
                                                                    <div className="user-comment">
                                                                        <div className="spr-review">
                                                                            <div className="spr-review-header">
                                                                                <span className="spr-review-header-byline">
                                                                                    <strong>Peter Capidal</strong> -
                                                                                    <span>Apr 14, 2018</span>
                                                                                </span>
                                                                                <div className="rating">
                                                                                    <div className="star-content">
                                                                                        <div className="star"></div>
                                                                                        <div className="star"></div>
                                                                                        <div className="star"></div>
                                                                                        <div className="star"></div>
                                                                                        <div className="star"></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="spr-review-content">
                                                                                <p className="spr-review-content-body">In feugiat venenatis enim, non finibus metus bibendum
                                                                                    eu. Proin massa justo, eleifend fermentum varius
                                                                                    quis, semper gravida quam. Cras nec enim sed
                                                                                    lacus viverra luctus. Nunc quis accumsan mauris.
                                                                                    Aliquam fermentum sit amet est id scelerisque.
                                                                                    Nam porta risus metus.</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="spr-review preview2">
                                                                            <div className="spr-review-header">
                                                                                <span className="spr-review-header-byline">
                                                                                    <strong>David James</strong> -
                                                                                    <span>Apr 13, 2018</span>
                                                                                </span>
                                                                                <div className="rating">
                                                                                    <div className="star-content">
                                                                                        <div className="star"></div>
                                                                                        <div className="star"></div>
                                                                                        <div className="star"></div>
                                                                                        <div className="star"></div>
                                                                                        <div className="star"></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="spr-review-content">
                                                                                <p className="spr-review-content-body">In feugiat venenatis enim, non finibus metus bibendum
                                                                                    eu. Proin massa justo, eleifend fermentum varius
                                                                                    quis, semper gravida quam. Cras nec enim sed
                                                                                    lacus viverra luctus. Nunc quis accumsan mauris.
                                                                                    Aliquam fermentum sit amet est id scelerisque.
                                                                                    Nam porta risus metus.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <form method="post" action="#" className="new-review-form">
                                                                    <input type="hidden" name="review[rating]" value="3" />
                                                                    <input type="hidden" name="product_id" />
                                                                    <h3 className="spr-form-title">Write a review</h3>
                                                                    <fieldset>
                                                                        <div className="spr-form-review-rating">
                                                                            <label className="spr-form-label">Your Rating</label>
                                                                            <fieldset className="ratings">
                                                                                <input type="radio" id="star5" name="rating" value="5" />
                                                                                <label className="full" for="star5" title="Awesome - 5 stars"></label>
                                                                                <input type="radio" id="star4half" name="rating" value="4 and a half" />
                                                                                <input type="radio" id="star4" name="rating" value="4" />
                                                                                <label className="full" for="star4" title="Pretty good - 4 stars"></label>
                                                                                <input type="radio" id="star3half" name="rating" value="3 and a half" />
                                                                                <input type="radio" id="star3" name="rating" value="3" />
                                                                                <label className="full" for="star3" title="Meh - 3 stars"></label>
                                                                                <input type="radio" id="star2half" name="rating" value="2 and a half" />
                                                                                <input type="radio" id="star2" name="rating" value="2" />
                                                                                <label className="full" for="star2" title="Kinda bad - 2 stars"></label>
                                                                                <input type="radio" id="star1half" name="rating" value="1 and a half" />
                                                                                <input type="radio" id="star1" name="rating" value="1" />
                                                                                <label className="full" for="star1" title="Sucks big time - 1 star"></label>
                                                                                <input type="radio" id="starhalf" name="rating" value="half" />
                                                                            </fieldset>
                                                                        </div>
                                                                    </fieldset>
                                                                    <fieldset className="spr-form-contact">
                                                                        <div className="spr-form-contact-name">
                                                                            <input className="spr-form-input spr-form-input-text form-control" value="" placeholder="Enter your name" />
                                                                        </div>
                                                                        <div className="spr-form-contact-email">
                                                                            <input className="spr-form-input spr-form-input-email form-control" value="" placeholder="Enter your email" />
                                                                        </div>
                                                                    </fieldset>
                                                                    <fieldset>
                                                                        <div className="spr-form-review-body">
                                                                            <div className="spr-form-input">
                                                                                <textarea className="spr-form-input-textarea" rows="10" placeholder="Write your comments here"></textarea>
                                                                            </div>
                                                                        </div>
                                                                    </fieldset>
                                                                    <div className="submit">
                                                                        <input type="submit" name="addComment" id="submitComment" className="btn btn-default" value="Submit Review" />
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <RelatedProduct product={relatedproducts} />
                                                </div>
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
export default ProductDetail