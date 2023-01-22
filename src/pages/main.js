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
import LoginModel from '../components/LoginMode';
import RegisterModel from '../components/Register';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
const Main = () => {
    const [category, setCategory] = useState([])
    const [modalShow, setModalShow] = React.useState(false);
    const [registerShow, setRegisterShow] = React.useState(false);
     const handleModel = (flag,data) =>{
        console.log("-eimhdfd",flag,data)
        if(flag == 1){
            setModalShow(data)
        }else if(flag ==2){
            setRegisterShow(data)
        }
       
     }

    return (
         <>
            <Header  handleModel={handleModel}  />
            <LoginModel   show={modalShow}  handleModel={handleModel}/>
            <RegisterModel   handleModel={handleModel}    show={registerShow}  />
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
