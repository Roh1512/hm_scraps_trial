import { Outlet } from "react-router";
import Header from "../headers/Header";
import Footer from "../footers/Footer";
import ScrollToTop from "../extra/ScrollToTop";
import FloatingButtons from "../extra/FloatingButtons";

const MainLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className=" flex-1 flex flex-col items-center justify-center w-full mx-auto mt-17 relative">
        <FloatingButtons />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
