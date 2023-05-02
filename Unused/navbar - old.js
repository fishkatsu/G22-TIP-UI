// import Container from 'react-bootstrap/Container';
// import {Nav, Navbar} from 'react-bootstrap';

import { Link, Outlet } from 'react-router-dom';
// import '../App.css';


function NavbarComponent(){
    return (
        <>
        {/* <Navbar className="firstColor">
          <Container>
            <Navbar.Brand href="#home" className="titleHome">CorpU University</Navbar.Brand>
            <Nav className="me-auto, justify-content-end">
                <Nav.Link>
                    <Link to={'/'} className="navMenu">Home</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to={'/jobAvailable'} className="navMenu">Job Available</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to={'/ApplyJob'} className="navMenu">Apply Job</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to={'/login'} className="navMenu">Login</Link>
                </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <br /> */}
        <nav className="firstColor">
            <div>
                <Link to={'/'}>
                CorpU University
                </Link>
                <Link to={'/'} className="mr-4 text-navMenu">
                    Home
                </Link>
                <Link to={'/jobAvailable'} className="mr-4 text-navMenu">
                    Job Available
                </Link>
                <Link to={'/ApplyJob'} className="mr-4 text-navMenu">
                    Apply Job
                </Link>
                <Link to={'/login'} className="text-navMenu">
                    Login
                </Link>
            </div>
        </nav>

        <Outlet />
        </>
    );
}

export default NavbarComponent;
