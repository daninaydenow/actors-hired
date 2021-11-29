import styles from './PortfolioCard.module.css'

const PortfolioCard = ({
    imageUrl,
    name
}) => {
    return (
        <>
            <div className={`${styles.style} card`}>
                <img src={imageUrl} className={`${styles.imgsize} card-img-top`} alt="..."/>
                <div className ="card-body">
                <h5 className ="card-title">{name}</h5>
                <a href="#" className ="btn btn-warning">Check Profile</a>
                </div>
            </div>
            
        </>
    );
}

export default PortfolioCard;