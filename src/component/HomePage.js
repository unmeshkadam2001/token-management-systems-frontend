import { useNavigate } from 'react-router-dom';

import './HomePage.css';

export default function HomePage() {
    const navigate = useNavigate();
    return (
        <div>
            <nav className="navbar navbar-light">
                <a className="navbar-brand text-light" href="/">
                    Pratiti Bank Token Manager
                </a>
                <a href='/MLogin' className='nav-link'>Manager Login</a>
                <a onClick={() => navigate("/CELogin")} className='nav-link'>Counter Executive Login</a>
                <a href='/tokenGeneration' className='nav-link link-light'>Token Generation</a>
            </nav>
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
            </ul>
        </div>
    )
}
