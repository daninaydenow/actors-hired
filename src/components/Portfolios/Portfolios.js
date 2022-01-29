import { useState, useEffect } from "react";
import PortfolioCard from "./PortfolioCard";

import * as actorService from "../../services/actorService";
import { loadSpinner } from "../../helpers/loadSpinner";
import "./Portfolios.css";
const Portfolios = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      actorService
        .getAll()
        .then((snapshot) => {
          setPortfolios(
            snapshot.docs.map((doc) => ({ ...doc.data(), _id: doc.id }))
          );
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 1000);
  }, []);

  return (
    <>
      <div className="cards-wrapper">
        {loading && loadSpinner}
        {loading ? (
          ""
        ) : portfolios.length !== 0 ? (
          portfolios.map((x) => <PortfolioCard key={x._id} {...x} />)
        ) : (
          <h3 className="text-light mb-5 pb-5">
            No portfolios have been created yet!
          </h3>
        )}
      </div>
    </>
  );
};

export default Portfolios;
