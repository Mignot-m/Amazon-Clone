import React from 'react'
import { Carousel } from 'react-responsive-carousel'

import { img } from './Images/data'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "../Carousel/Carousel.module.css";
function CarouselComponent() {
  return (
    <div>
          <Carousel
              autoplay={true}
              infiniteloop={true}
              showIndicators={false}
              showThumbs={false}
          >
              {
                  img.map((imageItemLinks,index) => {
                    return <img src={imageItemLinks} key={ index} />
                  })
             } 
      </Carousel>
      <div className={classes.hero__img}></div>
    </div>
  )
}

export default CarouselComponent;
