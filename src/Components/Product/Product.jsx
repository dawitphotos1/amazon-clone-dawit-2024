import  { useEffect, useState } from "react";
import axios from 'axios';
import ProductCard from './ProductCard';
import classes from './Product.module.css';
import Loader from '../Loader/Loader';

function Product() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); // Added state for error handling

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch products. Please try again later."); // Set error message
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <p>{error}</p> // Display error message if an error occurs
      ) : (
        <section className={classes.Products_container}>
          {products.length > 0 ? (
            products.map((singleProduct) => (
              <ProductCard
                key={singleProduct.id}
                product={singleProduct}
                renderAdd={true}
              />
            ))
          ) : (
            <p>No products available</p>
          )}
        </section>
      )}
    </>
  );
}

export default Product;
