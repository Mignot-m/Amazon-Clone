import React from 'react'
import LayOut from '../../Componenets/Layout/LayOut'
import CarouselComponenet from '../../Componenets/Carousel/CarouselComponent'
import Category from '../../Componenets/Category/Category'
import Product from "../../Componenets/Product/Product"

function Landing() {
  return (
    <LayOut>
          <CarouselComponenet />
          <Category />
          <Product />
    </LayOut>
  )
}

export default Landing
