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
                <a onClick={()=>navigate("/CELogin")} className='nav-link'>Counter Executive Login</a>
                <a href='/tokenGeneration' className='nav-link link-light'>Token Generation</a>
            </nav>
            

            {/* <div>
            <h3 style={{textAlign:"center", color:"aliceblue"}}>Welcome to Bank Token Management System</h3>

            </div>
            <div className='container' >
                <Carousel>
                    <Carousel.Item style={{ 'height': "300px"}} >
                        <img style={{  }}
                            className="d-block w-100"
                            src={'assets/img/img_2.jpg'} />
                        <Carousel.Caption>
                            <h3>Always there for you...</h3>
                        </Carousel.Caption>
                    </Carousel.Item  >
                    <Carousel.Item style={{ 'height': "300px" }}>
                        <img style={{ 'height': "300px" }}
                            className="d-block w-100"
                            src={'assets/img/2.jpg'} />
                        <Carousel.Caption>
                            <h3>Second Demo</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{ 'height': "300px" }}>
                        <img style={{ 'height': "300px" }}
                            className="d-block w-100"
                            src={'assets/img/3.jpg'} />
                        <Carousel.Caption>
                            <h3>Third Demo</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div> */}

        </div>
    )
}
