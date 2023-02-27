import Header from "./Header/Header";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <section>
      <Header />
      <main>{children}</main>
    </section>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
