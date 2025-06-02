import { Mail, PhoneCall } from "lucide-react";
import { Link, NavLink } from "react-router";
import WhatsApp from "../icons/WhatsApp";
import Logo from "../../assets/HMHAA-LOGO_PRIMARY COLOR.svg";

const Footer = () => {
  return (
    <>
      <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10 w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <nav className="text-md md:text-lg">
          <h6 className="footer-title">HM Scraps</h6>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `link link-hover ${
                isActive ? "text-primary" : "text-base-content"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              `link link-hover ${
                isActive ? "text-primary" : "text-base-content"
              }`
            }
          >
            About us
          </NavLink>
          <NavLink
            to={"/services"}
            className={({ isActive }) =>
              `link link-hover ${
                isActive ? "text-primary" : "text-base-content"
              }`
            }
          >
            Services
          </NavLink>
          <NavLink
            to={"/contact"}
            className={({ isActive }) =>
              `link link-hover ${
                isActive ? "text-primary" : "text-base-content"
              }`
            }
          >
            Contact
          </NavLink>
        </nav>
        {/* <aside className="flex justify-center items-center mx-auto md:mx-0 mt-6 md:mt-0 h-full">
          <Link to={"/"} className="btn btn-ghost text-xl">
            <img
              src={Logo}
              alt="Logo"
              className="h-60 w-auto max-w-full object-contain"
            />
          </Link>
        </aside> */}
        <nav className="text-md md:text-lg order-3 md:order-2 flex flex-col items-center justify-center mx-auto col-span-2 md:col-span-1">
          <h6 className="footer-title">Contact Details</h6>
          <Link
            to="tel:+966582500879"
            className="flex items-center justify-center gap-2 link link-hover"
            aria-label="Call us"
          >
            <PhoneCall className="w-5 h-5 text-blue-500" />
            +966 582500879
          </Link>
          <Link
            to="https://wa.me/966548581513"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 link link-hover"
            aria-label="WhatsApp us"
          >
            <WhatsApp />
            +966 548581513
          </Link>
          <Link
            to="mailto:ansarishams333@gmail.com"
            className="flex items-center justify-center gap-3 link link-hover"
            aria-label="Email us"
          >
            <Mail className="w-5 h-5 text-blue-500" />
            ansarishams333@gmail.com
          </Link>
        </nav>
        <aside className="flex justify-center items-center mx-auto md:mx-auto h-full order-2 md:order-3">
          <Link to={"/"} className="btn btn-ghost text-xl p-0">
            <img
              src={Logo}
              alt="Logo"
              className="h-40 md:h-60 w-auto max-w-full object-contain"
            />
          </Link>
        </aside>
      </footer>
      <footer className="footer sm:footer-horizontal footer-center bg-black text-base-300 p-4 text-md">
        <aside className="grid-flow-col items-center text-sm">
          <p className="flex flex-col items-center justify-center gap-2">
            <span>Copyright © {new Date().getFullYear()}</span>
            <span>
              All rights reserved by Hadi Muhammed Hamad Al Adhan Trading Est
            </span>
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
