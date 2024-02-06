
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import {Container, Navbar, Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" 
                fixed='top'>
            <Container>
            <NavLink to='/' className='text-decoration-none'>
                <Navbar.Brand>
                Kar3a
                </Navbar.Brand>
            </NavLink>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <NavLink to='/' 
                    className={({isActive}) => isActive ? 'mx-2 text-decoration-none text-info':'mx-2 text-decoration-none text-light'}>
                    Home
                </NavLink>
                <NavLink to='add-blogs'
                    className={({isActive}) => isActive ? 'mx-2 text-decoration-none text-info':'mx-2 text-decoration-none text-light'}>
                    Add Blogs
                </NavLink>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header