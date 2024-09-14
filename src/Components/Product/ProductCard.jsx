import { useContext } from "react";
import PropTypes from "prop-types";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";
import Rating from "@mui/material/Rating";

function ProductCard({ product, flex, renderDesc, renderAdd }) {
  const { state, dispatch } = useContext(DataContext);

  if (!product) {
    return <div>Product data is not available</div>;
  }

  const { image, title, id, rating, price, description } = product;

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: { image, title, id, rating, price, description },
    });
  };

  return (
    <div
      className={`${classes.card_container} ${
        flex ? classes.product_flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img
          src={image}
          alt={title || "Product image"}
          className={classes.im}
        />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{ maxWidth: "700px" }}>{description}</div>}
        <div className={classes.rating}>
          <Rating value={rating?.rate || 0} precision={0.1} readOnly />
          <small>{rating?.count || 0}</small>
        </div>
        <div>
          <CurrencyFormat amount={price} />
        </div>
        {renderAdd && (
          <button className={classes.button} onClick={addToCart}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number,
      count: PropTypes.number,
    }),
    price: PropTypes.number.isRequired,
    description: PropTypes.string,
  }).isRequired,
  flex: PropTypes.bool,
  renderDesc: PropTypes.bool,
  renderAdd: PropTypes.bool,
};

ProductCard.defaultProps = {
  flex: false,
  renderDesc: false,
  renderAdd: false,
};

export default ProductCard;
