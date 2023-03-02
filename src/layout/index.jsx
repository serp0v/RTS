import HeaderContainer from "./HeaderContainer/HeaderContainer";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <section>
      <HeaderContainer />
      <main>{children}</main>
    </section>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
