import { Link } from "react-router-dom";
import styles from './Home.module.css'
const Home = () => {

    return (
        <>
            <div className={`${styles.hero} + jumbotron mb-5`}>
                <h1 className="display-3">Weolcome to Actors Hired !</h1>
                <p className="lead">Wolrd's first casting-directors free platform !</p>
                <p>Hire an actor now !</p>
                <p className="lead">
                    <Link className="btn btn-warning btn-lg" to="/portfolios" role="button">Hire now</Link>
                </p>
            </div>
        </>
    )
}

export default Home;