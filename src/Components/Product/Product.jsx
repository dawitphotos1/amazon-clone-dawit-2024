// import  { useEffect, useState } from "react";
// import axios from 'axios';
// import ProductCard from './ProductCard';
// import classes from './Product.module.css';
// import Loader from '../Loader/Loader';

// function Product() {
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null); // Added state for error handling

//   useEffect(() => {
//     axios
//       .get('https://fakestoreapi.com/products')
//       .then((res) => {
//         setProducts(res.data);
//         isLoading(false);
//       })
//       .catch((err) => {
//         // setError("Failed to fetch products. Please try again later."); // Set error message
//         isLoading(false);
//       })
//   }, [])

//   return (
//     <>
//       {isLoading ? (<Loader />) : error ? (<p>{error}</p> // Display error message if an error occurs
//       ) : (<section className={classes.Products_container}>
//           {products.length > 0 ? (products?.map((singleProduct) => (
//               <ProductCard
//                 key={singleProduct.id}
//                 product={singleProduct}
//                 renderAdd={true}
//               />
//             ))
//           ) : (
//             <p>No products available</p>
//           )}
//         </section>
//       )}
//     </>
//   )
// }

// export default Product;


// *****************************************************

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

    
  // if (isLoading) return <Loader />; // Show loader while loading

  // if (error) return <p>{error}</p>; // Show error message if an error occurs

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

