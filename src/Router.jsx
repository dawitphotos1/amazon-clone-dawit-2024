
// // src/Router.jsx
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Landing from './Pages/Landing/Landing';
// import Auth from './Pages/Auth/Auth'; // Adjusted file name
// import Payment from './Pages/Payment/Payment';
// import Orders from './Pages/Orders/Orders';
// import Cart from './Pages/Cart/Cart';
// import Results from './Pages/Results/Results';
// import ProductDetail from './Pages/ProductDetail/ProductDetail'; 


// function Routing() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Landing />} />
//         <Route path="/auth" element={<Auth />} />
//         <Route path="/payments" element={<Payment />} />
//         <Route path="/orders" element={<Orders />} />
//         <Route path="/category/:categoryName" element={<Results />} />
//         <Route path="/products/:productId" element={<ProductDetail />} />
//         <Route path="/cart" element={<Cart />} />
//         {/* <Route path="*" element={<NotFound />} /> */}
//         {/* Catch-all route for 404 errors */}
//       </Routes>
//     </Router>
//   );
// }

// export default Routing;


// ********************************************************

// src/Router.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Pages/Landing/Landing';
import Auth from './Pages/Auth/Auth';
import Payment from './Pages/Payment/Payment';
import Orders from './Pages/Orders/Orders';
import Cart from './Pages/Cart/Cart';
import Results from './Pages/Results/Results';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
// import NotFound from './Pages/NotFound'; // Uncomment if you have a NotFound component

function Routing() {
  return (
    <Router basename="/amazon-clone-dawit-2024"> {/* Add basename here */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/payments" element={<Payment />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default Routing;


