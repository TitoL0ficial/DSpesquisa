import './styles.css';
import Logo from '../../assets/logo.svg'
import { Link, Outlet } from 'react-router-dom';

export default function Header () {

    return (
        <>
            <header className="main-header">
                <img src={Logo} alt="Logo" />
                <Link to="/">
                    <div className="logo-text">
                        <span className="logo-text-1">Big Game</span>
                        <span className="logo-text-2"> Survey</span>
                    </div>
                </Link>
            </header>
            <Outlet/>
        </>
    );
}