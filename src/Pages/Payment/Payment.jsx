import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./payment.module.css";
import LayOut from "../../Components/Layout/LayOut";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { axiosInstance } from "../../Api/axios";
import { ClipLoader } from "react-spinners";
import { db } from "../../Utility/firebse";
import { Type } from "../../Utility/action.type";

function Payment() {
  const [{ user, basket},dispatch ] = useContext(DataContext);
  // console.log(user);
 
  // Calculate totals
  const totalItem = basket?.reduce((amount, item) => {
    return item.price * item.amount + amount;
  },0);

  const [cardError, setCardError] = useState(null);
  const [processing, setProcessing] = useState(false);

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const handleChange = (e) => {
    e?.error?.message ? setCardError(e?.error?.message) : setCardError("");
  };

  const handlePayment = async (e) => {
    e.preventDefault();
   
    try {
      setProcessing(true);
      // console.log('Total amount for payment:', total * 100);
   const response = await axiosInstance({
    method: "POST",
    url:`/payment/create?total=${totalItem * 100}`,
    // url: /payment/create?total=${parseInt(total * 100)},
    });
    
      const clientSecret = response.data?.clientSecret;

      const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      // if (user && user.uid) {
        await db
        .collection("users")
        .doc(user.uid)
        .collection("orders")
        .doc(paymentIntent.id)
        .set({
          basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        });
      // }
    //make empty the basket after the order payment done

      dispatch({ type: Type.EMPTY_BASKET });
      
      setProcessing(false);
       navigate("/orders", { state: { msg: "You have placed a new order" } });
    } catch(err) {
     console.log(err);
      setProcessing(false);
    }
  };

  return (
    <LayOut>
      <div className={classes.payment__header}>
        Checkout ({totalItem}) items
      </div>
      {/* Payment Method */}
      <section className={classes.payment}>
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>28 Bird Str.</div>
            <div>Columbus, OH</div>
          </div>
        </div>
        <hr />
        <div className={classes.flex}>
          <h3>Review Items and Delivery</h3>
          <div>
            {basket?.map((item) => (
              <ProductCard key={item.id} product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />
        <div className={classes.flex}>
          <h3>Payment Methods</h3>
          <div className={classes.payment__card__container}>
            <div className={classes.payment__details}>
              <form onSubmit={handlePayment}>
                {/* error */}
                {cardError && ( <small style={{ color: "red" }}>{cardError}</small>)}
                {/* Card element */}
                <CardElement onChange={handleChange} />
                {/* Price */}
                <div className={classes.payment__price}>
                  <div>
                    <span style={{ display: "flex", gap: "10px" }}>
                      <p>Total Order |</p>
                      <CurrencyFormat amount={totalItem} />
                    </span>
                  </div>
                  <button type="submit" >
                    {processing ? (
                      <div className={classes.loading}>
                        <ClipLoader color="gray" size={12} />
                        <p>Please Wait ...</p>
                      </div>
                    ) : (
                      "Pay Now"
                    )}
                  </button>
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




