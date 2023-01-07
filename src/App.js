import Main from "../src/pages/main"
import Signin from "../src/pages/signin"
import Register from "../src/pages/signup"
import Checkout from "./pages/product-checkout";
import Wishlist from "./pages/whishlist"
import ProductDetail from "./pages/product-detail"
import ForgetPassword from "./pages/forgetpassword";

import ProductListing from "./pages/product-listing";


import Google from "./pages/google-login"
import Myaccount from "./pages/Myaccount"
import './App.css';
import './Responsive.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Main />}></Route>
			<Route path="/google" element={<Google />}></Route>
			<Route path="/signin" element={<Signin />}></Route>
			<Route path="/signup" element={<Register />}></Route>
			<Route path="/checkout" element={<Checkout />}></Route>
			<Route path="/wishlist" element={<Wishlist />}></Route>
			<Route path="/product/:id" element={<ProductDetail />}></Route>
			<Route path="/forget-password" element={<ForgetPassword />}></Route>
			<Route path="/account" element={<Myaccount />}></Route>

			<Route path="/product-listing" element={<ProductListing />}></Route>

			
			


		</Routes>
	);
}

export default App;
