import { Link } from "react-router-dom";
const MissingData = ({ alert, action, buttonName, path }) => {
  return (
    <div className="mt-5">
      <h3 className="text-muted p-2">{alert}</h3>
      <h5 className="text-muted p-2">{action}</h5>
      <Link to={`${path}`} className="btn btn-warning">
        {buttonName}
      </Link>
    </div>
  );
};

export default MissingData;
