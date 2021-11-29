import { Link } from 'react-router-dom';
import styles from './Footer.module.css'
const Footer = () => {

  return (
    <>
      <footer className={`${styles.footer} + navbar navbar-expand-lg navbar-dark bg-dark fixed-bottom`}>
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="position-absolute top-50 start-50 translate-middle">Actors Hired Inc. &copy;</li>
          </ul>
        </div>
      </footer>
    </>
  )

}
export default Footer;