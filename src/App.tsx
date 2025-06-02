import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import HomePage from "./pages/home/HomePage";
import MainLayout from "./components/layouts/MainLayout";
import AboutPage from "./pages/about/AboutPage";
import NotFound from "./components/ErrorComponents/NotFound";
import Services from "./pages/services/ServicesPage";
import ContactPage from "./pages/contact/ContactPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
