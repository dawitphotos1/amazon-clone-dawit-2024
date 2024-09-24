
// src/Router.jsx
import { BrowserRouter as Router, Routes, Route, redirect } from 'react-router-dom';
import Landing from './Pages/Landing/Landing';
import Auth from './Pages/Auth/Auth'; // Adjusted file name
import Payment from './Pages/Payment/Payment';
import Orders from './Pages/Orders/Orders';
import Cart from './Pages/Cart/Cart';
import Results from './Pages/Results/Results';
import ProductDetail from './Pages/ProductDetail/ProductDetail'; 
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';

const stripePromise = loadStripe(
  "pk_test_51Q0YNH08MYT9xBJyzjT1GDwJumh7VM1n5E6RnGCNWeGxW3m9x666QhitWvUmJODfhkcOsZldFq5DxdcGRC62bE1y00pWSkraUh"
);

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/payments"
          element={
            <ProtectedRoute
              msg={"You must log in to Pay"}
              redirect={"/Payments"}
            >
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />

        <Route
          path="/orders"
          element={
            <ProtectedRoute
              msg={"You must log in to access your Orders"}
              redirect={"/Orders"}
            >
              <Orders />
            </ProtectedRoute>
          }
        />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="*" element={<NotFound />} /> */}
        {/* Catch-all route for 404 errors */}
      </Routes>
    </Router>
  );
}

export default Routing;

