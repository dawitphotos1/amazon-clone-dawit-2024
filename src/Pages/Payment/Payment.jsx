import react, { useContext, useState } from 'react'
import classes from "./payment.module.css";
import LayOut from '../../Components/Layout/LayOut';
import { DataContext } from '../../Components/DataProvider/DataProvider';
import ProductCard from '../../Components/Product/ProductCard'
import {useStripe,useElements,CardElement} from "@stripe/react-stripe-js";
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat';
import { axiosInstance } from '../../Api/axios';

function Payment() {
  const [{user, basket }] = useContext(DataContext);
  console.log(user);
  // Calculate the total number of items in the basket
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

    const total = basket.reduce(
      (amount, item) => item.price * item.amount + amount,
      0
    );

  const [cardError,setCardError]=useState(null)
   const stripe = useStripe();
   const elements = useElements();

   const handleChange=(e)=>{
    console.log(e);
    e?.error?.message?setCardError(e?.error?.message):setCardError("");
   };

 const handlePayment=(e)=>{
  e.preventDefault()

  try {
 //1.  backend || functions --->contact to the client secret
    const response=await axiosInstance({
      method:"POST",
      url:`payment/create?total=${total}`,
    });
    console.log(response.data);
  }catch (error){

  }

 


  //2.Client side (react side confirmation using stripe)

  //3. After the confirmation --> order fire database save,clear basket

 } 

  return (
    <LayOut>
      {/* Header */}
      <div className={classes.payment__header}>
        Checkout ({totalItem}) items
      </div>
      {/* Payment method */}
      <section className={classes.payment}>
        {/* address */}
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>28 Bird Str.</div>
            <div>Columbus,OH</div>
          </div>
        </div>
        <hr />
        {/* product */}
        <div className={classes.flex}>
          <h3>Review Items and Delivery</h3>
          <div>
            {basket?.map((item) => (
              <ProductCard key={item.id} product={item} flex={true} />
            ))}
          </div>
        </div>

        <hr />
        {/* card form */}
        <div className={classes.flex}>
          <h3>Payment Methods</h3>
          <div className={classes.payment__card__container}>
            <div className={classes.payment__details}>
              <form onSubmit={handlePayment}>
                {/* error */}
                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}
                {/*card element  */}
                <CardElement onChange={handleChange} />
                {/* price */}
                <div className={classes.payment__price}>
                  <div>
                    <span style={{display:"flex", gap:"10px"}}>
                      <p>Total Order |</p> <CurrencyFormat amount={total} />
                    </span>
                  </div>
                  <button type='submit'>Pay Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Payment;
