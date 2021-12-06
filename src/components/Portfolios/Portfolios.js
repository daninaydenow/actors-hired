import { useState, useEffect } from "react";
import PortfolioCard from "./PortfolioCard";
import * as actorService from '../../services/actorService';
import styles from './Portfolios.module.css';
const Portfolios = () => {
     const [portfolios, setPortfolios] = useState([]);

     useEffect(() => {
          actorService.getAll()
          .then(res => {
            setPortfolios(res);
            console.log(res);
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