import React, { useEffect, useState } from 'react';
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Apis } from "../helper/ApiEndpoints";
import { axiosRequest } from "../helper/Api";
import { Link } from "react-router-dom";
import Carasol from "../components/Carosol"
import Feature from '../components/Feature';
import Category from '../components/Category';
import Product from "../components/Product";
import Vendor from '../components/Vendor';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
const Main = () => {
    const [category, setCategory] = useState([])
 
    return (
         <>
            <Header />
             <Carasol />
             <Feature />
             <Category />
             <Product />
             <Vendor />
            <Footer />
            </>
    )
}

export default Main;
