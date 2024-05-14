import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
import { useNavigate } from 'react-router-dom';

const VerticalNavbar = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <ul className="navbar-nav d-flex flex-column">
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={() => handleNavigation('/')}>
                        Главная
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={() => handleNavigation('/supl')}>
                        Поставки
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default VerticalNavbar;