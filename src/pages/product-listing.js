import React, { useEffect, useState } from "react"
import { Apis } from "../helper/ApiEndpoints";
import { axiosRequest } from "../helper/Api";
import Sidebar from "../components/Sidebar";
import Header from "../components/OtherHeader";
import Navbar from "../components/Navbar";

const ProductListing = () => {
    const [category, setCategory] = useState([])
    const [product, setProduct] = useState([])
    useEffect(() => {

        (async () => {
            const categoryresult = await axiosRequest(Apis.CategorySubcategory, {}, "get")
            const productResult = await axiosRequest(Apis.ProductList + `?type=category&limit=10`, {}, "get")
            setProduct(productResult?.data?.data)
            setCategory(categoryresult?.data?.data)
        })()
    }, [])
    return (
        <div id="product-sidebar-left" class="product-grid-sidebar-left">
            <Header />

            <div class="main-content">
                <div id="wrapper-site">
                    <div id="content-wrapper" class="full-width">
                        <div id="main">
                            <div class="page-home">
                                <Navbar />

                                <div class="container">
                                    <div class="content">
                                        <div class="row">
                                            <div class="sidebar-3 sidebar-collection col-lg-3 col-md-4 col-sm-4">
                                                <div class="sidebar-block">
                                                    <Sidebar category={category} />
                                                </div>
                                                <div class="sidebar-block">
                                                    <div class="title-block">Catalog</div>
                                                    <div class="tiva-filter-price new-item-content sidebar-block">
                                                        <h3 class="title-product">By Price</h3>
                                                        <div id="block_price_filter" class="block">
                                                            <div class="block-content">
                                                                <div id="slider-range" class="tiva-filter">
                                                                    <div class="filter-itemprice-filter">
                                                                        <div class="layout-slider">
                                                                            <input id="price-filter" name="price" value="0;100" />
                                                                        </div>
                                                                        <div class="layout-slider-settings"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-8 col-lg-9 col-md-8 product-container">
                                                <h1>Product Listing</h1>
                                                <div class="js-product-list-top firt nav-top">
                                                    <div class="d-flex justify-content-around row">
                                                        <div class="col col-xs-12">
                                                            <ul class="nav nav-tabs">
                                                                <li>
                                                                    <a href="#grid" data-toggle="tab" class="active show fa fa-th-large"></a>
                                                                </li>
                                                                <li>
                                                                    <a href="#list" data-toggle="tab" class="fa fa-list-ul"></a>
                                                                </li>
                                                            </ul>
                                                            <div class="hidden-sm-down total-products">
                                                                <p>There are 12 products.</p>
                                                            </div>
                                                        </div>
                                                        <div class="col col-xs-12">
                                                            <div class="d-flex sort-by-row justify-content-lg-end justify-content-md-end">

                                                                <div class="products-sort-order dropdown">
                                                                    <select class="select-title">
                                                                        <option value="">Sort by</option>
                                                                        <option value="">Name, A to Z</option>
                                                                        <option value="">Name, Z to A</option>
                                                                        <option value="">Price, low to high</option>
                                                                        <option value="">Price, high to low</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-content product-items">
                                                    <div id="grid" class="related tab-pane fade in active show">
                                                        <div class="row">

                                                            {
                                                                product?.length ? product.map(item => {

                                                                    return <div class="item text-center col-md-4">
                                                                        <div class="product-miniature js-product-miniature item-one first-item">
                                                                            <div class="thumbnail-container border">
                                                                                <a href="product-detail.html">
                                                                                    <img class="img-fluid image-cover" src="img/product/1.jpg" alt="img" />
                                                                                    <img class="img-fluid image-secondary" src="img/product/22.jpg" alt="img" />
                                                                                </a>
                                                                                <div class="highlighted-informations">
                                                                                    <div class="variant-links">
                                                                                        <a href="#" class="color beige" title="Beige"></a>
                                                                                        <a href="#" class="color orange" title="Orange"></a>
                                                                                        <a href="#" class="color green" title="Green"></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="product-description">
                                                                                <div class="product-groups">
                                                                                    <div class="product-title">
                                                                                        <a href="product-detail.html">{item.name}</a>
                                                                                    </div>
                                                                                    <div class="rating">
                                                                                        <div class="star-content">
                                                                                            <div class="star"></div>
                                                                                            <div class="star"></div>
                                                                                            <div class="star"></div>
                                                                                            <div class="star"></div>
                                                                                            <div class="star"></div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="product-group-price">
                                                                                        <div class="product-price-and-shipping">
                                                                                            <span class="price">£{item.productPrice.price}</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="product-buttons d-flex justify-content-center">
                                                                                    <form action="#" method="post" class="formAddToCart">
                                                                                        <input type="hidden" name="id_product" value="1" />
                                                                                        <a class="add-to-cart" href="#" data-button-action="add-to-cart">
                                                                                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                                                                        </a>
                                                                                    </form>
                                                                                    <a class="addToWishlist" href="#" data-rel="1" onclick="">
                                                                                        <i class="fa fa-heart" aria-hidden="true"></i>
                                                                                    </a>
                                                                                    <a href="#" class="quick-view hidden-sm-down" data-link-action="quickview">
                                                                                        <i class="fa fa-eye" aria-hidden="true"></i>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>


                                                                }) : <div>

                                                                    <p>Daa not found</p>

                                                                </div>
                                                            }
                                                        </div>
                                                    </div>
                                                    <div id="list" class="related tab-pane fade">
                                                        <div class="row">
                                                            {
                                                                product?.length ? product.map(item => {
                                                             
                                                                    return    <div class="item col-md-12">
                                                                    <div class="product-miniature item-one first-item">
                                                                        <div class="row">
                                                                            <div class="col-md-4">
                                                                                <div class="thumbnail-container border">
                                                                                    <a href="product-detail.html">
                                                                                        <img class="img-fluid image-cover" src="img/product/1.jpg" alt="img" />
                                                                                        <img class="img-fluid image-secondary" src="img/product/22.jpg" alt="img" />
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-md-8">
                                                                                <div class="product-description">
                                                                                    <div class="product-groups">
                                                                                        <div class="product-title">
                                                                                            <a href="product-detail.html">{item?.name}</a>
                                                                                            <span class="info-stock">
                                                                                                <i class="fa fa-check-square-o" aria-hidden="true"></i>
                                                                                                In Stock
                                                                                            </span>
                                                                                        </div>
                                                                                        <div class="rating">
                                                                                            <div class="star-content">
                                                                                                <div class="star"></div>
                                                                                                <div class="star"></div>
                                                                                                <div class="star"></div>
                                                                                                <div class="star"></div>
                                                                                                <div class="star"></div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="product-group-price">
                                                                                            <div class="product-price-and-shipping">
                                                                                                <span class="price">£{item?.productPrice?.price}</span>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="discription">
                                                                                           {item?.description.substr(0, 250)+"..."}
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="product-buttons d-flex">
                                                                                        <form action="#" method="post" class="formAddToCart">
                                                                                            <a class="add-to-cart" href="#" data-button-action="add-to-cart">
                                                                                                <i class="fa fa-shopping-cart" aria-hidden="true"></i>Add to cart
                                                                                            </a>
                                                                                        </form>
                                                                                        <a class="addToWishlist" href="#" data-rel="1" onclick="">
                                                                                            <i class="fa fa-heart" aria-hidden="true"></i>
                                                                                        </a>
                                                                                        <a href="#" class="quick-view hidden-sm-down" data-link-action="quickview">
                                                                                            <i class="fa fa-eye" aria-hidden="true"></i>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                }) : ""
                                                            }





                                                         
                                                            <div class="item col-md-12">
                                                                <div class="product-miniature js-product-miniature item-one first-item">
                                                                    <div class="row">
                                                                        <div class="col-md-4">
                                                                            <div class="thumbnail-container border">
                                                                                <a href="product-detail.html">
                                                                                    <img class="img-fluid image-cover" src="img/product/2.jpg" alt="img" />
                                                                                    <img class="img-fluid image-secondary" src="img/product/11.jpg" alt="img" />
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-md-8">
                                                                            <div class="product-description">
                                                                                <div class="product-groups">
                                                                                    <div class="product-title">
                                                                                        <a href="product-detail.html">Nulla et justo non augue</a>
                                                                                        <span class="info-stock">
                                                                                            <i class="fa fa-check-square-o" aria-hidden="true"></i>
                                                                                            In Stock
                                                                                        </span>
                                                                                    </div>
                                                                                    <div class="rating">
                                                                                        <div class="star-content">
                                                                                            <div class="star"></div>
                                                                                            <div class="star"></div>
                                                                                            <div class="star"></div>
                                                                                            <div class="star"></div>
                                                                                            <div class="star"></div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="product-group-price">
                                                                                        <div class="product-price-and-shipping">
                                                                                            <span class="price">£31.08</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="discription">
                                                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies eget velit vitae bibendum. Cras condimentum libero
                                                                                        a lectus ultricies...
                                                                                    </div>
                                                                                </div>
                                                                                <div class="product-buttons d-flex">
                                                                                    <form action="#" method="post" class="formAddToCart">
                                                                                        <a class="add-to-cart" href="#" data-button-action="add-to-cart">
                                                                                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>Add to cart
                                                                                        </a>
                                                                                    </form>
                                                                                    <a class="addToWishlist" href="#" data-rel="1" onclick="">
                                                                                        <i class="fa fa-heart" aria-hidden="true"></i>
                                                                                    </a>
                                                                                    <a href="#" class="quick-view hidden-sm-down" data-link-action="quickview">
                                                                                        <i class="fa fa-eye" aria-hidden="true"></i>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="item col-md-12">
                                                                <div class="product-miniature js-product-miniature item-one first-item">
                                                                    <div class="row">
                                                                        <div class="col-md-4">
                                                                            <div class="thumbnail-container border">
                                                                                <a href="product-detail.html">
                                                                                    <img class="img-fluid image-cover" src="img/product/3.jpg" alt="img" />
                                                                                    <img class="img-fluid image-secondary" src="img/product/14.jpg" alt="img" />
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-md-8">
                                                                            <div class="product-description">
                                                                                <div class="product-groups">
                                                                                    <div class="product-title">
                                                                                        <a href="product-detail.html">Nulla et justo non augue</a>
                                                                                        <span class="info-stock">
                                                                                            <i class="fa fa-check-square-o" aria-hidden="true"></i>
                                                                                            In Stock
                                                                                        </span>
                                                                                    </div>
                                                                                    <div class="rating">
                                                                                        <div class="star-content">
                                                                                            <div class="star"></div>
                                                                                            <div class="star"></div>
                                                                                            <div class="star"></div>
                                                                                            <div class="star"></div>
                                                                                            <div class="star"></div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="product-group-price">
                                                                                        <div class="product-price-and-shipping">
                                                                                            <span class="price">£20.08</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="discription">
                                                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies eget velit vitae bibendum. Cras condimentum libero
                                                                                        a lectus ultricies...
                                                                                    </div>
                                                                                </div>
                                                                                <div class="product-buttons d-flex">
                                                                                    <form action="#" method="post" class="formAddToCart">
                                                                                        <a class="add-to-cart" href="#" data-button-action="add-to-cart">
                                                                                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>Add to cart
                                                                                        </a>
                                                                                    </form>
                                                                                    <a class="addToWishlist" href="#" data-rel="1" onclick="">
                                                                                        <i class="fa fa-heart" aria-hidden="true"></i>
                                                                                    </a>
                                                                                    <a href="#" class="quick-view hidden-sm-down" data-link-action="quickview">
                                                                                        <i class="fa fa-eye" aria-hidden="true"></i>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="item col-md-12">
                                                                <div class="product-miniature js-product-miniature item-one first-item">
                                                                    <div class="row">
                                                                        <div class="col-md-4">
                                                                            <div class="thumbnail-container border">
                                                                                <a href="product-detail.html">
                                                                                    <img class="img-fluid image-cover" src="img/product/5.jpg" alt="img" />
                                                                                    <img class="img-fluid image-secondary" src="img/product/11.jpg" alt="img" />
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-md-8">
                                                                            <div class="product-description">
                                                                                <div class="product-groups">
                                                                                    <div class="product-title">
                                                                                        <a href="product-detail.html">Nulla et justo non augue</a>
                                                                                        <span class="info-stock">
                                                                                            <i class="fa fa-check-square-o" aria-hidden="true"></i>
                                                                                            In Stock
                                                                                        </span>
                                                                                    </div>
                                                                                    <div class="rating">
                                                                                        <div class="star-content">
                                                                                            <div class="star"></div>
                                                                                            <div class="star"></div>
                                                                                            <div class="star"></div>
                                                                                            <div class="star"></div>
                                                                                            <div class="star"></div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="product-group-price">
                                                                                        <div class="product-price-and-shipping">
                                                                                            <span class="price">£32.98</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="discription">
                                                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies eget velit vitae bibendum. Cras condimentum libero
                                                                                        a lectus ultricies...
                                                                                    </div>
                                                                                </div>
                                                                                <div class="product-buttons d-flex">
                                                                                    <form action="#" method="post" class="formAddToCart">
                                                                                        <a class="add-to-cart" href="#" data-button-action="add-to-cart">
                                                                                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>Add to cart
                                                                                        </a>
                                                                                    </form>
                                                                                    <a class="addToWishlist" href="#" data-rel="1" onclick="">
                                                                                        <i class="fa fa-heart" aria-hidden="true"></i>
                                                                                    </a>
                                                                                    <a href="#" class="quick-view hidden-sm-down" data-link-action="quickview">
                                                                                        <i class="fa fa-eye" aria-hidden="true"></i>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="item col-md-12">
                                                                <div class="product-miniature js-product-miniature item-one first-item">
                                                                    <div class="row">
                                                                        <div class="col-md-4">
                                                                            <div class="thumbnail-container border">
                                                                                <a href="product-detail.html">
                                                                                    <img class="img-fluid image-cover" src="img/product/8.jpg" alt="img" />
                                                                                    <img class="img-fluid image-secondary" src="img/product/14.jpg" alt="img" />
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-md-8">
                                                                            <div class="product-description">
                                                                                <div class="product-groups">
                                                                                    <div class="product-title">
                                                                                        <a href="product-detail.html">Nulla et justo non augue</a>
                                                                                        <span class="info-stock">
                                                                                            <i class="fa fa-check-square-o" aria-hidden="true"></i>
                                                                                            In Stock
                                                                                        </span>
                                                                                    </div>
                                                                                    <div class="rating">
                                                                                        <div class="star-content">
                                                                                            <div class="star"></div>
                                                                                            <div class="star"></div>
                                                                                            <div class="star"></div>
                                                                                            <div class="star"></div>
                                                                                            <div class="star"></div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="product-group-price">
                                                                                        <div class="product-price-and-shipping">
                                                                                            <span class="price">£34.54</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="discription">
                                                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies eget velit vitae bibendum. Cras condimentum libero
                                                                                        a lectus ultricies...
                                                                                    </div>
                                                                                </div>
                                                                                <div class="product-buttons d-flex">
                                                                                    <form action="#" method="post" class="formAddToCart">
                                                                                        <a class="add-to-cart" href="#" data-button-action="add-to-cart">
                                                                                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>Add to cart
                                                                                        </a>
                                                                                    </form>
                                                                                    <a class="addToWishlist" href="#" data-rel="1" onclick="">
                                                                                        <i class="fa fa-heart" aria-hidden="true"></i>
                                                                                    </a>
                                                                                    <a href="#" class="quick-view hidden-sm-down" data-link-action="quickview">
                                                                                        <i class="fa fa-eye" aria-hidden="true"></i>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="item col-md-12">
                                                                <div class="product-miniature js-product-miniature item-one first-item">
                                                                    <div class="row">
                                                                        <div class="col-md-4">
                                                                            <div class="thumbnail-container border">
                                                                                <a href="product-detail.html">
                                                                                    <img class="img-fluid image-cover" src="img/product/11.jpg" alt="img" />
                                                                                    <img class="img-fluid image-secondary" src="img/product/12.jpg" alt="img" />
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-md-8">
                                                                            <div class="product-description">
                                                                                <div class="product-groups">
                                                                                    <div class="product-title">
                                                                                        <a href="product-detail.html">Nulla et justo non augue</a>
                                                                                        <span class="info-stock">
                                                                                            <i class="fa fa-check-square-o" aria-hidden="true"></i>
                                                                                            In Stock
                                                                                        </span>
                                                                                    </div>
                                                                                    <div class="rating">
                                                                                        <div class="star-content">
                                                                                            <div class="star"></div>
                                                                                            <div class="star"></div>
                                                                                            <div class="star"></div>
                                                                                            <div class="star"></div>
                                                                                            <div class="star"></div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="product-group-price">
                                                                                        <div class="product-price-and-shipping">
                                                                                            <span class="price">£21.08</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="discription">
                                                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies eget velit vitae bibendum. Cras condimentum libero
                                                                                        a lectus ultricies...
                                                                                    </div>
                                                                                </div>
                                                                                <div class="product-buttons d-flex">
                                                                                    <form action="#" method="post" class="formAddToCart">
                                                                                        <a class="add-to-cart" href="#" data-button-action="add-to-cart">
                                                                                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>Add to cart
                                                                                        </a>
                                                                                    </form>
                                                                                    <a class="addToWishlist" href="#" data-rel="1" onclick="">
                                                                                        <i class="fa fa-heart" aria-hidden="true"></i>
                                                                                    </a>
                                                                                    <a href="#" class="quick-view hidden-sm-down" data-link-action="quickview">
                                                                                        <i class="fa fa-eye" aria-hidden="true"></i>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="item col-md-12">
                                                                <div class="product-miniature js-product-miniature item-one first-item">
                                                                    <div class="row">
                                                                        <div class="col-md-4">
                                                                            <div class="thumbnail-container border">
                                                                                <a href="product-detail.html">
                                                                                    <img class="img-fluid image-cover" src="img/product/13.jpg" alt="img" />
                                                                                    <img class="img-fluid image-secondary" src="img/product/23.jpg" alt="img" />
                                                                                </a>
                                                                            </div>

                                                                        </div>
                                                                        <div class="col-md-8">
                                                                            <div class="product-description">
                                                                                <div class="product-groups">
                                                                                    <div class="product-title">
                                                                                        <a href="product-detail.html">Nulla et justo non augue</a>
                                                                                        <span class="info-stock">
                                                                                            <i class="fa fa-check-square-o" aria-hidden="true"></i>
                                                                                            In Stock
                                                                                        </span>
                                                                                    </div>
                                                                                    <div class="rating">
                                                                                        <div class="star-content">
                                                                                            <div class="star"></div>
                                                                                            <div class="star"></div>
                                                                                            <div class="star"></div>
                                                                                            <div class="star"></div>
                                                                                            <div class="star"></div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="product-group-price">
                                                                                        <div class="product-price-and-shipping">
                                                                                            <span class="price">£36.08</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="discription">
                                                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies eget velit vitae bibendum. Cras condimentum libero
                                                                                        a lectus ultricies...
                                                                                    </div>
                                                                                </div>
                                                                                <div class="product-buttons d-flex">
                                                                                    <form action="#" method="post" class="formAddToCart">
                                                                                        <a class="add-to-cart" href="#" data-button-action="add-to-cart">
                                                                                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>Add to cart
                                                                                        </a>
                                                                                    </form>
                                                                                    <a class="addToWishlist" href="#" data-rel="1" onclick="">
                                                                                        <i class="fa fa-heart" aria-hidden="true"></i>
                                                                                    </a>
                                                                                    <a href="#" class="quick-view hidden-sm-down" data-link-action="quickview">
                                                                                        <i class="fa fa-eye" aria-hidden="true"></i>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="item col-md-12">
                                                                <div class="product-miniature js-product-miniature item-one first-item">
                                                                    <div class="row">
                                                                        <div class="col-md-4">
                                                                            <div class="thumbnail-container border">
                                                                                <a href="product-detail.html">
                                                                                    <img class="img-fluid image-cover" src="img/product/26.jpg" alt="img" />
                                                                                    <img class="img-fluid image-secondary" src="img/product/11.jpg" alt="img" />
                                                                                </a>
                                                                            </div>

                                                                        </div>
                                                                        <div class="col-md-8">
                                                                            <div class="product-description">
                                                                                <div class="product-groups">
                                                                                    <div class="product-title">
                                                                                        <a href="product-detail.html">Nulla et justo non augue</a>
                                                                                        <span class="info-stock">
                                                                                            <i class="fa fa-check-square-o" aria-hidden="true"></i>
                                                                                            In Stock
                                                                                        </span>
                                                                                    </div>
                                                                                    <div class="rating">
                                                                                        <div class="star-content">
                                                                                            <div class="star"></div>
                                                                                            <div class="star"></div>
                                                                                            <div class="star"></div>
                                                                                            <div class="star"></div>
                                                                                            <div class="star"></div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="product-group-price">
                                                                                        <div class="product-price-and-shipping">
                                                                                            <span class="price">£66.08</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="discription">
                                                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies eget velit vitae bibendum. Cras condimentum libero
                                                                                        a lectus ultricies...
                                                                                    </div>
                                                                                </div>
                                                                                <div class="product-buttons d-flex">
                                                                                    <form action="#" method="post" class="formAddToCart">
                                                                                        <a class="add-to-cart" href="#" data-button-action="add-to-cart">
                                                                                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>Add to cart
                                                                                        </a>
                                                                                    </form>
                                                                                    <a class="addToWishlist" href="#" data-rel="1" onclick="">
                                                                                        <i class="fa fa-heart" aria-hidden="true"></i>
                                                                                    </a>
                                                                                    <a href="#" class="quick-view hidden-sm-down" data-link-action="quickview">
                                                                                        <i class="fa fa-eye" aria-hidden="true"></i>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="item col-md-12">
                                                                <div class="product-miniature js-product-miniature item-one first-item">
                                                                    <div class="row">
                                                                        <div class="col-md-4">
                                                                            <div class="thumbnail-container border">
                                                                                <a href="product-detail.html">
                                                                                    <img class="img-fluid image-cover" src="img/product/8.jpg" alt="img" />
                                                                                    <img class="img-fluid image-secondary" src="img/product/14.jpg" alt="img" />
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-md-8">
                                                                            <div class="product-description">
                                                                                <div class="product-groups">
                                                                                    <div class="product-title">
                                                                                        <a href="product-detail.html">Nulla et justo non augue</a>
                                                                                        <span class="info-stock">
                                                                                            <i class="fa fa-check-square-o" aria-hidden="true"></i>
                                                                                            In Stock
                                                                                        </span>
                                                                                    </div>
                                                                                    <div class="rating">
                                                                                        <div class="star-content">
                                                                                            <div class="star"></div>
                                                                                            <div class="star"></div>
                                                                                            <div class="star"></div>
                                                                                            <div class="star"></div>
                                                                                            <div class="star"></div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="product-group-price">
                                                                                        <div class="product-price-and-shipping">
                                                                                            <span class="price">£34.54</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="discription">
                                                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies eget velit vitae bibendum. Cras condimentum libero
                                                                                        a lectus ultricies...
                                                                                    </div>
                                                                                </div>
                                                                                <div class="product-buttons d-flex">
                                                                                    <form action="#" method="post" class="formAddToCart">
                                                                                        <a class="add-to-cart" href="#" data-button-action="add-to-cart">
                                                                                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>Add to cart
                                                                                        </a>
                                                                                    </form>
                                                                                    <a class="addToWishlist" href="#" data-rel="1" onclick="">
                                                                                        <i class="fa fa-heart" aria-hidden="true"></i>
                                                                                    </a>
                                                                                    <a href="#" class="quick-view hidden-sm-down" data-link-action="quickview">
                                                                                        <i class="fa fa-eye" aria-hidden="true"></i>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="item col-md-12">
                                                                <div class="product-miniature js-product-miniature item-one first-item">
                                                                    <div class="row">
                                                                        <div class="col-md-4">
                                                                            <div class="thumbnail-container border">
                                                                                <a href="product-detail.html">
                                                                                    <img class="img-fluid image-cover" src="img/product/11.jpg" alt="img" />
                                                                                    <img class="img-fluid image-secondary" src="img/product/12.jpg" alt="img" />
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-md-8">
                                                                            <div class="product-description">
                                                                                <div class="product-groups">
                                                                                    <div class="product-title">
                                                                                        <a href="product-detail.html">Nulla et justo non augue</a>
                                                                                        <span class="info-stock">
                                                                                            <i class="fa fa-check-square-o" aria-hidden="true"></i>
                                                                                            In Stock
                                                                                        </span>
                                                                                    </div>
                                                                                    <div class="rating">
                                                                                        <div class="star-content">
                                                                                            <div class="star"></div>
                                                                                            <div class="star"></div>
                                                                                            <div class="star"></div>
                                                                                            <div class="star"></div>
                                                                                            <div class="star"></div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="product-group-price">
                                                                                        <div class="product-price-and-shipping">
                                                                                            <span class="price">£21.08</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="discription">
                                                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies eget velit vitae bibendum. Cras condimentum libero
                                                                                        a lectus ultricies...
                                                                                    </div>
                                                                                </div>
                                                                                <div class="product-buttons d-flex">
                                                                                    <form action="#" method="post" class="formAddToCart">
                                                                                        <a class="add-to-cart" href="#" data-button-action="add-to-cart">
                                                                                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>Add to cart
                                                                                        </a>
                                                                                    </form>
                                                                                    <a class="addToWishlist" href="#" data-rel="1" onclick="">
                                                                                        <i class="fa fa-heart" aria-hidden="true"></i>
                                                                                    </a>
                                                                                    <a href="#" class="quick-view hidden-sm-down" data-link-action="quickview">
                                                                                        <i class="fa fa-eye" aria-hidden="true"></i>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="item col-md-12">
                                                                <div class="product-miniature js-product-miniature item-one first-item">
                                                                    <div class="row">
                                                                        <div class="col-md-4">
                                                                            <div class="thumbnail-container border">
                                                                                <a href="product-detail.html">
                                                                                    <img class="img-fluid image-cover" src="img/product/13.jpg" alt="img" />
                                                                                    <img class="img-fluid image-secondary" src="img/product/23.jpg" alt="img" />
                                                                                </a>
                                                                            </div>

                                                                        </div>
                                                                        <div class="col-md-8">
                                                                            <div class="product-description">
                                                                                <div class="product-groups">
                                                                                    <div class="product-title">
                                                                                        <a href="product-detail.html">Nulla et justo non augue</a>
                                                                                        <span class="info-stock">
                                                                                            <i class="fa fa-check-square-o" aria-hidden="true"></i>
                                                                                            In Stock
                                                                                        </span>
                                                                                    </div>
                                                                                    <div class="rating">
                                                                                        <div class="star-content">
                                                                                            <div class="star"></div>
                                                                                            <div class="star"></div>
                                                                                            <div class="star"></div>
                                                                                            <div class="star"></div>
                                                                                            <div class="star"></div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="product-group-price">
                                                                                        <div class="product-price-and-shipping">
                                                                                            <span class="price">£36.08</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="discription">
                                                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies eget velit vitae bibendum. Cras condimentum libero
                                                                                        a lectus ultricies...
                                                                                    </div>
                                                                                </div>
                                                                                <div class="product-buttons d-flex">
                                                                                    <form action="#" method="post" class="formAddToCart">
                                                                                        <a class="add-to-cart" href="#" data-button-action="add-to-cart">
                                                                                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>Add to cart
                                                                                        </a>
                                                                                    </form>
                                                                                    <a class="addToWishlist" href="#" data-rel="1" onclick="">
                                                                                        <i class="fa fa-heart" aria-hidden="true"></i>
                                                                                    </a>
                                                                                    <a href="#" class="quick-view hidden-sm-down" data-link-action="quickview">
                                                                                        <i class="fa fa-eye" aria-hidden="true"></i>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="item col-md-12">
                                                                <div class="product-miniature js-product-miniature item-one first-item">
                                                                    <div class="row">
                                                                        <div class="col-md-4">
                                                                            <div class="thumbnail-container border">
                                                                                <a href="product-detail.html">
                                                                                    <img class="img-fluid image-cover" src="img/product/26.jpg" alt="img" />
                                                                                    <img class="img-fluid image-secondary" src="img/product/11.jpg" alt="img" />
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-md-8">
                                                                            <div class="product-description">
                                                                                <div class="product-groups">
                                                                                    <div class="product-title">
                                                                                        <a href="#">Nulla et justo non augue
                                                                                        </a>
                                                                                        <span class="info-stock">
                                                                                            <i class="fa fa-check-square-o" aria-hidden="true"></i>
                                                                                            In Stock
                                                                                        </span>
                                                                                    </div>
                                                                                    <div class="rating">
                                                                                        <div class="star-content">
                                                                                            <div class="star"></div>
                                                                                            <div class="star"></div>
                                                                                            <div class="star"></div>
                                                                                            <div class="star"></div>
                                                                                            <div class="star"></div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="product-group-price">
                                                                                        <div class="product-price-and-shipping">
                                                                                            <span class="price">£66.08</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="discription">
                                                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies eget velit vitae bibendum. Cras condimentum libero
                                                                                        a lectus ultricies...
                                                                                    </div>
                                                                                </div>
                                                                                <div class="product-buttons d-flex">
                                                                                    <form action="#" method="post" class="formAddToCart">
                                                                                        <a class="add-to-cart" href="#" data-button-action="add-to-cart">
                                                                                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>Add to cart
                                                                                        </a>
                                                                                    </form>
                                                                                    <a class="addToWishlist" href="#" data-rel="1" onclick="">
                                                                                        <i class="fa fa-heart" aria-hidden="true"></i>
                                                                                    </a>
                                                                                    <a href="#" class="quick-view hidden-sm-down" data-link-action="quickview">
                                                                                        <i class="fa fa-eye" aria-hidden="true"></i>
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

                                                <div class="pagination">
                                                    <div class="js-product-list-top ">
                                                        <div class="d-flex justify-content-around row">
                                                            <div class="showing col col-xs-12">
                                                                <span>SHOWING 1-3 OF 3 ITEM(S)</span>
                                                            </div>
                                                            <div class="page-list col col-xs-12">
                                                                <ul>
                                                                    <li>
                                                                        <a rel="prev" href="#" class="previous disabled js-search-link">
                                                                            Previous
                                                                        </a>
                                                                    </li>
                                                                    <li class="current active">
                                                                        <a rel="nofollow" href="#" class="disabled js-search-link">
                                                                            1
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a rel="nofollow" href="#" class="disabled js-search-link">
                                                                            2
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a rel="nofollow" href="#" class="disabled js-search-link">
                                                                            3
                                                                        </a>
                                                                    </li>

                                                                    <li>
                                                                        <a rel="next" href="#" class="next disabled js-search-link">
                                                                            Next
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
                </div>
            </div>

            <footer class="footer-one">
                <div class="inner-footer">
                    <div class="container">
                        <div class="footer-top col-lg-12 col-xs-12">
                            <div class=" row">
                                <div class="nov-html col-lg-4 col-sm-12 col-xs-12">
                                    <div class="block">
                                        <div class="block-content">
                                            <p class="logo-footer">
                                                <img src="img/home/logo.png" alt="img" />
                                            </p>
                                            <p class="content-logo">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt
                                                ut labore et dolore magna aliqua. Ut enim ad minim
                                            </p>
                                        </div>
                                    </div>
                                    <div class="block">
                                        <div class="block-content">
                                            <ul>
                                                <li>
                                                    <a href="#">About Us</a>
                                                </li>
                                                <li>
                                                    <a href="#">Reasons to shop</a>
                                                </li>
                                                <li>
                                                    <a href="#">What our customers say</a>
                                                </li>
                                                <li>
                                                    <a href="#">Meet the teaml</a>
                                                </li>
                                                <li>
                                                    <a href="#">Contact our buyers</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="block">
                                        <div class="block-content">
                                            <p class="img-payment ">
                                                <img class="img-fluid" src="img/home/payment-footer.png" alt="img" />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="nov-html col-lg-4 col-sm-6">
                                    <div class="block m-top">
                                        <div class="title-block">
                                            Contact Us
                                        </div>
                                        <div class="block-content">
                                            <div class="contact-us">
                                                <div class="title-content">
                                                    <i class="fa fa-home" aria-hidden="true"></i>
                                                    <span>Address :</span>
                                                </div>
                                                <div class="content-contact address-contact">
                                                    <p>123 Suspendis matti, Visaosang Building VST District NY Accums, North American
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="contact-us">
                                                <div class="title-content">
                                                    <i class="fa fa-envelope" aria-hidden="true"></i>
                                                    <span>Email :</span>
                                                </div>
                                                <div class="content-contact mail-contact">
                                                    <p>support@domain.com</p>
                                                </div>
                                            </div>
                                            <div class="contact-us">
                                                <div class="title-content">
                                                    <i class="fa fa-phone" aria-hidden="true"></i>
                                                    <span>Hotline :</span>
                                                </div>
                                                <div class="content-contact phone-contact">
                                                    <p>+0012-345-67890</p>
                                                </div>
                                            </div>
                                            <div class="contact-us">
                                                <div class="title-content">
                                                    <i class="fa fa-clock-o" aria-hidden="true"></i>
                                                    <span>Opening Hours :</span>
                                                </div>
                                                <div class="content-contact hours-contact">
                                                    <p>Monday - Sunday / 08.00AM- 19.00</p>
                                                    <span>(Except Holidays)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tiva-modules col-lg-4 col-md-6">
                                    <div class="block m-top">
                                        <div class="block-content">
                                            <div class="title-block">Newsletter</div>
                                            <div class="sub-title">Sign up to our newsletter to get the latest articles, lookbooks voucher codes direct
                                                to your inbox
                                            </div>
                                            <div class="block-newsletter">
                                                <form action="#" method="post">
                                                    <div class="input-group">
                                                        <input type="text" class="form-control" name="email" value="" placeholder="Enter Your Email" />
                                                        <span class="input-group-btn">
                                                            <button class="effect-btn btn btn-secondary " name="submitNewsletter" type="submit">
                                                                <span>subscribe</span>
                                                            </button>
                                                        </span>
                                                    </div>
                                                    <input type="hidden" name="action" value="0" />
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="block m-top1">
                                        <div class="block-content">
                                            <div class="social-content">
                                                <div class="title-block">
                                                    Follow us on
                                                </div>
                                                <div id="social-block">
                                                    <div class="social">
                                                        <ul class="list-inline mb-0 justify-content-end">
                                                            <li class="list-inline-item mb-0">
                                                                <a href="#" target="_blank">
                                                                    <i class="fa fa-facebook"></i>
                                                                </a>
                                                            </li>
                                                            <li class="list-inline-item mb-0">
                                                                <a href="#" target="_blank">
                                                                    <i class="fa fa-twitter"></i>
                                                                </a>
                                                            </li>
                                                            <li class="list-inline-item mb-0">
                                                                <a href="#" target="_blank">
                                                                    <i class="fa fa-google"></i>
                                                                </a>
                                                            </li>
                                                            <li class="list-inline-item mb-0">
                                                                <a href="#" target="_blank">
                                                                    <i class="fa fa-instagram"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="block m-top1">
                                        <div class="block-content">
                                            <div class="payment-content">
                                                <div class="title-block">
                                                    Payment accept
                                                </div>
                                                <div class="payment-image">
                                                    <img class="img-fluid" src="img/home/payment.png" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="tiva-copyright">
                    <div class="container">
                        <div class="row">
                            <div class="text-center col-lg-12 ">
                                <span>
                                    <a target="_blank" href="https://www.templateshub.net">Templates Hub</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


            <div class="back-to-top">
                <a href="#">
                    <i class="fa fa-long-arrow-up"></i>
                </a>
            </div>

            <div class="mobile-top-menu d-md-none">
                <button type="button" class="close" aria-label="Close">
                    <i class="zmdi zmdi-close"></i>
                </button>
                <div class="tiva-verticalmenu block" data-count_showmore="17">
                    <div class="box-content block-content">
                        <div class="verticalmenu" role="navigation">
                            <ul class="menu level1">
                                <li class="item  parent">
                                    <a href="#" class="hasicon" title="SIDE TABLE">
                                        <img src="img/home/table-lamp.png" alt="img" />SIDE TABLE</a>
                                    <span class="arrow collapsed" data-toggle="collapse" data-target="#SIDE-TABLE" aria-expanded="false" role="status">
                                        <i class="zmdi zmdi-minus"></i>
                                        <i class="zmdi zmdi-plus"></i>
                                    </span>
                                    <div class="subCategory collapse" id="SIDE-TABLE" aria-expanded="true" role="status">
                                        <ul>
                                            <li class="item">
                                                <a href="#" title="Aliquam lobortis">Aliquam lobortis</a>
                                            </li>
                                            <li class="item  parent-submenu">
                                                <a href="#" title="Duis Reprehenderit">Duis Reprehenderit</a>
                                                <span class="arrow collapsed" data-toggle="collapse" data-target="#sub-Category" aria-expanded="false" role="status">
                                                    <i class="zmdi zmdi-minus"></i>
                                                    <i class="zmdi zmdi-plus"></i>
                                                </span>
                                                <div class="subCategory collapse" id="sub-Category" aria-expanded="true" role="status">
                                                    <ul>
                                                        <li class="item">
                                                            <a href="#" title="Aliquam lobortis">Aliquam lobortis</a>
                                                        </li>
                                                        <li class="item">
                                                            <a href="#" title="Duis Reprehenderit">Duis Reprehenderit</a>
                                                        </li>
                                                        <li class="item">
                                                            <a href="#" title="Voluptate">Voluptate</a>
                                                        </li>
                                                        <li class="item">
                                                            <a href="#" title="Tongue Est">Tongue Est</a>
                                                        </li>
                                                        <li class="item">
                                                            <a href="#" title="Venison Andouille">Venison Andouille</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li class="item">
                                                <a href="#" title="Voluptate">Voluptate</a>
                                            </li>
                                            <li class="item">
                                                <a href="#" title="Tongue Est">Tongue Est</a>
                                            </li>
                                            <li class="item">
                                                <a href="#" title="Venison Andouille">Venison Andouille</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="item  parent group">
                                    <a href="#" class="hasicon" title="FI">
                                        <img src="img/home/fireplace.png" alt="img" />FIREPLACE
                                    </a>
                                    <span class="arrow collapsed" data-toggle="collapse" data-target="#fi" aria-expanded="false" role="status">
                                        <i class="zmdi zmdi-minus"></i>
                                        <i class="zmdi zmdi-plus"></i>
                                    </span>
                                    <div class="subCategory collapse" id="fi" aria-expanded="true" role="status">
                                        <div class="item">
                                            <div class="menu-content">
                                                <div class="tags d-flex d-xs-flex-inherit">
                                                    <div class="title">
                                                        <b>DINNING ROOM</b>
                                                    </div>
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item">
                                                            <a href="#">Toshiba</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">Samsung</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">LG</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">Sharp</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">Electrolux</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">Hitachi</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">Panasonic</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">Mitsubishi Electric</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">Daikin</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">Haier</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="tags d-flex d-xs-flex-inherit">
                                                    <div class="title">
                                                        <b>BATHROOM</b>
                                                    </div>
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item">
                                                            <a href="#">Toshiba</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">Samsung</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">LG</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">Sharp</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">Electrolux</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">Hitachi</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">Panasonic</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">Mitsubishi Electric</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">Daikin</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">Haier Media</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">Gee</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">Digimart</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">Vitivaa</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">Sanaky</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">Sunshine</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="tags d-flex d-xs-flex-inherit">
                                                    <div class="title">
                                                        <b>LIVING ROOM</b>
                                                    </div>
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item">
                                                            <a href="#">Media</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">Gee</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">Digimart</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">Vitivaa</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">Sanaky</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">Sunshine</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">Toshiba</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">Samsung</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">LG</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">Sharp</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">Electrolux</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">Hitachi</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">Panasonic</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">Mitsubishi Electric</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">Daikin</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">Haier</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="tags d-flex d-xs-flex-inherit">
                                                    <div class="title">
                                                        <b>BEDROOM</b>
                                                    </div>
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item">
                                                            <a href="#">LG</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">Sharp</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">Electrolux</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">Hitachi</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">Panasonic</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">Mitsubishi Electric</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">Daikin</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">Haier</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="tags d-flex d-xs-flex-inherit">
                                                    <div class="title">
                                                        <b>KITCHEN</b>
                                                    </div>
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item">
                                                            <a href="#">LG</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">Sharp</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">Electrolux</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">Hitachi</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">Panasonic</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">Mitsubishi Electric</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">Daikin</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">Haier</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="tags d-flex d-xs-flex-inherit">
                                                    <div class="title">
                                                        <b>Blender</b>
                                                    </div>
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item">
                                                            <a href="#">LG</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">Sharp</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">Electrolux</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">Hitachi</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">Panasonic</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">Mitsubishi Electric</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">Daikin</a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a href="#">Haier</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="item group-category-img parent group">
                                    <a href="#" class="hasicon" title="TABLE LAMP">
                                        <img src="img/home/table-lamp.png" alt="img" />TABLE LAMP</a>
                                    <span class="arrow collapsed" data-toggle="collapse" data-target="#table-lamp" aria-expanded="false" role="status">
                                        <i class="zmdi zmdi-minus"></i>
                                        <i class="zmdi zmdi-plus"></i>
                                    </span>
                                    <div class="subCategory collapse" id="table-lamp" aria-expanded="true" role="status">
                                        <div class="item">
                                            <div class="menu-content">
                                                <div class="col-xs-12">
                                                    <span class="menu-title">Coventry dining</span>
                                                    <ul>
                                                        <li>
                                                            <a href="#">Accessories</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Activewear</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">ASOS Basic Tops</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Bags &amp; Purses</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Beauty</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Coats &amp; Jackets</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Curve &amp; Plus Size</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="col-xs-12">
                                                    <span class="menu-title">Amara stools</span>
                                                    <ul>
                                                        <li>
                                                            <a href="#">Accessories</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Activewear</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">ASOS Basic Tops</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Bags &amp; Purses</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Beauty</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Coats &amp; Jackets</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Curve &amp; Plus Size</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="col-xs-12">
                                                    <span class="menu-title">Kingston dining</span>
                                                    <ul>
                                                        <li>
                                                            <a href="#">Accessories</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Activewear</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">ASOS Basic Tops</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Bags &amp; Purses</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Beauty</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Coats &amp; Jackets</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Curve &amp; Plus Size</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="col-xs-12">
                                                    <span class="menu-title">Ellinger dining</span>
                                                    <ul>
                                                        <li>
                                                            <a href="#">Accessories</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Activewear</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">ASOS Basic Tops</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Bags &amp; Purses</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Beauty</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Coats &amp; Jackets</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Curve &amp; Plus Size</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="item">
                                    <a href="#" class="hasicon" title="OTTOMAN">
                                        <img src="img/home/ottoman.png" alt="img" />OTTOMAN
                                    </a>
                                </li>
                                <li class="item">
                                    <a href="#" class="hasicon" title="ARMCHAIR">
                                        <img src="img/home/armchair.png" alt="img" />ARMCHAIR
                                    </a>
                                </li>
                                <li class="item">
                                    <a href="#" class="hasicon" title="CUSHION">
                                        <img src="img/home/cushion.png" alt="img" />CUSHION
                                    </a>
                                </li>
                                <li class="item">
                                    <a href="#" class="hasicon" title="COFFEE TABLE">
                                        <img src="img/home/coffee_table.png" alt="img" />COFFEE TABLE</a>
                                </li>
                                <li class="item">
                                    <a href="#" class="hasicon" title="SHELF">
                                        <img src="img/home/shelf.png" alt="img" />SHELF
                                    </a>
                                </li>
                                <li class="item">
                                    <a href="#" class="hasicon" title="SOFA">
                                        <img src="img/home/sofa.png" alt="img" />SOFA
                                    </a>
                                </li>
                                <li class="item">
                                    <a href="#" class="hasicon" title="DRESSING TABLE">
                                        <img src="img/home/dressing.png" alt="img" />DRESSING TABLE</a>
                                </li>
                                <li class="item">
                                    <a href="#" class="hasicon" title="WINDOWN CURTAIN">
                                        <img src="img/home/windown.png" alt="img" />WINDOWN CURTAIN</a>
                                </li>
                                <li class="item">
                                    <a href="#" class="hasicon" title="CHANDELIER">
                                        <img src="img/home/chandelier.png" alt="img" />CHANDELIER
                                    </a>
                                </li>
                                <li class="item">
                                    <a href="#" class="hasicon" title="CEILING FAN">
                                        <img src="img/home/ceiling_fan.png" alt="img" />CEILING FAN</a>
                                </li>
                                <li class="item">
                                    <a href="#" class="hasicon" title="WARDROBE">
                                        <img src="img/home/wardrobe.png" alt="img" />WARDROBE
                                    </a>
                                </li>
                                <li class="item">
                                    <a href="#" class="hasicon" title="FLOOR LAMP">
                                        <img src="img/home/floor_lamp.png" alt="img" />FLOOR LAMP</a>
                                </li>
                                <li class="item">
                                    <a href="#" class="hasicon" title="VASE-FLOWER ">
                                        <img src="img/home/vase-flower.png" alt="img" />VASE-FLOWER
                                    </a>
                                </li>
                                <li class="item">
                                    <a href="#" class="hasicon" title="BED">
                                        <img src="img/home/bed.png" alt="img" />BED
                                    </a>
                                </li>
                                <li class="item">
                                    <a href="#" class="hasicon" title="BED GIRL">
                                        <img src="img/home/bed.png" alt="img" />BED GIRL</a>
                                </li>
                                <li class="item">
                                    <a href="#" class="hasicon" title="BED BOY">
                                        <img src="img/home/bed.png" alt="img" />BED BOY</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            <div id="mobile-pagemenu" class="mobile-boxpage d-flex hidden-md-up active d-md-none">
                <div class="content-boxpage col">
                    <div class="box-header d-flex justify-content-between align-items-center">
                        <div class="title-box">Menu</div>
                        <div class="close-box">Close</div>
                    </div>
                    <div class="box-content">
                        <nav>
                            <div id="megamenu" class="nov-megamenu clearfix">
                                <ul class="menu level1">
                                    <li class="item home-page has-sub">
                                        <span class="arrow collapsed" data-toggle="collapse" data-target="#home1" aria-expanded="true" role="status">
                                            <i class="zmdi zmdi-minus"></i>
                                            <i class="zmdi zmdi-plus"></i>
                                        </span>
                                        <a href="index-2.html" title="Home">
                                            <i class="fa fa-home" aria-hidden="true"></i>Home</a>
                                        <div class="subCategory collapse" id="home1" aria-expanded="true" role="status">
                                            <ul>
                                                <li class="item">
                                                    <a href="index-2.html" title="Home Page 1">Home Page 1</a>
                                                </li>
                                                <li class="item">
                                                    <a href="home2.html" title="Home Page 2">Home Page 2</a>
                                                </li>
                                                <li class="item">
                                                    <a href="home3.html" title="Home Page 3">Home Page 3</a>
                                                </li>
                                                <li class="item">
                                                    <a href="home4.html" title="Home Page 4">Home Page 4</a>
                                                </li>
                                                <li class="item">
                                                    <a href="home5.html" title="Home Page 5">Home Page 5</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="item has-sub">
                                        <span class="arrow collapsed" data-toggle="collapse" data-target="#blog" aria-expanded="false" role="status">
                                            <i class="zmdi zmdi-minus"></i>
                                            <i class="zmdi zmdi-plus"></i>
                                        </span>
                                        <a href="#" title="Blog">
                                            <i class="fa fa-address-book" aria-hidden="true"></i>Blog</a>

                                        <div class="subCategory collapse" id="blog" aria-expanded="true" role="status">
                                            <ul>
                                                <li class="item">
                                                    <a href="blog-list-sidebar-left.html" title="Blog List (Sidebar Left)">Blog List (Sidebar Left)</a>
                                                </li>
                                                <li class="item">
                                                    <a href="blog-list-sidebar-left2.html" title="Blog List (Sidebar Left) 2">Blog List (Sidebar Left) 2</a>
                                                </li>
                                                <li class="item">
                                                    <a href="blog-list-sidebar-right.html" title="Category Blog (Right column)">Blog List (Sidebar Right)</a>
                                                </li>
                                                <li class="item">
                                                    <a href="blog-list-no-sidebar.html" title="Blog List (No Sidebar)">Blog List (No Sidebar)</a>
                                                </li>
                                                <li class="item">
                                                    <a href="blog-grid-no-sidebar.html" title="Blog Grid (No Sidebar)">Blog Grid (No Sidebar)</a>
                                                </li>
                                                <li class="item">
                                                    <a href="blog-detail.html" title="Blog Detail">Blog Detail</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="item group has-sub">
                                        <span class="arrow collapsed" data-toggle="collapse" data-target="#page" aria-expanded="false" role="status">
                                            <i class="zmdi zmdi-minus"></i>
                                            <i class="zmdi zmdi-plus"></i>
                                        </span>
                                        <a href="#" title="Page">
                                            <i class="fa fa-file-text-o" aria-hidden="true"></i>page</a>
                                        <div class="subCategory collapse" id="page" aria-expanded="true" role="status">
                                            <ul class="group-page">
                                                <li class="item container group">
                                                    <div>
                                                        <ul>
                                                            <li class="item col-md-4 ">
                                                                <span class="menu-title">Category Style</span>
                                                                <div class="menu-content">
                                                                    <ul class="col">
                                                                        <li>
                                                                            <a href="product-grid-sidebar-left.html">Product Grid (Sidebar Left)</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="product-grid-sidebar-right.html">Product Grid (Sidebar Right)</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="product-list-sidebar-left.html">Product List (Sidebar Left) </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <li class="item col-md-4 html">
                                                                <span class="menu-title">Product Detail Style</span>
                                                                <div class="menu-content">
                                                                    <ul>
                                                                        <li>
                                                                            <a href="product-detail.html">Product Detail (Sidebar Left)</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">Product Detail (Sidebar Right)</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <li class="item col-md-4 html">
                                                                <span class="menu-title">Bonus Page</span>
                                                                <div class="menu-content">
                                                                    <ul>
                                                                        <li>
                                                                            <a href="404.html">404 Page</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="about-us.html">About Us Page</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="item has-sub">
                                        <a href="contact.html" title="Contact us">
                                            <i class="fa fa-map-marker" aria-hidden="true"></i>Contact us</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductListing