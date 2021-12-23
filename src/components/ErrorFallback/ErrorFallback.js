import { Link, Navigate } from "react-router-dom";

const ErrorFallback = () => {
  return (
    <div>
      <h3 className="text-light">OOPS ....</h3>
      <p className="text-light">Something went wrong !</p>
      <Link to="/" className="btn btn-success">
        Try again
      </Link>
    </div>
  );
};

export default ErrorFallback;
