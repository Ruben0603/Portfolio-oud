import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { Outlet } from "react-router";
import './Layout2.css';

const Layout2 = () => {
  return (
    <div className="layout2">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout2;
