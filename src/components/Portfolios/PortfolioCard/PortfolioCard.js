import { Link } from "react-router-dom";
import "./PortfolioCard.css";

const PortfolioCard = ({ profImgUrl, name, _id: actorId }) => {
  return (
    <>
      <div class="card">
        <div class="img-container">
          <img src={profImgUrl} class="card-img" alt={profImgUrl} />
        </div>
        <div class="card-body">
          <h4>{name}</h4>
          <p>26</p>
          <Link to={`/details/${actorId}`}>
            <i class="fas fa-angle-double-right"></i>
          </Link>
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
