
import PropTypes from "prop-types";
import Header from "../Header/Header";

function LayOut({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

LayOut.propTypes = {
  children: PropTypes.node.isRequired, // Define the expected type for 'children'
};

export default LayOut;
