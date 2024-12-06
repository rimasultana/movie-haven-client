import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
