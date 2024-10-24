import PropTypes from "prop-types";

function CurrencyFormat({ amount, currency = "USD", locale = "en-US" }) {
  const formattedAmount = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(amount);

  return <span>{formattedAmount}</span>;
}

CurrencyFormat.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string,
  locale: PropTypes.string,
};

export default CurrencyFormat;

// import PropTypes from "prop-types";

// function CurrencyFormat({ amount, currency = "USD", locale = "en-US" }) {
//   // If the amount is in cents, convert it to dollars
//   const isCents = currency === "USD" && amount > 100;
//   const displayAmount = isCents ? amount / 100 : amount;

//   // Format the amount as currency
//   const formattedAmount = new Intl.NumberFormat(locale, {
//     style: "currency",
//     currency: currency,
//   }).format(displayAmount);

//   return <span>{formattedAmount}</span>;
// }

// CurrencyFormat.propTypes = {
//   amount: PropTypes.number.isRequired,
//   currency: PropTypes.string,
//   locale: PropTypes.string,
// };

// export default CurrencyFormat;
