import React, { useEffect, useState } from "react";
// import classes from './ProductDetail.module.css'
import LayOut from "../../Componenets/Layout/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../API/EndPoints";
import ProductCard from "../../Componenets/Product/ProductCard";
import Loader from "../../Componenets/Loader/Loader";

function ProductDetail() {
  
  const { productId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState({});
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  return (
    <LayOut>
      {isLoading ? <Loader /> : <ProductCard product={product}
        flex={true}
        renderDesc={true}
        renderAdd={true}
      />}
    </LayOut>
  );
}

export default ProductDetail;
