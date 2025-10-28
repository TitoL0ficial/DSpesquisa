import './styles.css';
import Arrow from "../../assets/arrow.svg"
import GamerImg from "../../assets/gamer.svg"
import { Link } from 'react-router-dom';

export default function Home () {
    
    return (
        <div className="home-container">
            <div className="home-text">
                <h1 className="home-text-title">
                    Quais jogos a galera gosta mais?
                </h1>
                <h3 className="home-text-subtitle">
                    Clique no botão abaixo e saiba quais são os jogos que os gamers estão escolhendo!
                </h3>
                <Link to="/records">
                    <div className="home-actions">
                        <button className="home-btn">
                            QUERO SABER QUAIS SÃO
                        </button>
                        <div className="home-btn-icon">
                            <img src={Arrow} alt="btn-arrow" />
                        </div>
                    </div>               
                </Link>

            </div>
            <img className="home-image" src={GamerImg} alt="gamer-img" />
        </div>
    );
}