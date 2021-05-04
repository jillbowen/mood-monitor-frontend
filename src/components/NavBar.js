import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
    return (
        <div>
            <Link to='/days'>Days</Link>
            <Link to='/days/new'>Add A Day</Link>
        </div>
    )
}

export default NavBar