
import classes from './header.module.css';
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

function LowerHeader() {
  return (
    <div className={classes.lower__container}>
      <ul>
        <li>
          <AiOutlineMenu aria-label="Menu" />
          <Link to="/all" aria-label="All categories">
            <p>All</p>
          </Link>
        </li>
        <li>
          <Link to="/deals" aria-label="Today's Deals">
            Today's Deals
          </Link>
        </li>
        <li>
          <Link to="/customer-service" aria-label="Customer Service">
            Customer Service
          </Link>
        </li>
        <li>
          <Link to="/registry" aria-label="Registry">
            Registry
          </Link>
        </li>
        <li>
          <Link to="/gift-cards" aria-label="Gift Cards">
            Gift Cards
          </Link>
        </li>
        <li>
          <Link to="/sell" aria-label="Sell">
            Sell
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default LowerHeader;
