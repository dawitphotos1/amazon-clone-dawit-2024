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
