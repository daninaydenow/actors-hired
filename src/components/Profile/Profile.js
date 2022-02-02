import { useState, useEffect } from "react";

import { useAuth } from "../../contexts/AuthContext";
import { loadSpinner } from "../../helpers/loadSpinner";
import * as userService from "../../services/userService";
import * as actorService from "../../services/actorService";

import MissingData from "./MissingData";
import ProfileListItem from "./ProfileListItem";

import "./Profile.css";

export const Profile = () => {
  const [myHirings, setMyHirings] = useState([]);
  const [allPortFolios, setAllPortFolios] = useState([]);
  const [loadingHirings, setLoadingHirings] = useState(true);
  const [loadingActors, setLoadingActors] = useState(true);

  const { currentUser } = useAuth();

  useEffect(() => {
    setTimeout(() => {
      userService
        .getUserHirings(currentUser.uid)
        .then((snapshot) => {
          setMyHirings(snapshot.data().hired);
          setLoadingHirings(false);
        })
        .catch((error) => {
          console.log(error);
        });

      actorService
        .getAll()
        .then((snapshot) => {
          setAllPortFolios(
            snapshot.docs.map((doc) => ({ ...doc.data(), _id: doc.id }))
          );
          setLoadingActors(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 1000);
  }, [currentUser]);

  const populatedMyHirings = [];
  myHirings.forEach((id) => {
    allPortFolios.forEach((portfolio) => {
      if (id === portfolio._id) {
        const actorInfo = { name: portfolio.name, _id: portfolio._id };
        populatedMyHirings.push(actorInfo);
      }
    });
  });

  const populatedMyPortfolios = allPortFolios.filter(
    (portfolio) => portfolio._ownerId === currentUser.uid
  );

  const profile = {
    alert: "No portfolios yet!",
    buttonName: "Create",
    path: "/create",
  };

  const hirings = {
    alert: "No hirings yet!",
    buttonName: "Hire Now",
    path: "/portfolios",
  };

  return (
    <div className="profile-page">
      <header className="profile-header">
        <h1>Profile</h1>
        <p>{currentUser.email}</p>
      </header>
      <div className="content-container">
        <div className="my-hirings">
          <h3 className="profile-page-heading">Hirings</h3>
          {loadingHirings && loadSpinner}
          {loadingHirings ? (
            ""
          ) : populatedMyHirings.length !== 0 ? (
            populatedMyHirings.map((x) => (
              <ProfileListItem key={x._id} {...x} />
            ))
          ) : (
            <MissingData {...hirings} />
          )}
        </div>
        <div className="my-portfolios">
          <h3 className="profile-page-heading">Created</h3>
          {loadingActors && loadSpinner}
          {loadingActors ? (
            ""
          ) : populatedMyPortfolios.length !== 0 ? (
            populatedMyPortfolios.map((x) => (
              <ProfileListItem key={x._id} {...x} />
            ))
          ) : (
            <MissingData {...profile} />
          )}
        </div>
      </div>
    </div>

    // <h1 className={styles.heading}>My Profile</h1>
    // <div className={`${styles.boxOne} card`}>
    //   <h1 className="h1 text-white p-2 ">My Portfolios</h1>
    //   <ul className="p-2">
    //     {loadingActors && loadSpinner}
    //     {loadingActors ? (
    //       ""
    //     ) : populatedMyPortfolios.length !== 0 ? (
    //       populatedMyPortfolios.map((x) => (
    //         <ProfileListItem key={x._id} {...x} />
    //       ))
    //     ) : (
    //       <MissingData {...profile} />
    //     )}
    //   </ul>
    // </div>
    // <div className={`${styles.boxTwo} card`}>
    //   <h1 className="h1 text-white p-2">My Hirings</h1>
    //   <ul className="container-fluid p-2">
    //     {loadingHirings && loadSpinner}
    //     {loadingHirings ? (
    //       ""
    //     ) : populatedMyHirings.length !== 0 ? (
    //       populatedMyHirings.map((x) => (
    //         <ProfileListItem key={x._id} {...x} />
    //       ))
    //     ) : (
    //       <MissingData {...hirings} />
    //     )}
    //   </ul>
    // </div>
  );
};

export default Profile;
