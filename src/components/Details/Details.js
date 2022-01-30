import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

import { loadSpinner } from "../../helpers/loadSpinner";

import * as userService from "../../services/userService";
import * as actorService from "../../services/actorService";
import "./Details.css";

const Details = () => {
  const navigate = useNavigate();
  const [actor, setActor] = useState({});
  const [likes, setLikes] = useState([]);
  const [userHirings, setUserHirings] = useState([]);
  const [alreadyHired, setAlreadyHired] = useState(false);
  const [loadingActor, setLoadingActor] = useState(true);
  const [loadingUserHirings, setLoadingUserHirings] = useState(true);

  const { currentUser } = useAuth();
  const { actorId } = useParams();

  useEffect(() => {
    setTimeout(() => {
      actorService
        .getOne(actorId)
        .then((snapshot) => {
          setActor(snapshot.data());
          setLikes(snapshot.data().likes);
          setLoadingActor(false);
        })
        .catch((error) => {
          console.log(error);
        });

      if (currentUser) {
        userService
          .getUserHirings(currentUser.uid)
          .then((snapshot) => {
            setUserHirings(snapshot.data().hired);
            setLoadingUserHirings(false);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }, 500);
  }, [actorId, currentUser, alreadyHired]);

  const isIncludedInUserHirings = userHirings.includes(actorId);
  const isLikedByCurrentUser = likes.includes(currentUser?.uid);
  const isOwner = currentUser?.uid === actor._ownerId;

  const deletePortfolioHandler = () => {
    actorService
      .remove(actorId)
      .then(() => {
        navigate("/portfolios");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const likePortfolioHandler = () => {
    const addedLikes = likes.slice();
    addedLikes.push(currentUser.uid);
    actorService
      .update(actorId, { likes: addedLikes })
      .then(() => {
        setLikes(addedLikes);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const hireActorHandler = () => {
    const hiredNewActor = userHirings.slice();
    hiredNewActor.push(actorId);
    actorService
      .hire(currentUser.uid, hiredNewActor)
      .then(() => {
        setAlreadyHired(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const unhireActorHandler = () => {
    const portfolioIndex = userHirings.indexOf(actorId);
    const newUserHiringsRef = userHirings.slice();
    newUserHiringsRef.splice(portfolioIndex, 1);
    actorService
      .unhire(currentUser.uid, newUserHiringsRef)
      .then(() => {
        setUserHirings(newUserHiringsRef);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const ownerButtons = (
    <>
      <div className="btn-wraper">
        <Link
          to={`/edit/${actorId}`}
          state={{ ownerId: actor._ownerId }}
          className="details-btn"
        >
          <i className="far fa-edit"></i>
          Edit
        </Link>
      </div>
      <div className="btn-wraper">
        <button className="details-btn" onClick={deletePortfolioHandler}>
          <i className="far fa-trash-alt"></i>
          Delete
        </button>
      </div>

      <div className="btn-wraper">
        <span>Likes: {likes?.length}</span>
      </div>
    </>
  );

  const userButtons = (
    <>
      {isIncludedInUserHirings ? (
        <>
          <div className="btn-wraper">
            <button className="details-btn" onClick={unhireActorHandler}>
              <i className="fas fa-undo"></i>
              Unhire
            </button>
          </div>
        </>
      ) : (
        <div className="btn-wraper">
          <button className="details-btn" onClick={hireActorHandler}>
            <i className="fas fa-plus"></i>Hire
          </button>
        </div>
      )}

      {isLikedByCurrentUser ? (
        <span>Likes: {likes?.length}</span>
      ) : (
        <div className="btn-wraper">
          <button className="details-btn" onClick={likePortfolioHandler}>
            <i className="far fa-thumbs-up"></i>Like
          </button>
          <span>Likes: {likes?.length}</span>
        </div>
      )}
    </>
  );

  const guestButtons = (
    <div className="btn-wraper">
      <span>Likes: {likes?.length}</span>
    </div>
  );

  return (
    <>
      <div className="details-form">
        <section className="header-section">
          <div className="profile-picture">
            <img src={actor.profImgUrl} alt={actor.profImgUrl} />
          </div>
          <div className="info-container">
            <div className="head-info">
              <h4 className="portfolio-name">{actor.name}</h4>
              <p>
                <small>age:</small> 26
              </p>
              <p>
                <small>genre:</small> {actor.genre}
              </p>
            </div>
            <div className="bio" disabled>
              <h4>Experience:</h4>
              <p>{actor.experience}</p>
            </div>
          </div>
        </section>
        <section className="images-section">
          <div className="details-img-container">
            <img className="img" src={actor.imgOneUrl} alt="first img" />
          </div>
          <div className="details-img-container">
            <img className="img" src={actor.imgTwoUrl} alt="second img" />
          </div>
          <div className="details-img-container">
            <img className="img" src={actor.imgThreeUrl} alt="third img" />
          </div>
        </section>
        <section className="details-actions">
          {loadingActor && loadSpinner}
          {loadingActor && loadingUserHirings
            ? ""
            : currentUser
            ? isOwner
              ? ownerButtons
              : userButtons
            : guestButtons}
        </section>
      </div>
    </>
    // <div className={`card  ${styles.style}`}>
    //   <div className="row h-100 text-start">
    //     <div className={`col-3 ps-3 pe-3`}>
    //       <div className={`h-100`}>
    //         <div
    //           className={` ${styles.border} ${styles.imgsize} text-center mb-2`}
    //         >
    //           <img
    //             src={actor.profImgUrl}
    //             alt="img"
    //             className="img-fluid h-100"
    //           />
    //         </div>
    //         <div
    //           className={` ${styles.border} ${styles.general} ps-2 pt-2 mb-2`}
    //         >
    //           <h5>Actors name: </h5>
    //           <p>{actor.name}</p>
    //         </div>
    //         <div
    //           className={` ${styles.border} ${styles.general} ps-2 pt-2 mb-2`}
    //         >
    //           <h5>Genre:</h5>
    //           <p>{actor.genre}</p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className={`col-9 pe-3`}>
    //       <div className={`h-100`}>
    //         <div
    //           className={` ${styles.border} ps-2 pt-2 h-50 mb-2 text-center`}
    //         >
    //           <div className={styles.imgboxone}>
    //             <img
    //               src={actor.imgOneUrl}
    //               alt="img"
    //               className={`${styles.border} img-fluid h-100`}
    //             />
    //           </div>
    //           <div className={styles.imgboxtwo}>
    //             <img
    //               src={actor.imgTwoUrl}
    //               alt="img"
    //               className="img-fluid h-100"
    //             />
    //           </div>
    //           <div className={styles.imgboxthree}>
    //             <img
    //               src={actor.imgThreeUrl}
    //               alt="img"
    //               className="img-fluid h-100"
    //             />
    //           </div>
    //         </div>
    //         <div className={` ${styles.border} ps-2 pt-2 h-25 mb-2`}>
    //           <h4>Experience:</h4>
    //           <p>{actor.experience}</p>
    //         </div>
    //         <div>
    //           {loadingActor && loadSpinner}
    //           {loadingActor && loadingUserHirings
    //             ? ""
    //             : currentUser
    //             ? isOwner
    //               ? ownerButtons
    //               : userButtons
    //             : guestButtons}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
export default Details;
