import PropTypes from "prop-types";

import "./New.css";
import "./New.adaptive.css";

const New = ({ singleNew }) => {
  return (
    <div className="new">
      <div className="new-text">
        <p className="title">{singleNew.title}</p>

        <p className="new-subtitle">{singleNew.subtitle}</p>
      </div>
    </div>
  );
};

New.propTypes = {
  singleNew: PropTypes.object,
};

export default New;
