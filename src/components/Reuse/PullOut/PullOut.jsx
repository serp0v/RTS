import PropTypes from "prop-types";

import "./PullOut.css";
import "./PullOut.adaptive.css";

const PullOut = ({ isOpen = false, position = "left", children }) => {
  return (
    <div className={`pull-out-menu ${position} ${isOpen ? "open" : ""}`}>
      {children}
    </div>
  );
};

PullOut.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.node,
  position: PropTypes.string,
};

export default PullOut;
