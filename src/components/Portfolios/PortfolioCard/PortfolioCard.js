import { Link } from "react-router-dom";
import "./PortfolioCard.css";

const PortfolioCard = ({ profImgUrl, name, _id: actorId }) => {
  return (
    <>
      <div className="card">
        <div className="img-container">
          <img src={profImgUrl} className="card-img" alt={profImgUrl} />
        </div>
        <div className="card-body">
          <h4>{name}</h4>
          <p>26</p>
          <div className="card-button">
            <Link to={`/details/${actorId}`} className="a">
              <i className="fas fa-angle-double-right"></i> VIEW
            </Link>
          </div>
        </div>
      </div>
      {/* <div className={`${styles.style} card`}>
        <img
          src={profImgUrl}
          className={`${styles.imgsize} card-img-top`}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <Link to={`/details/${actorId}`} className="btn btn-warning">
            View Portfolio
          </Link>
        </div>
      </div> */}
    </>
  );
};

export default PortfolioCard;
