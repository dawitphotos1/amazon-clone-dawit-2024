

// import { Link } from "react-router-dom"; // Import Link from react-router-dom
// import PropTypes from "prop-types"; // Import PropTypes for validation
// import styles from './category.module.css'; // Import CSS module for styling

// function CategoryCard({ data }) {
//   // Check if data is available
//   if (!data) {
//     return <div>No data available</div>; // Display a message if no data
//   }

//   // Destructure and provide default values for data properties
//   const {
//     title = "Default Title",
//     imgLink = "default.jpg",
//     name = "default-name",
//   } = data;

//   return (
//     <div className={styles.category}>
//       <Link to={`/category/${name}`}>
//         <h2>{title}</h2>
//         <img src={imgLink} alt={title} />
//         <p>Shop Now</p>
//       </Link>
//     </div>
//   );
// }

// // Define PropTypes for the component
// CategoryCard.propTypes = {
//   data: PropTypes.shape({
//     title: PropTypes.string,
//     imgLink: PropTypes.string,
//     name: PropTypes.string,
//   }),
// };

// // Define default prop values
// CategoryCard.defaultProps = {
//   data: {
//     title: "Default Title",
//     imgLink: "default.jpg",
//     name: "default-name",
//   },
// };

// export default CategoryCard;



import { Link } from "react-router-dom"; // Import Link from react-router-dom
import PropTypes from "prop-types"; // Import PropTypes for validation
import styles from "./category.module.css"; // Import CSS module for styling

function CategoryCard({data
  // data = {
  //   title: "Default Title",
  //   imgLink: "default.jpg",
  //   name: "default-name",
  // },
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

