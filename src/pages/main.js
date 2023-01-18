import React, { useEffect, useState } from 'react';
import Header from "../components/Header"
import Footer from "../components/Footer"
import MenuLeft from "../components/MenuLeft"
import MenuRight from "../components/MenuRight"
import { Apis } from "../helper/ApiEndpoints";
import { axiosRequest } from "../helper/Api";
import { Link } from "react-router-dom";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
const Main = () => {
    const [category, setCategory] = useState([])
    const [product, setProduct] = useState([])
    useEffect(() => {
        (async () => {
            const result = await axiosRequest(Apis.SubCategoryList, {}, "get")
            const productResult = await axiosRequest(Apis.ProductList + `?type=category&limit=5`, {}, "get")
            if (result.status == 200) {
                setCategory(result?.data?.data)
            }
            setProduct(productResult?.data?.data)
        })()
    }, [])
    const handleChange = async (id) => {
        let productResult
        if (id) {
            productResult = await axiosRequest(Apis.ProductList + `?type=category&subcategoryId=${id}&limit=5`, {}, "get")
        } else {
            productResult = await axiosRequest(Apis.ProductList + `?limit=5`, {}, "get")
        }
        setProduct(productResult?.data?.data)
    }
    return (
        
        <div id="home2">
            <Header />
            <div className="main-content">
                <div className="wrap-banner">
                    <div className="menu-banner d-xs-none">
                        <div className="tiva-verticalmenu block" data-count_showmore="17">
                            <div className="box-content block_content">
                                <div className="verticalmenu" role="navigation">
                                    <ul className="menu level1">
                                        <li className="item parent">
                                            <a href="#" className="hasicon" title="SIDE TABLE">
                                                <img src="img/home/table-lamp.png" alt="img" />SIDE TABLE</a>
                                            <div className="dropdown-menu">
                                                <div className="menu-items">
                                                    <ul>
                                                        <li className="item">
                                                            <a href="#" title="Aliquam lobortis">Aliquam lobortis</a>
                                                        </li>
                                                        <li className="item parent-submenu parent">
                                                            <a href="#" title="Duis Reprehenderit">Duis Reprehenderit</a>
                                                            <span className="show-sub fa-active-sub"></span>
                                                            <div className="dropdown-submenu">
                                                                <div className="menu-items">
                                                                    <ul>
                                                                        <li className="item">
                                                                            <a href="#" title="Aliquam lobortis">Aliquam lobortis</a>
                                                                        </li>
                                                                        <li className="item">
                                                                            <a href="#" title="Duis Reprehenderit">Duis Reprehenderit</a>
                                                                        </li>
                                                                        <li className="item">
                                                                            <a href="#" title="Voluptate">Voluptate</a>
                                                                        </li>
                                                                        <li className="item">
                                                                            <a href="#" title="Tongue Est">Tongue Est</a>
                                                                        </li>
                                                                        <li className="item">
                                                                            <a href="#" title="Venison Andouille">Venison Andouille</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="item">
                                                            <a href="#" title="Voluptate">Voluptate</a>
                                                        </li>
                                                        <li className="item">
                                                            <a href="#" title="Tongue Est">Tongue Est</a>
                                                        </li>
                                                        <li className="item">
                                                            <a href="#" title="Venison Andouille">Venison Andouille</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="item parent group">
                                            <a href="#" className="hasicon" title="FI">
                                                <img src="img/home/fireplace.png" alt="img" />FIREPLACE
                                            </a>
                                            <div className="dropdown-menu menu-2">
                                                <div className="menu-items">
                                                    <div className="item">
                                                        <div className="menu-content">
                                                            <div className="tags">
                                                                <div className="title float-left">
                                                                    <b>DINNING ROOM</b>
                                                                </div>
                                                                <ul className="list-inline">
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Toshiba</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Samsung</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">LG</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Sharp</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Electrolux</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Hitachi</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Panasonic</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Mitsubishi Electric</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Daikin</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Haier</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="tags">
                                                                <div className="title float-left">
                                                                    <b>BATHROOM</b>
                                                                </div>
                                                                <ul className="list-inline">
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Toshiba</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Samsung</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">LG</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Sharp</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Electrolux</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Hitachi</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Panasonic</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Mitsubishi Electric</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Daikin</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Haier Media</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Gee</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Digimart</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Vitivaa</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Sanaky</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Sunshine</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="tags">
                                                                <div className="title float-left">
                                                                    <b>LIVING ROOM</b>
                                                                </div>
                                                                <ul className="list-inline">
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Media</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Gee</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Digimart</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Vitivaa</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Sanaky</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Sunshine</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Toshiba</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Samsung</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">LG</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Sharp</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Electrolux</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Hitachi</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Panasonic</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Mitsubishi Electric</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Daikin</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Haier</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="tags">
                                                                <div className="title float-left">
                                                                    <b>BEDROOM</b>
                                                                </div>
                                                                <ul className="list-inline">
                                                                    <li className="list-inline-item">
                                                                        <a href="#">LG</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Sharp</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Electrolux</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Hitachi</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Panasonic</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Mitsubishi Electric</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Daikin</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Haier</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="tags">
                                                                <div className="title float-left">
                                                                    <b>KITCHEN</b>
                                                                </div>
                                                                <ul className="list-inline">
                                                                    <li className="list-inline-item">
                                                                        <a href="#">LG</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Sharp</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Electrolux</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Hitachi</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Panasonic</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Mitsubishi Electric</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Daikin</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Haier</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="tags">
                                                                <div className="title float-left">
                                                                    <b>Blender</b>
                                                                </div>
                                                                <ul className="list-inline">
                                                                    <li className="list-inline-item">
                                                                        <a href="#">LG</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Sharp</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Electrolux</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Hitachi</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Panasonic</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Mitsubishi Electric</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Daikin</a>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <a href="#">Haier</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="item group-category-img parent group">
                                            <a href="#" className="hasicon" title="TABLE LAMP">
                                                <img src="img/home/table-lamp.png" alt="img" />TABLE LAMP
                                            </a>
                                            <div className="dropdown-menu menu-3">
                                                <div className="menu-items">
                                                    <div className="item">
                                                        <div className="menu-content">
                                                            <div className="group-category row">
                                                                <div className="mt-20">
                                                                    <div className="d-flex">
                                                                        <div className="col">
                                                                            <span className="menu-title">Coventry dining</span>
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
                                                                        <div className="col">
                                                                            <span className="menu-title">Amara stools</span>
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
                                                                    <div className="d-flex">
                                                                        <div className="col">
                                                                            <span className="menu-title">Kingston dining</span>
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
                                                                        <div className="col">
                                                                            <span className="menu-title">Ellinger dining</span>
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
                                                                <div className="ml-15">
                                                                    <a>
                                                                        <img className="img-fluid" src="img/home/img-menu.jpg" alt="img" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="item">
                                            <a href="#" className="hasicon" title="OTTOMAN">
                                                <img src="img/home/ottoman.png" alt="img" />OTTOMAN
                                            </a>
                                        </li>
                                        <li className="item">
                                            <a href="#" className="hasicon" title="ARMCHAIR">
                                                <img src="img/home/armchair.png" alt="img" />ARMCHAIR
                                            </a>
                                        </li>
                                        <li className="item">
                                            <a href="#" className="hasicon" title="CUSHION">
                                                <img src="img/home/cushion.png" alt="img" />CUSHION
                                            </a>
                                        </li>
                                        <li className="item">
                                            <a href="#" className="hasicon" title="COFFEE TABLE">
                                                <img src="img/home/coffee_table.png" alt="img" />COFFEE TABLE</a>
                                        </li>
                                        <li className="item">
                                            <a href="#" className="hasicon" title="SHELF">
                                                <img src="img/home/shelf.png" alt="img" />SHELF
                                            </a>
                                        </li>
                                        <li className="item">
                                            <a href="#" className="hasicon" title="SOFA">
                                                <img src="img/home/sofa.png" alt="img" />SOFA
                                            </a>
                                        </li>
                                        <li className="item">
                                            <a href="#" className="hasicon" title="DRESSING TABLE">
                                                <img src="img/home/dressing.png" alt="img" />DRESSING TABLE</a>
                                        </li>
                                        <li className="item">
                                            <a href="#" className="hasicon" title="WINDOWN CURTAIN">
                                                <img src="img/home/windown.png" alt="img" />WINDOWN CURTAIN</a>
                                        </li>
                                        <li className="item">
                                            <a href="#" className="hasicon" title="CHANDELIER">
                                                <img src="/img/home/chandelier.png" alt="img" />CHANDELIER
                                            </a>
                                        </li>
                                        <li className="item toggleable menu-hidden">
                                            <a href="#" className="hasicon" title="CEILING FAN">
                                                <img src="/img/home/ceiling_fan.png" alt="img" />CEILING FAN
                                            </a>
                                        </li>
                                        <li className="item toggleable menu-hidden">
                                            <a href="#" className="hasicon" title="WARDROBE">
                                                <img src="img/home/wardrobe.png" alt="img" />WARDROBE
                                            </a>
                                        </li>
                                        <li className="item toggleable menu-hidden">
                                            <a href="#" className="hasicon" title="FLOOR LAMP">
                                                <img src="img/home/floor_lamp.png" alt="img" />FLOOR LAMP</a>
                                        </li>
                                        <li className="item toggleable menu-hidden">
                                            <a href="#" className="hasicon" title="VASE-FLOWER">
                                                <img src="img/home/vase-flower.png" alt="img" />VASE-FLOWER
                                            </a>
                                        </li>
                                        <li className="item toggleable menu-hidden">
                                            <a href="#" className="hasicon" title="BED">
                                                <img src="img/home/bed.png" alt="img" />BED
                                            </a>
                                        </li>
                                        <li className="item toggleable menu-hidden">
                                            <a href="#" className="hasicon" title="BED GIRL">
                                                <img src="img/home/bed.png" alt="img" />BED GIRL</a>
                                        </li>
                                        <li className="item toggleable menu-hidden">
                                            <a href="#" className="hasicon" title="BED BOY">
                                                <img src="img/home/bed.png" alt="img" />BED BOY</a>
                                        </li>
                                        <li className="more item">Show More</li>
                                    </ul>
                                </div>
                                <div className="d-flex justify-content-center align-items-center header-top-left pull-left">
                                    <div className="toggle-nav act">
                                        <div className="btnov-lines-large">
                                            <i className="zmdi zmdi-close"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="wrapper-site">
                    <div id="content-wrapper" className="full-width">
                        <div id="main">
                            <section className="page-home">
                                <div className="section spacing-10 groupbanner-special">
                                    <div className="title-block">
                                        <span>Shop The LookBook 2018</span>
                                        <span>LookBook</span>
                                        <span>HAND-PICKED ARRIVALS FROM THE BEST DESIGNER</span>
                                    </div>

                                    <div className="row" >
                                        <div className="lookbook owl-carousel owl-theme owl-loaded owl-drag" style={{ display: 'flex' }}>
                                            <div className="item">
                                                <div className="tiva-lookbook defaul">
                                                    <div className="items col-lg-12 col-sm-12 col-xs-12">
                                                        <div className="tiva-content-lookbook">
                                                            <img className="img-fluid img-responsive" src="img/home/home1-tolltip1.jpg" alt="lookbook" />

                                                            <div className="item-lookbook item1">
                                                                <span className="number-lookbook">+</span>
                                                                <div className="content-lookbook lookbook-custom">
                                                                    <div className="main-lookbook d-flex align-items-center">
                                                                        <div className="item-thumb">
                                                                            <a href="product-detail.html">
                                                                                <img src="img/home/icon-tolltip2.jpg" alt="lorem-ipsum-dolor-sit-amet" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="content-bottom">
                                                                            <div className="item-title">
                                                                                <a href="product-detail.html">Lorem ipsum dolor</a>
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
                                                                            <div className="item-price">
                                                                                £52.00
                                                                            </div>
                                                                            <div className="readmore">
                                                                                <a href="product-detail.html">View More</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="item-lookbook item2">
                                                                <span className="number-lookbook">+</span>
                                                                <div className="content-lookbook">
                                                                    <div className="main-lookbook d-flex align-items-center">
                                                                        <div className="item-thumb">
                                                                            <a href="product-detail.html">
                                                                                <img src="img/home/icon-tolltip1.jpg" alt="contrary-to-popular-belief" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="content-bottom">
                                                                            <div className="item-title">
                                                                                <a href="product-detail.html">Sed vel malesuada lorem</a>
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
                                                                            <div className="item-price">
                                                                                £68.00
                                                                            </div>
                                                                            <div className="readmore">
                                                                                <a href="product-detail.html">View More</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="item">
                                                <div className="tiva-lookbook default">
                                                    <div className="items col-lg-12 col-sm-12 col-xs-12">
                                                        <div className="tiva-content-lookbook">
                                                            <img className="img-fluid img-responsive" src="img/home/home1-tolltip2.jpg" alt="lookbook" />

                                                            <div className="item-lookbook item3">
                                                                <span className="number-lookbook">+</span>
                                                                <div className="content-lookbook">
                                                                    <div className="main-lookbook d-flex align-items-center">
                                                                        <div className="item-thumb">
                                                                            <a href="product-detail.html">
                                                                                <img src="img/home/icon-tolltip5.jpg" alt="lorem-ipsum-dolor-sit-amet" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="content-bottom">
                                                                            <div className="item-title">
                                                                                <a href="product-detail.html">Lorem ipsum dolor sit</a>
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
                                                                            <div className="item-price">
                                                                                £45.00
                                                                            </div>
                                                                            <div className="readmore">
                                                                                <a href="product-detail.html">View More</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="item-lookbook item4">
                                                                <span className="number-lookbook">+</span>
                                                                <div className="content-lookbook">
                                                                    <div className="main-lookbook d-flex align-items-center">
                                                                        <div className="item-thumb">
                                                                            <a href="product-detail.html">
                                                                                <img src="img/home/icon-tolltip6.jpg" alt="lorem-ipsum-dolor-sit-amet" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="content-bottom">
                                                                            <div className="item-title">
                                                                                <a href="product-detail.html">Lorem ipsum dolor</a>
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
                                                                            <div className="item-price">
                                                                                £21.00
                                                                            </div>
                                                                            <div className="readmore">
                                                                                <a href="product-detail.html">View More</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="item-lookbook item5">
                                                                <span className="number-lookbook">+</span>
                                                                <div className="content-lookbook lookbook-custom">
                                                                    <div className="main-lookbook d-flex align-items-center">
                                                                        <div className="item-thumb">
                                                                            <a href="product-detail.html">
                                                                                <img src="img/home/icon-tolltip4.jpg" alt="mug-the-adventure-begins" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="content-bottom">
                                                                            <div className="item-title">
                                                                                <a href="product-detail.html">Sed vel malesuada lorem</a>
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
                                                                            <div className="item-price">
                                                                                £11.90
                                                                            </div>
                                                                            <div className="readmore">
                                                                                <a href="product-detail.html">View More</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="item">
                                                <div className="tiva-lookbook default">
                                                    <div className="items col-lg-12 col-sm-12 col-xs-12">
                                                        <div className="tiva-content-lookbook">
                                                            <img className="img-fluid img-responsive" src="img/home/home1-tolltip3.jpg" alt="lookbook" />

                                                            <div className="item-lookbook item6">
                                                                <span className="number-lookbook">+</span>
                                                                <div className="content-lookbook">
                                                                    <div className="main-lookbook d-flex align-items-center">
                                                                        <div className="item-thumb">
                                                                            <a href="product-detail.html">
                                                                                <img src="img/home/icon-tolltip4.jpg" alt="mug-the-adventure-begins" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="content-bottom">
                                                                            <div className="item-title">
                                                                                <a href="product-detail.html">Sed vel malesuada lorem</a>
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
                                                                            <div className="item-price">
                                                                                £11.90
                                                                            </div>
                                                                            <div className="readmore">
                                                                                <a href="product-detail.html">View More</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="item-lookbook item7">
                                                                <span className="number-lookbook">+</span>
                                                                <div className="content-lookbook">
                                                                    <div className="main-lookbook d-flex align-items-center">
                                                                        <div className="item-thumb">
                                                                            <a href="product-detail.html">
                                                                                <img src="img/product/13.jpg" alt="brown-bear-vector-graphics" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="content-bottom">
                                                                            <div className="item-title">
                                                                                <a href="product-detail.html">Orci varius natoque penatibus</a>
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
                                                                            <div className="item-price">
                                                                                £9.00
                                                                            </div>
                                                                            <div className="readmore">
                                                                                <a href="product-detail.html">View More</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="item-lookbook item8">
                                                                <span className="number-lookbook">+</span>
                                                                <div className="content-lookbook">
                                                                    <div className="main-lookbook d-flex align-items-center">
                                                                        <div className="item-thumb">
                                                                            <a href="product-detail.html">
                                                                                <img src="img/home/icon-tolltip6.jpg" alt="lorem-ipsum-dolor-sit-amet" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="content-bottom">
                                                                            <div className="item-title">
                                                                                <a href="product-detail.html">Etiam congue nisl nec</a>
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
                                                                            <div className="item-price">
                                                                                £16.00
                                                                            </div>
                                                                            <div className="readmore">
                                                                                <a href="product-detail.html">View More</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="info-lookbook">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="section living-room background-none">
                                    <div className="container">
                                        <div className="tiva-row-wrap row">
                                            <div className="col-md-12 col-xs-12 groupcategoriestab-vertical">
                                                <div className="grouptab">
                                                    <div className="product-tab categoriestab-left flex-9">
                                                        <div className="title-tab-content d-flex">
                                                            <div className="dropdown-toggle toggle-category tab-category-none">Select Category</div>
                                                            <ul className="nav nav-tabs wibkit row">
                                                                <li className="col-xs-6">
                                                                    <a href="#all" data-toggle="tab" onClick={() => handleChange()} className="active">ALL PRODUCTS</a>
                                                                </li>
                                                                {category?.length ?
                                                                    category.map((item, index) => {
                                                                        return <li className="col-xs-6">
                                                                            <a href="#table" data-toggle="tab" onClick={() => handleChange(item.id)} >{item.name}</a>
                                                                        </li>
                                                                    }) : <div>
                                                                        <li className="col-xs-6">
                                                                            <a href="#all" data-toggle="tab" className="active">ALL PRODUCTS</a>
                                                                        </li>
                                                                    </div>
                                                                }

                                                            </ul>

                                                            <div className="filter-sortby open ">
                                                                <select>
                                                                    <option value="">Sort by</option>
                                                                    <option value="">Name, A to Z</option>
                                                                    <option value="">Name, Z to A</option>
                                                                    <option value="">Price, low to high</option>
                                                                    <option value="">Price, high to low</option>
                                                                </select>
                                                                <div className="toggle-filter btn ml-3 dropdown-toggle" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"  data-label="Filter" data-label-hidden="Hide Filter">Filter</div>
                                                                <div className="hide-filter toggle-filter btn" data-label="Filter" data-label-hidden="Hide Filter">
                                                                    <i className="fa fa-times-circle" aria-hidden="true"></i>Hide Filter</div>
                                                            </div>
                                                        </div>
                                                        {/* className="content-filter" */}
                                                        <div  class="collapse" id="collapseExample"> 
                                                            <div className="row">
                                                                <div className="col-md-4">
                                                                    <div className="tiva-filter-title d-flex align-items-center">
                                                                        Choose Color
                                                                    </div>
                                                                    <ul className="active">
                                                                        <li data-id_attribute="5">
                                                                            <span className="color grey"></span>
                                                                            <span>Grey</span>
                                                                        </li>
                                                                        <li data-id_attribute="6">
                                                                            <span className="color taupe"></span>
                                                                            <span>Taupe</span>
                                                                        </li>
                                                                        <li data-id_attribute="7">
                                                                            <span className="color beige"></span>
                                                                            <span>Beige</span>
                                                                        </li>
                                                                        <li data-id_attribute="9">
                                                                            <span className="color white"></span>
                                                                            <span>Off White</span>
                                                                        </li>
                                                                        <li data-id_attribute="10">
                                                                            <span className="color red"></span>
                                                                            <span>Red</span>
                                                                        </li>
                                                                        <li data-id_attribute="11">
                                                                            <span className="color black"></span>
                                                                            <span>Black</span>
                                                                        </li>
                                                                        <li data-id_attribute="12">
                                                                            <span className="color camel"></span>
                                                                            <span>Camel</span>
                                                                        </li>
                                                                        <li data-id_attribute="13">
                                                                            <span className="color orange"></span>
                                                                            <span>Orange</span>
                                                                        </li>
                                                                        <li data-id_attribute="14">
                                                                            <span className="color blue"></span>
                                                                            <span>Blue</span>
                                                                        </li>
                                                                        <li data-id_attribute="15">
                                                                            <span className="color green"></span>
                                                                            <span>Green</span>
                                                                        </li>
                                                                        <li data-id_attribute="16">
                                                                            <span className="color yellow"></span>
                                                                            <span>Yellow</span>
                                                                        </li>
                                                                        <li data-id_attribute="17">
                                                                            <span className="color brown"></span>
                                                                            <span>Brown</span>
                                                                        </li>
                                                                        <li data-id_attribute="18">
                                                                            <span className="color pink"></span>
                                                                            <span>Pink</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>

                                                                <div className="col-md-4">
                                                                    <div className="tiva-filter-title d-flex align-items-center m-top">
                                                                        Choose Manufacture
                                                                    </div>
                                                                    <ul className="manufacture filter_product list-unstyled active">
                                                                        <li>Delce</li>
                                                                        <li>Gabbana</li>
                                                                        <li>Hermes</li>
                                                                        <li>Hug Boss</li>
                                                                        <li>Lorem Ipsum</li>
                                                                        <li>louis vuitton</li>
                                                                        <li>variations</li>
                                                                        <li>Popular</li>
                                                                        <li>Standard</li>
                                                                        <li>Versace</li>
                                                                    </ul>
                                                                </div>

                                                                <div className="tiva-filter-price col-md-4">
                                                                    <div className="tiva-filter-title d-flex align-items-center m-top">
                                                                        Choose Price
                                                                    </div>
                                                                    <div id="block_price_filter" className="block">
                                                                        <div className="block-content">
                                                                            <div id="slider-range" className="tiva-filter">
                                                                                <div className="filter-itemprice-filter">
                                                                                    <div className="layout-slider">
                                                                                        <input id="price-filter" name="price" value="0;100" />
                                                                                    </div>
                                                                                    <div className="layout-slider-settings"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="tab-content">
                                                            <div id="all" className="tab-pane fade in active show">
                                                                <div className="item text-center row">
                                                                    {product.length ?
                                                                        product.map(item => {
                                                                            return <div className="col-md-3 col-xs-12">
                                                                                <div className="product-miniature js-product-miniature item-one first-item">
                                                                                    <div className="thumbnail-container">
                                                                                        <Link to={"/product/" + item.id}>
                                                                                            <img className="img-fluid" src={process.env.REACT_APP_API_URL_SERVICE + item?.productImages[0]?.image} alt="img" />
                                                                                        </Link>
                                                                                        {item?.productPrice?.productDiscount ? <div className="product-flags discount">-{item?.productPrice?.productDiscount.discount}%</div> : ""}

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
                                                                                                <a href="product-detail.html">{item.name}</a>
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
                                                                                                    <del className="regular-price">£{item?.productPrice?.price}</del>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="product-buttons d-flex justify-content-center">
                                                                                            <form action="#" method="post" className="formAddToCart">
                                                                                                <input type="hidden" name="token" />
                                                                                                <a className="add-to-cart" href="#" data-button-action="add-to-cart">
                                                                                                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                                                                                </a>
                                                                                            </form>
                                                                                            <a className="addToWishlist wishlistProd_1" href="#" data-rel="1" onClick="">
                                                                                                <i className="fa fa-heart" aria-hidden="true"></i>
                                                                                            </a>
                                                                                            <a href="#" className="quick-view hidden-sm-down" data-link-action="quickview">
                                                                                                <i className="fa fa-eye" aria-hidden="true"></i>
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                        }) :
                                                                        <div className="col-md-3 col-xs-12">
                                                                            <div className="product-miniature js-product-miniature item-one first-item">
                                                                                <div className="thumbnail-container">
                                                                                    <a href="product-detail.html">
                                                                                        <img className="img-fluid" src="img/product/1.jpg" alt="img" />
                                                                                    </a>
                                                                                    <div className="product-flags discount">-30%</div>
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
                                                                                            <a href="product-detail.html">Nulla et justo non augue</a>
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
                                                                                                <del className="regular-price">£28.68</del>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="product-buttons d-flex justify-content-center">
                                                                                        <form action="#" method="post" className="formAddToCart">
                                                                                            <input type="hidden" name="token" />
                                                                                            <a className="add-to-cart" href="#" data-button-action="add-to-cart">
                                                                                                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                                                                            </a>
                                                                                        </form>
                                                                                        <a className="addToWishlist wishlistProd_1" href="#" data-rel="1" onClick="">
                                                                                            <i className="fa fa-heart" aria-hidden="true"></i>
                                                                                        </a>
                                                                                        <a href="#" className="quick-view hidden-sm-down" data-link-action="quickview">
                                                                                            <i className="fa fa-eye" aria-hidden="true"></i>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                    }
                                                                </div>
                                                                <div className="content-showmore text-center has-showmore">
                                                                    <button type="button" className="btn btn-default novShowMore" name="novShowMore" data-loading="Loading..." data-loadmore="Load More Products">
                                                                        {/* <span>Load More Products</span> */}
                                                                        <Link to="/product-listing">   <span>Load More Products</span></Link>
                                                                    </button>
                                                                    <input type="hidden" value="0" className="count_showmore" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="section spacing-10 group-image-special">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4 banner1">
                                            <div className="effect">
                                                <a href="#">
                                                    <img className="img-fluid width-100" src="img/home/effect5.jpg" alt="banner-1" title="banner-1" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 banner1">
                                            <div className="effect">
                                                <a href="#">
                                                    <img className="img-fluid width-100" src="img/home/effect6.jpg" alt="banner-2" title="banner-2" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 banner1">
                                            <div className="effect">
                                                <a href="#">
                                                    <img className="img-fluid width-100" src="img/home/effect7.jpg" alt="banner-2" title="banner-2" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 banner1">
                                            <div className="effect">
                                                <a href="#">
                                                    <img className="img-fluid width-100" src="img/home/effect8.jpg" alt="banner-2" title="banner-2" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 banner1">
                                            <div className="effect">
                                                <a href="#">
                                                    <img className="img-fluid width-100" src="img/home/effect9.jpg" alt="banner-2" title="banner-2" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="container">
                                    <div className="row">
                                        <div className="section new-arrivals col-lg-6 col-xs-6">
                                            <div className="tab-content">
                                                <div className="title-product">
                                                    <h2>New Arrivals</h2>
                                                    <p>Discover our new products</p>
                                                </div>
                                                <div className="category-product owl-carousel owl-theme owl-loaded owl-drag" style={{ display: "flex" }}>
                                                    <div className="item text-center">
                                                        <div className="product-miniature js-product-miniature item-one first-item">
                                                            <div className="thumbnail-container">
                                                                <a href="product-detail.html">
                                                                    <img className="img-fluid image-cover" src="img/product/6.jpg" alt="img" />
                                                                    <img className="img-fluid image-secondary" src="img/product/4.jpg" alt="img" />
                                                                </a>
                                                                <div className="product-flags discount">-30%</div>

                                                            </div>
                                                            <div className="product-description">
                                                                <div className="product-groups">
                                                                    <div className="product-title">
                                                                        <a href="product-detail.html">Nulla et justo non augue</a>
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
                                                                            <del className="regular-price">£28.68</del>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="product-buttons d-flex justify-content-center">
                                                                    <form action="#" method="post" className="formAddToCart">
                                                                        <input type="hidden" name="token" />
                                                                        <input type="hidden" name="id_product" value="1" />
                                                                        <a className="add-to-cart" href="#" data-button-action="add-to-cart">
                                                                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                                                        </a>
                                                                    </form>
                                                                    <a className="addToWishlist wishlistProd_1" href="#" data-rel="1" onClick="">
                                                                        <i className="fa fa-heart" aria-hidden="true"></i>
                                                                    </a>
                                                                    <a href="#" className="quick-view hidden-sm-down" data-link-action="quickview">
                                                                        <i className="fa fa-eye" aria-hidden="true"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item text-center">
                                                        <div className="product-miniature js-product-miniature item-one first-item">
                                                            <div className="thumbnail-container">
                                                                <a href="product-detail.html">
                                                                    <img className="img-fluid image-cover" src="img/product/10.jpg" alt="img" />
                                                                    <img className="img-fluid image-secondary" src="img/product/11.jpg" alt="img" />
                                                                </a>
                                                                <div className="product-flags discount">-10%</div>
                                                            </div>
                                                            <div className="product-description">
                                                                <div className="product-groups">
                                                                    <div className="product-title">
                                                                        <a href="product-detail.html">Nulla et justo non augue</a>
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
                                                                            <del className="regular-price">£28.68</del>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="product-buttons d-flex justify-content-center">
                                                                    <form action="#" method="post" className="formAddToCart">
                                                                        <input type="hidden" name="token" />
                                                                        <input type="hidden" name="id_product" value="1" />
                                                                        <a className="add-to-cart" href="#" data-button-action="add-to-cart">
                                                                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                                                        </a>
                                                                    </form>
                                                                    <a className="addToWishlist wishlistProd_1" href="#" data-rel="1" onClick="">
                                                                        <i className="fa fa-heart" aria-hidden="true"></i>
                                                                    </a>
                                                                    <a href="#" className="quick-view hidden-sm-down" data-link-action="quickview">
                                                                        <i className="fa fa-eye" aria-hidden="true"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item text-center">
                                                        <div className="product-miniature js-product-miniature item-one first-item">
                                                            <div className="thumbnail-container">
                                                                <a href="product-detail.html">
                                                                    <img className="img-fluid image-cover" src="img/product/16.jpg" alt="img" />
                                                                    <img className="img-fluid image-secondary" src="img/product/14.jpg" alt="img" />
                                                                </a>
                                                            </div>
                                                            <div className="product-description">
                                                                <div className="product-groups">
                                                                    <div className="product-title">
                                                                        <a href="product-detail.html">Nulla et justo non augue</a>
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
                                                                <div className="product-buttons d-flex justify-content-center">
                                                                    <form action="#" method="post" className="formAddToCart">
                                                                        <input type="hidden" name="token" />
                                                                        <input type="hidden" name="id_product" value="1" />
                                                                        <a className="add-to-cart" href="#" data-button-action="add-to-cart">
                                                                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                                                        </a>
                                                                    </form>
                                                                    <a className="addToWishlist wishlistProd_1" href="#" data-rel="1" onClick="">
                                                                        <i className="fa fa-heart" aria-hidden="true"></i>
                                                                    </a>
                                                                    <a href="#" className="quick-view hidden-sm-down" data-link-action="quickview">
                                                                        <i className="fa fa-eye" aria-hidden="true"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="section best-sellers col-lg-6 col-xs-6">
                                            <div className="tab-content">
                                                <div className="title-product">
                                                    <h2>Best Sellers</h2>
                                                    <p>Discover our best sellers</p>
                                                </div>
                                                <div className="category-product owl-carousel owl-theme owl-loaded owl-drag" style={{ display: "flex" }}>
                                                    <div className="item text-center">
                                                        <div className="product-miniature js-product-miniature item-one first-item">
                                                            <div className="thumbnail-container">
                                                                <a href="product-detail.html">
                                                                    <img className="img-fluid image-cover" src="img/product/26.jpg" alt="img" />
                                                                    <img className="img-fluid image-secondary" src="img/product/24.jpg" alt="img" />
                                                                </a>
                                                                <div className="product-flags discount">-30%</div>
                                                            </div>
                                                            <div className="product-description">
                                                                <div className="product-groups">
                                                                    <div className="product-title">
                                                                        <a href="product-detail.html">Nulla et justo non augue</a>
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
                                                                            <del className="regular-price">£28.68</del>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="product-buttons d-flex justify-content-center">
                                                                    <form action="#" method="post" className="formAddToCart">
                                                                        <input type="hidden" name="token" />
                                                                        <input type="hidden" name="id_product" value="1" />
                                                                        <a className="add-to-cart" href="#" data-button-action="add-to-cart">
                                                                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                                                        </a>
                                                                    </form>
                                                                    <a className="addToWishlist wishlistProd_1" href="#" data-rel="1" onClick="">
                                                                        <i className="fa fa-heart" aria-hidden="true"></i>
                                                                    </a>
                                                                    <a href="#" className="quick-view hidden-sm-down" data-link-action="quickview">
                                                                        <i className="fa fa-eye" aria-hidden="true"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item text-center">
                                                        <div className="product-miniature js-product-miniature item-one first-item">
                                                            <div className="thumbnail-container">
                                                                <a href="product-detail.html">
                                                                    <img className="img-fluid image-cover" src="img/product/13.jpg" alt="img" />
                                                                    <img className="img-fluid image-secondary" src="img/product/14.jpg" alt="img" />
                                                                </a>
                                                                <div className="product-flags discount">-10%</div>
                                                            </div>
                                                            <div className="product-description">
                                                                <div className="product-groups">
                                                                    <div className="product-title">
                                                                        <a href="product-detail.html">Nulla et justo non augue</a>
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
                                                                            <del className="regular-price">£28.68</del>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="product-buttons d-flex justify-content-center">
                                                                    <form action="#" method="post" className="formAddToCart">
                                                                        <input type="hidden" name="token" />
                                                                        <input type="hidden" name="id_product" value="1" />
                                                                        <a className="add-to-cart" href="#" data-button-action="add-to-cart">
                                                                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                                                        </a>
                                                                    </form>
                                                                    <a className="addToWishlist wishlistProd_1" href="#" data-rel="1" onClick="">
                                                                        <i className="fa fa-heart" aria-hidden="true"></i>
                                                                    </a>
                                                                    <a href="#" className="quick-view hidden-sm-down" data-link-action="quickview">
                                                                        <i className="fa fa-eye" aria-hidden="true"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item text-center">
                                                        <div className="product-miniature js-product-miniature item-one first-item">
                                                            <div className="thumbnail-container">
                                                                <a href="product-detail.html">
                                                                    <img className="img-fluid image-cover" src="img/product/12.jpg" alt="img" />
                                                                    <img className="img-fluid image-secondary" src="img/product/4.jpg" alt="img" />
                                                                </a>
                                                            </div>
                                                            <div className="product-description">
                                                                <div className="product-groups">
                                                                    <div className="product-title">
                                                                        <a href="product-detail.html">Nulla et justo non augue</a>
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
                                                                <div className="product-buttons d-flex justify-content-center">
                                                                    <form action="#" method="post" className="formAddToCart">
                                                                        <input type="hidden" name="token" />
                                                                        <input type="hidden" name="id_product" value="1" />
                                                                        <a className="add-to-cart" href="#" data-button-action="add-to-cart">
                                                                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                                                        </a>
                                                                    </form>
                                                                    <a className="addToWishlist wishlistProd_1" href="#" data-rel="1" onClick="">
                                                                        <i className="fa fa-heart" aria-hidden="true"></i>
                                                                    </a>
                                                                    <a href="#" className="quick-view hidden-sm-down" data-link-action="quickview">
                                                                        <i className="fa fa-eye" aria-hidden="true"></i>
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

                                <div className="section newsletter">
                                    <div className="container">
                                        <div className="row">
                                            <div className="news-content">
                                                <div className="tiva-modules">
                                                    <div className="block">
                                                        <div className="title-block">Newsletter</div>
                                                        <div className="sub-title">Sign up to our newsletter to get the latest articles, lookbooks voucher codes
                                                            direct to your inbox</div>
                                                        <div className="block-newsletter">
                                                            <form action="#" method="post">
                                                                <div className="input-group">
                                                                    <input type="text" className="form-control" name="email" value="" placeholder="Enter Your Email" />
                                                                    <span className="input-group-btn">
                                                                        <button className="effect-btn btn btn-secondary" name="submitNewsletter" type="submit">
                                                                            <span>subscribe</span>
                                                                        </button>
                                                                    </span>
                                                                </div>
                                                                <input type="hidden" name="action" value="0" />
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <div className="block">
                                                        <div className="social-content">
                                                            <div id="social-block">
                                                                <div className="social">
                                                                    <ul className="list-inline mb-0 justify-content-end">
                                                                        <li className="list-inline-item mb-0">
                                                                            <a href="#" target="_blank">
                                                                                <i className="fa fa-facebook"></i>
                                                                            </a>
                                                                        </li>
                                                                        <li className="list-inline-item mb-0">
                                                                            <a href="#" target="_blank">
                                                                                <i className="fa fa-twitter"></i>
                                                                            </a>
                                                                        </li>
                                                                        <li className="list-inline-item mb-0">
                                                                            <a href="#" target="_blank">
                                                                                <i className="fa fa-google"></i>
                                                                            </a>
                                                                        </li>
                                                                        <li className="list-inline-item mb-0">
                                                                            <a href="#" target="_blank">
                                                                                <i className="fa fa-instagram"></i>
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

                            </section>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
            <div className="back-to-top">
                <a href="#">
                    <i className="fa fa-long-arrow-up"></i>
                </a>
            </div>
            <MenuLeft />
            <MenuRight />
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

        </div>
    )
}

export default Main;
