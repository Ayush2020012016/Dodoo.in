import React from 'react';
import Navbar from './Components/navbarComp/Navbar'
import Frontpage from './Components/Mainsection/Frontpage'
import Services from './Components/Mainsection/Services';
import TrendingCarousel from './Components/products/Trending';
import ProductsGrid from './Components/products/ProductsGrid';
import Reviews from './Components/Reviewsfolder/Reviews'
import Footer from './Components/Footerfolder/Footer'
import Signupform from './Components/navbarComp/Signupform'
import Loginform from './Components/navbarComp/login/Loginform'
import Productdetail from './Components/Aboutproduct/Productdetail'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



const App = () => {
  return <>
    <div>
            <Navbar />

      <Router>
        <Routes>
          <Route path="/signup" element={<Signupform />}/>
          <Route path="/login" element={<Loginform />}/>
          <Route path="/product" element={<Productdetail />}/>
          <Route path="/" element={<>
            <Frontpage />
            <Services />
            <TrendingCarousel />
            <ProductsGrid />
            <Reviews /></>}>
            
          </Route>
        </Routes>
      </Router>

      <Footer />
    </div>
  </>

};

export default App;
