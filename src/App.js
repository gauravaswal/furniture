import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from "../src/pages/main"
import Product from "../src/pages/product-detail"
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import "./App.css"
const App = ()=>{
return (
    <BrowserRouter>
       <Routes>
         <Route path="/" element={<Main />} />
         <Route path="/product/:id" element={<Product />} />

       </Routes>
    </BrowserRouter>
)

}
    export default App
