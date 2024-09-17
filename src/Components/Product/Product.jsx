import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from "./Product.module.css";
import Loader from "../Loader/Loader";

function Product() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Start with loading true
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false); // Corrected function call
      })
      .catch((err) => {
        setError("Failed to fetch products. Please try again later."); // Set error message
        setIsLoading(false); // Corrected function call
      });
  }, []);

    
   return (
    <>
    {
        isLoading?(<Loader/>):(<section className={classes.Products_container}>
        {
           products?.map((singleProduct) => {
          return  <ProductCard renderAdd={true} product={singleProduct}
              key={singleProduct.id}/>
         })
        } 
           </section>)
}   
            </>
      )
      
      }
  



export default Product

