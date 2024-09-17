import { Link } from "react-router-dom"; // Import Link from react-router-dom
import PropTypes from "prop-types"; // Import PropTypes for validation
import styles from "./category.module.css"; // Import CSS module for styling

function CategoryCard({data

}) {
  // Destructure the data object
  const { title, imgLink, name } = data;

  return (
    <div className={styles.category}>
      <Link to={`/category/${name}`}>
        <h2>{title}</h2>
        <img src={imgLink} alt={title} />
        <p>Shop Now</p>
      </Link>
    </div>
  );
}

// Define PropTypes for the component
CategoryCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    imgLink: PropTypes.string,
    name: PropTypes.string,
  }),
};

export default CategoryCard;

// ***************************************************

