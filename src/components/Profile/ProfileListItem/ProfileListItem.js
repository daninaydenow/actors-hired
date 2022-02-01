import { Link } from "react-router-dom";

const ProfileListItem = ({ name, _id }) => {
  return (
    <div className="profile-item">
      <p className="profile-item-name">{name}</p>
      <Link to={`/details/${_id}`} className="profile-item-button">
        Details
      </Link>
    </div>
  );
};

export default ProfileListItem;
