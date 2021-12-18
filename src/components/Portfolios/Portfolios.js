import { useState, useEffect } from "react";
import PortfolioCard from "./PortfolioCard";

import * as actorService from '../../services/actorService';
import {loadSpinner} from '../../helpers/loadSpinner';
import styles from './Portfolios.module.css';
const Portfolios = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      actorService.getAll()
        .then(snapshot => {
          setPortfolios(snapshot.docs.map((doc) => ({ ...doc.data(), _id: doc.id })))
          setLoading(false);
        })
    }, 1000);
  }, []);



  return (
    <>
      <h1 className='text-light mb-3 pb-5'>Browse Portfolios</h1>
      <div className={styles.flex}>
        {loading && loadSpinner}
        {portfolios 
          ? portfolios.map(x => <PortfolioCard key={x._id} {...x} />)
          : <h1>No portfolios have been created yet!</h1>}
      </div>
    </>

  );
}

export default Portfolios;