import React , {useState} from 'react';
import './navbar.css';
import logo from '../static/logo.png'


const Navbar = () => {

 
    const Handleclick = (e) =>{
       const check = document.getElementById('list');
       console.log(window.getComputedStyle(check));
      if(window.getComputedStyle(check).display == 'block')
      {
        check.style.display = 'none'
      }
      else{
        check.style.display  = 'block'
      }
    }
  return <div className='navbarmaster'>
       <img className='imagelogo' src={logo} alt="logo" />
        <ul id='list' className="list">
           
            <li className="listname placeSearch">
            <i className="fas fa-map-marker-alt"></i>
                <input id='location' type="text" placeholder=' Set Location' />
            </li>
            <li className="listname">
                <span><i className="fas fa-search fa-2x"></i></span>
                <div>search</div></li>
            <li className="listname g-signin"><a href="/signup"><button className='Signinbtn'>Sign up</button></a></li>
            <li className="listname">
                <i className="fas fa-shopping-cart fa-2x"></i>
                <div className='NumberofItems'>25</div>
            </li>
        </ul>
           <span onClick={Handleclick} className="hamburger"><i className="fas fa-bars fa-2x"></i></span>
  </div>;
};

export default Navbar;
