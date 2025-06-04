import { Link } from "react-router"; // Fixed: use react-router-dom, not "react-router"
// import LogoSmall from "../../assets/HM_LOGO_96.svg";
import LogoLarge from "../../assets/HMHAA-LOGO_PRIMARY COLOR.svg";

const LogoButton = () => {
  return (
    <Link to="/" className="btn btn-ghost text-xl" aria-label="Home">
      <img
        src={LogoLarge}
        alt="HMHAA Logo"
        className="h-30 sm:h-20 md:h-30 lg:h-40 w-auto object-contain max-w-full"
      />
    </Link>
  );
};

export default LogoButton;
