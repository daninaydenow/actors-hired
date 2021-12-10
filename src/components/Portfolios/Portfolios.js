import { useState, useEffect } from "react";
import PortfolioCard from "./PortfolioCard";

import * as actorService from '../../services/actorService';
import styles from './Portfolios.module.css';
const Portfolios = () => {
     const [portfolios, setPortfolios] = useState([]);
     const [loading, setLoading] = useState(false);

     useEffect(() => {
           setLoading(true)
           actorService.getAll()
           .then(mySnapShot => {
            setPortfolios(mySnapShot.docs.map((doc) => ({...doc.data(), _id: doc.id})))
            setLoading(false);
           }) 
     }, []);
     
  return (
    <>
      <h1 className={styles.heading}>Browse Portfolios</h1>
      <div className={styles.flex}>
        {portfolios.map(x => <PortfolioCard key={x._id} {...x} />)}
      </div>
    </>

  );
}

export default Portfolios;