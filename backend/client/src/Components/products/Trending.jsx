import React, { useState,useEffect } from 'react';
import "./Trending.css"

export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  );

};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {  
        updateIndex(activeIndex + 1);
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    }
    else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    };

    setActiveIndex(newIndex);
  };
  return (
    <div className="carousel">
      <div className="inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {
          React.Children.map(children, (child, index) => {
            return React.cloneElement(child, { width: "100%" });
          })
        }
      </div>

      <div className="indicators">
        <button className='carousel__btn carousel__btn--prev' onClick={() => {
          updateIndex(activeIndex - 1);
        }}> <span><i className="fas fa-chevron-circle-left fa-2x"></i></span>  </button>

        {React.Children.map(children, (child, index) => {
          return (
            <button
              className={`${index === activeIndex ? "active" : ""} carousel__nav`}
              onClick={() => {
                updateIndex(index);
              }}
            >
              {index + 1}
            </button>
          );
        })}

        <button className='carousel__btn carousel__btn--next' onClick={() => {
          updateIndex(activeIndex + 1);
        }}> <span><i className="fas fa-chevron-circle-right fa-2x"></i></span>  </button>


      </div>
    </div>
  );
};

const CarouselSetup = () => {
  return (
    <Carousel>
      <CarouselItem><img src="https://picsum.photos/700/500" alt="" /></CarouselItem>
      <CarouselItem><img src="https://picsum.photos/700/500" alt="" /></CarouselItem>
      <CarouselItem><img src="https://picsum.photos/700/500" alt="" /></CarouselItem>
    </Carousel>
  )
}

const TrendingCarousel = () =>{
  return (
    <div className="CarouselContainer">
      <div className="TrendingCarouselHeading">
        Trending Products
      </div>
      <CarouselSetup/>
    </div>
  )
}
export default TrendingCarousel;
//see different types of effect that can be used in a webiste
