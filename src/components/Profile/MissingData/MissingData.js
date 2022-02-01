import { Link } from "react-router-dom";
const MissingData = ({ alert, buttonName, path }) => {
  return (
    <div className="no-content">
      <h3 className="no-content-heading">{alert}</h3>
      <Link to={`${path}`} className="profile-item-button">
        {buttonName}
      </Link>
    </div>
  );
};

export default MissingData;
