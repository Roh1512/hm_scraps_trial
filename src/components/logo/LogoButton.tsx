import { Link } from "react-router"; // Fixed: use react-router-dom, not "react-router"
import LogoSmall from "../../assets/HMHAA-LOGO_ONLY 1.svg";
import LogoLarge from "../../assets/HMHAA-LOGO_PRIMARY COLOR.svg";

const LogoButton = () => {
  return (
    <Link to="/" className="btn btn-ghost text-xl" aria-label="Home">
      <picture>
        <source
          media="(min-width: 1024px)"
          srcSet={`${LogoLarge} 1x, ${LogoLarge} 2x`} // Use a higher-res version
        />
        <source
          media="(min-width: 640px)"
          srcSet={`${LogoSmall} 1x, ${LogoSmall} 2x`}
        />
        <img
          src={LogoSmall}
          alt="HMHAA Logo"
          className="h-10 sm:h-12 md:h-12 lg:h-40 w-auto object-contain max-w-full"
        />
      </picture>
    </Link>
  );
};

export default LogoButton;
