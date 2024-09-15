import  { useEffect, useState } from "react";
import classes from './results.module.css';
import LayOut from '../../Components/Layout/LayOut';
import { useParams } from "react-router-dom";
import axios from 'axios';
import ProductCard from '../../Components/Product/ProductCard';
import Loader from '../../Components/Loader/Loader';
import { productUrl } from "../../Api/endPoints";

function Results() {
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const { categoryName } = useParams()

  useEffect(() => {
    setIsLoading(true)
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.error("API Error:", err)
        setError("Failed to fetch results.")
        setIsLoading(false)
      })
  }, [categoryName])

  return (
    <LayOut>
      <section>
        <h1 className={classes.header}>Results</h1>
        <p className={classes.categoryInfo}>Category: {categoryName}</p>
        <hr />
        {isLoading ? (
          <Loader />
        ) : error ? (
          <p className={classes.error}>{error}</p>
        ) : results.length > 0 ? (
          <div className={classes.products_container}>
            {results.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className={classes.noResults}>
            No products found in this category.
          </p>
        )}
      </section>
    </LayOut>
  );
}

export default Results;
