
// // **************************************************************************
// import React, { useContext } from "react";
// import { DataContext } from "../../Components/DataProvider/DataProvider";
// import LayOut from "../../Components/Layout/LayOut";
// import ProductCard from "../../Components/Product/ProductCard";
// import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
// import { Link } from "react-router-dom";
// import classes from './cart.module.css';
// import { Type } from "../../Utility/action.type";
// import { IoIosArrowDown } from "react-icons/io";
// import { IoIosArrowUp } from "react-icons/io";
// function Cart() {
//   const [{ basket, user }, dispatch] = useContext(DataContext);

//   const total = basket.reduce((amount, item) => {
//     return item.price * item.amount + amount;
//   }, 0);

//   const increment = (item) => {
//     dispatch({
//       type: Type.ADD_TO_BASKET,
//       item,
//     });
//   };

//   const decrement = (id) => {
//     dispatch({
//       type: Type.REMOVE_FROM_BASKET,
//       id,
//     });
//   };

//   return (
//     <LayOut>
//       <section className={classes.container}>
//         <div className={classes.cart__container}>
//           <h2>Hello</h2>
//           <h3>Your Shopping Basket</h3>
//           <hr />
//           {basket?.length === 0 ? (
//             <p>Uh-oh! You haven’t added anything to your cart</p>
//           ) : (
//             basket?.map((item, i) => (
//               <section key={i} className={classes.cart_product}>
//                 <ProductCard
//                   product={item}
//                   renderDesc={true} // Ensure description is rendered
//                   renderAdd={false} // Adjust if you want the "Add to Cart" button or not
//                   flex={true} // Ensure flex is true to apply horizontal layout
//                 />
//                 <div className={classes.btn_container}>
//                   <button
//                     className={classes.btn}
//                     onClick={() => increment(item)}
//                   >
//                     <IoIosArrowUp size={30} />
//                   </button>
//                   <span>{item.amount}</span>
//                   <button
//                     className={classes.btn}
//                     onClick={() => decrement(item.id)}
//                   >
//                     <IoIosArrowDown size={30} />
//                   </button>
//                 </div>
//               </section>
//             ))
//           )}
//         </div>

//         {basket?.length !== 0 && (
//           <div className={classes.subtotal}>
//             <div>
//               <p>Subtotal ({basket?.length} items)</p>
//               <CurrencyFormat amount={total} />
//             </div>
//             <span>
//               <input type="checkbox" />
//               <small> This order contains a gift</small>
//             </span>
//             <Link to="/payments">Continue to checkout</Link>
//           </div>
//         )}
//       </section>
//     </LayOut>
//   );
// }

// export default Cart;

// *******************************************************

import React, { useContext } from "react";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import LayOut from "../../Components/Layout/LayOut";
import ProductCard from "../../Components/Product/ProductCard";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import classes from './cart.module.css'; // Import CSS Module
import { Type } from "../../Utility/action.type";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);

  const total = basket.reduce(
    (amount, item) => item.price * item.amount + amount,
    0
  );

  const increment = (item) => dispatch({ type: Type.ADD_TO_BASKET, item });
  const decrement = (id) => dispatch({ type: Type.REMOVE_FROM_BASKET, id });

  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.cart__container}>
          <h2>Hello</h2>
          <h3>Your Shopping Basket</h3>
          <hr />
          {basket?.length === 0 ? (
            <h3>Uh-oh! You haven’t added anything to your cart</h3>
          ) : (
            basket.map((item, i) => (
              <section key={i} className={classes.cart_product}>
                <ProductCard
                  product={item}
                  renderDesc={true}
                  renderAdd={false}
                  flex={true}
                />
                <div className={classes.btn_container}>
                  <button
                    className={classes.btn}
                    onClick={() => increment(item)}
                  >
                    <IoIosArrowUp size={30} />
                  </button>
                  <span>{item.amount}</span>
                  <button
                    className={classes.btn}
                    onClick={() => decrement(item.id)}
                  >
                    <IoIosArrowDown size={30} />
                  </button>
                </div>
              </section>
            ))
          )}
        </div>

        {basket?.length !== 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>Subtotal ({basket?.length} items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small> This order contains a gift</small>
            </span>
            <Link to="/payments">Continue to checkout</Link>
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Cart;

