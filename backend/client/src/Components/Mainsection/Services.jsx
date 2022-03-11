import React from 'react';
import './Services.css';
import FruitsAndVegetable from '../static/FruitsAndVegetable.png';
import PickupAndDrop from '../static/PickupAndDrop.png';
import groceriesAndEssential from '../static/groceriesAndEssential.png';
import Restuarants from '../static/Restuarants.jpg';


const Services = () => {
    return <div className='servicemaster'>
         <div className="serviceHeading">
             Services We Offer
         </div>
        <div className="option">
            <div className="option1"><a href="/"><img src={FruitsAndVegetable} alt=""/> </a>    </div>
            <div className="option2"><a href="/"><img src={PickupAndDrop} alt=""/> </a>        </div>
            <div className="option3"><a href="/"><img src={groceriesAndEssential} alt=""/> </a> </div>
            <div className="option4"><a href="/"><img src={Restuarants} alt=""/> </a>        </div>
        </div>
    </div>
};

export default Services;
