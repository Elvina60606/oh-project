import Header from "../component/frontend/layout/Header";
import Footer from "../component/frontend/layout/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
        <div className="bgLight">
          <Header />
        </div>
        <main>
          <Outlet />
        </main>
        <div className="bgLight">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
