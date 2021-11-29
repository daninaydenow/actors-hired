import { Link } from "react-router-dom";
import PortfolioCard from "../PortfolioCard";
import styles from './Portfolios.module.css';
const Portfolios = () => {

  return (
    <>
      <div className={styles.flex}>
        <PortfolioCard imageUrl="actor-one.jpg" name="Ashley Cooper" />
        <PortfolioCard imageUrl="actor-two.jpg" name="Timothy Sampson" />
        <PortfolioCard imageUrl="actor-three.jpg" name="Victor Seinfeld" />
  
      </div>
    </>

  );
}

export default Portfolios;