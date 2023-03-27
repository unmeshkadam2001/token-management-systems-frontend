
import { Link, useNavigate } from 'react-router-dom';

import './HomePage.css';

export default function HomePage() {
    const navigate = useNavigate();
    return (
        <div>
            <ul class="background">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <nav className="navbar navbar-light">
                <a className="navbar-brand text-light" href="/">
                    Pratiti Bank Token Manager
                </a>
                <Link to="/MLogin">Manager Login</Link>
                <a onClick={() => navigate("/CELogin")} className='nav-link'>Counter Executive Login</a>
                <a href='/tokenGeneration' className='nav-link link-light'>Token Generation</a>
            </nav>
        </div>
    )
}
