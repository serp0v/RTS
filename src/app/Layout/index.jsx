import Header from "./Header/Header";

const Layout = ({ children }) => {
  return (
    <section>
      <Header />
      <main>{children}</main>
    </section>
  );
};

export default Layout;
