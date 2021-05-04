import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

const AppNavbar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="/">Mood Monitor</Navbar.Brand>
                <Nav.Link href="/days/new">Add A New Day</Nav.Link>
                <Nav.Link href="/days">Days</Nav.Link>    
            </Navbar>
        </div>
    )
}

export default AppNavbar;