import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on every route change
    window.scrollTo(0, 0);

    // Or run any other code here you want on route change
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;
