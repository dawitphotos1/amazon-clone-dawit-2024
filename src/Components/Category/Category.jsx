
// import CategoryCard from '../Category/CategoryCard'; // Ensure this path is correct
// import styles from './category.module.css'; // Ensure this path is correct
// import { categoryInfos } from './categoryFullInfos';



// function Category() {
//   return (
//     <section className={styles.category__container}>
//       {categoryInfos.map((infos) => (
//         <CategoryCard
//           key={infos.name} // Prefer a unique identifier; 'name' is used here
//           data={infos}
//         />
//       ))}
//     </section>
//   );
// }

// export default Category;



// import CategoryCard from "../Category/CategoryCard"; // Ensure this path is correct
// import styles from "./category.module.css"; // Ensure this path is correct
// import { categoryInfos } from "./categoryFullInfos";

// function Category() {
//   console.log(categoryInfos); // Log to check data
//   return (
//     <section className={styles.category__container}>
//       {categoryInfos.map((infos) => (
//         <CategoryCard key={infos.name} data={infos} />
//       ))}
//     </section>
//   );
// }

// export default Category;


// ****************************************************
import CategoryCard from "../Category/CategoryCard"; // Ensure this path is correct
import styles from "./category.module.css"; // Ensure this path is correct
import { categoryInfos } from "./categoryFullInfos";

function Category() {
  console.log(categoryInfos); // Log to check data
  return (
    <section className={styles.category__container}>
      {categoryInfos.map((infos) => (
        <CategoryCard key={infos.name} data={infos} />
      ))}
    </section>
  );
}

export default Category;



