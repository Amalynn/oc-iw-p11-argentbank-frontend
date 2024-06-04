import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/logo/argentBankLogo.png';

export default function Header() {
    const location = useLocation();
    const isLoggedIn = location.pathname === '/user-account' ? true : false;

    return isLoggedIn ? (
        <nav className="main-nav">
            <Link to="/" className="main-nav-logo">
                <img
                    className="main-nav-logo-image"
                    src={Logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>

            <div>
                <Link to="/user-account" className="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                    Tony
                </Link>
                <Link to="/" className="main-nav-item">
                    <i className="fa fa-sign-out"></i>
                    Sign Out
                </Link>
            </div>
        </nav>
    ) : (
        <nav className="main-nav">
            <Link to="/" className="main-nav-logo">
                <img
                    className="main-nav-logo-image"
                    src={Logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>

            <div>
                <Link to="/sign-in" className="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </Link>
            </div>
        </nav>
    );
}
