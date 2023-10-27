import PropTypes from "prop-types";

const TotalDisplay = ({ total }) => {
  return <span>Total: ${total}</span>;
};

TotalDisplay.propTypes = {
  total: PropTypes.number.isRequired,
};

export default TotalDisplay;
