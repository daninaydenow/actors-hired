import { Link } from "react-router-dom";

const ErrorFallback = () => {
  return (
    <div className="forms-wrapper">
      <h3>OOPS ....</h3>
      <p>Something went wrong !</p>
      <Link to="/" className="btn">
        Try again
      </Link>
    </div>
  );
};

export default ErrorFallback;
