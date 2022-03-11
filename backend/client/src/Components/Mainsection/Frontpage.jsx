import React from 'react';
import model from '../static/model.png'
// import model2 from '../static/model2.png'
import logo from '../static/logo.png'
// import grocery from '../static/grocery.jpg'
import googleplaystore from '../static/googleplaystore.png'
import apple from '../static/apple.png'
import './frontpage.css'

const Frontpage = () => {
    return <div className='frontpagemaster'>
        <div className="firstsection">
            <div className="companyvision">
                <div className="companyimage">
                    <img src={logo} alt="" />
                    <h1>Anything you request dodoo will do it for you </h1>
                </div>

                <p className='para1'>For Better Deals and Discount.</p>
                <p className='para2'>Best Ranges Even better prices</p>
                <p className='para3'>Download now</p>

                <div className="download">
                    <div className="googlelink">
                        <a href="/"><img src={googleplaystore} alt="" /></a>
                    </div>
                   <div className="applelink">
                       <a href="/"><img src={apple} alt="" /></a>
                   </div>
                   
                </div>
            </div>


        </div>
        <div className="secondsection">
            <img src={model} alt="modelimage" />
        </div>
    </div>;
};

export default Frontpage;


//set responsive
//fix problem of spacing