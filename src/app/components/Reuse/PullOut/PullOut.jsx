import PropTypes from "prop-types";
import "./PullOut.css";

const PullOut = ({ isOpen = false, position = "left", children }) => {
  return (
    <div
      onTransitionEnd={(e) => {
        if (e.currentTarget.classList.contains("open")) {
          e.currentTarget.classList.add("transitioned");
        } else {
          e.currentTarget.classList.remove("transitioned");
        }
      }}
      className={`pull-out-menu ${position} ${isOpen ? "open" : ""}`}
    >
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
