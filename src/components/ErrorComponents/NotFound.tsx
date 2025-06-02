import { Link } from "react-router";

const NotFound = () => {
  return (
    <section className="flex items-center justify-center pt-20 pb-20">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-900">404 Not Found</h1>
        <p className="py-6 text-xl text-base-content">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link to="/" className="btn btn-outline btn-primary">
          Go back home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
