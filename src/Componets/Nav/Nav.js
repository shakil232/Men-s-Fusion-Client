import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Nav.css'


const Nav = () => {
    const [ LoggedInUser ] = useContext(UserContext);
    return (
        <nav className="mt-3 ml-2 d-flex row">
            <div className="col-md-3 col-sm-1 head ">
                <Link to="/home">Gents-Fusions</Link>
            </div>
            <div className=" col-md-6 col-sm-12 mt-2 nav ">
                <Link to="/home">Home</Link>
                <Link to="/order">Orders</Link>
                <Link to="/deals">Deals</Link>
                <Link to="/admin">Admin</Link>
            </div>
            <div className="col-md-3 col-sm-1">
               {LoggedInUser.name ? <p className="user-name">{LoggedInUser.name} </p> :
               <Link to="/login"><button className="login-btn"> Login</button></Link> }
            </div>
        </nav>
    );
};

export default Nav;