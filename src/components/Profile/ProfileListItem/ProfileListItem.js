import { Link } from "react-router-dom";

const ProfileListItem = ({
    name,
    actorId
}) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center mb-2 bg-dark text-light">
            {name}
            <Link to={`/details/${actorId}`} class="btn btn-warning rounded-btn">Details</Link>
        </li>
    )
}

export default ProfileListItem;

