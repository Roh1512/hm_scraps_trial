import { NavLink } from "react-router";
import { motion } from "framer-motion";
import LogoButton from "../logo/LogoButton";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
];

const Header = () => {
  return (
    <header
      className="navbar bg-base-100 shadow-sm fixed z-10 top-0"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks.map((link) => (
              <li>
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative px-1 py-2 text-base font-medium ${
                      isActive
                        ? "text-primary bg-base-200"
                        : "text-base-content"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        {/* <Link to={"/"} className="btn btn-ghost text-xl">
          <img
            src={Logo}
            alt="Logo"
            className="h-30 sm:h-30 md:h-30 lg:h-40 w-auto max-w-full object-contain"
          />
        </Link> */}
        {/* Logo */}
        <LogoButton />
      </div>
      <div className="navbar-center hidden lg:flex">
        <nav className="relative flex gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative px-1 py-2 text-base font-medium ${
                  isActive ? "text-primary" : "text-base-content"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 right-0 -bottom-1 h-0.5 bg-primary text-primary"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="navbar-end">
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `btn btn-base ${isActive ? "text-primary" : "text-base-content"}`
          }
        >
          Contact Us
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
