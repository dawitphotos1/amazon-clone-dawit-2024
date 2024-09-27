import { useContext } from "react"; // Import useContext
import classes from "./header.module.css"; // Import CSS module for styling
import { Link } from "react-router-dom"; // Import Link for routing
import { SlLocationPin } from "react-icons/sl"; // Import icons
import { BsSearch, BsCartPlus } from "react-icons/bs";
import LowerHeader from './LowerHeader'; // Import LowerHeader component
import { DataContext } from "../DataProvider/DataProvider"; // Import DataContext
import {auth} from '../../Utility/firebse'

const Header = () => {
  // Use the context to get the basket and dispatch function
  const [ {user,basket} , dispatch ] = useContext(DataContext);

  // Calculate the total number of items in the basket
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount
  },0)
    
    

  return (
    <section className={classes.fixed}>
      <div className={classes.header__container}>
        {/* Logo section */}
        <div className={classes.logo__container}>
          <Link to="/" aria-label="Home">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="Amazon logo"
            />
          </Link>
          <div className={classes.delivery}>
            <span aria-label="Location">
              <SlLocationPin />
            </span>
            <div>
              <p>Delivery to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>

        {/* Search section */}
        <div className={classes.search}>
          <select name="" id="">
            <option value="">All</option>
            {/* Add more options as needed */}
          </select>
          <input type="text" />
          <BsSearch size={38} />
        </div>

        {/* Other section */}
        <div className={classes.order__container}>
          <Link
            to="/"
            className={classes.language}
            aria-label="Select Language"
          >
            <img
              src="https://pngimg.com/uploads/flags/flags_PNG14655.png"
              alt="Flag"
            />
            <select aria-label="Language">
              <option value="">EN</option>
              {/* Add more options as needed */}
            </select>
          </Link>
          <Link to={!user && "/auth"}>
            <div>
              {user ? (
                <>
                  <h6>Hello {user?.email?.split("@")[0]}</h6>
                  <span onClick={()=>auth.signOut()}>Sign Out</span>
                </>
              ) : (
                <>
                  <h6>Hello,Sign In</h6> 
                  <span>Account & Lists</span>
                </>
              )}
            </div>
          </Link>
          <Link to="/orders">
            <p>Returns</p>
            <span>& Orders</span>
          </Link>
          <Link to="/cart" className={classes.cart}>
            <BsCartPlus size={35} aria-label="Cart" />
            <span>{totalItem}</span>
          </Link>
        </div>
      </div>

      {/* LowerHeader component */}
      <LowerHeader classes={classes} />
    </section>
  );
};

export default Header;
