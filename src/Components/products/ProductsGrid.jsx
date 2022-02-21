import React from 'react';
import './ProductsGrid.css';
;


const ProductsGrid = () => {
    return <div className='ProductGridContainer'>
        <div className="ProductGridheading">
            Products
        </div>
        <div className="productsGrid">
            <div className="productImageContainer product1">
                <div className="imagecontainer">
                    <img src="https://picsum.photos/700/500" alt="" />
                </div>
                <div className="discount">
                    <div className="productsname">MakeMania</div>
                    <div className="productdiscount">100%Off</div>
                </div>
            </div>
            <div className="productImageContainer product2">
                <div className="imagecontainer">
                    <img src="https://picsum.photos/700/500" alt="" />
                </div>
                <div className="discount">
                    <div className="productsname">MakeMania</div>
                    <div className="productdiscount">100%Off</div>
                </div>
            </div>
            <div className="productImageContainer product3">
                <div className="imagecontainer">
                    <img src="https://picsum.photos/700/500" alt="" />
                </div>
                <div className="discount">
                    <div className="productsname">MakeMania</div>
                    <div className="productdiscount">100%Off</div>
                </div>
            </div>
            <div className="productImageContainer product4">
                <div className="imagecontainer">
                    <img src="https://picsum.photos/700/500" alt="" />
                </div>
                <div className="discount">
                    <div className="productsname">MakeMania</div>
                    <div className="productdiscount">100%Off</div>
                </div>
            </div>
            <div className="productImageContainer product5">
                <div className="imagecontainer">
                    <img src="https://picsum.photos/700/500" alt="" />
                </div>
                <div className="discount">
                    <div className="productsname">MakeMania</div>
                    <div className="productdiscount">100%Off</div>
                </div>
            </div>
           
        </div>

    </div>;
};

export default ProductsGrid;
