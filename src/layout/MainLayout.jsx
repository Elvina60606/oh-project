import Header from "../component/frontend/layout/Header";
import Footer from "../component/frontend/layout/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
