import  { useEffect, useState } from "react";
// import classes from './ProductDetail.module.css';
import LayOut from '../../Components/Layout/LayOut';
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from '../../Api/endPoints';
import ProductCard from '../../Components/Product/ProductCard';
import Loader from '../../Components/Loader/Loader';

function ProductDetail() {
  const [product, setProduct] = useState(null); // Initialize with null to handle loading
  const [isLoading, setIsLoading] = useState(true); // Start as loading
  const { productId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}/products/${productId}`) // Use template literals for dynamic URL
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product data:", err); // Improved error logging
        setIsLoading(false);
      });
  }, [productId]); // Include productId in the dependency array to refetch on change

  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : product ? (
        <ProductCard
          product={product}
          flex={true}
          renderDesc={true}
          renderAdd={true}
        />
      ) : (
        <p>No product found</p> // Handle case where product data is not found
      )}
    </LayOut>
  );
}

export default ProductDetail;
