import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-bg-900">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-textc-100">404</h1>
        <p className="mb-4 text-xl text-textc-300">Oops! Page not found</p>
        <a href="/" className="text-primary-500 underline hover:text-primary-600">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
