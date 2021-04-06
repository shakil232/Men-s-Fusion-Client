import React from 'react';
import Nav from '../Nav/Nav';

import './NotFound.css'

const NotFound = () => {
    return (
        <div className=" container ">
           <Nav/>
            <div className="not-Found text-center mt-5  col-md-12 col-sm-12">
                <h1 > 404!!!</h1>
                <h4> <small id="opps">OPPS</small>, Your Search Is Not-Found!! Please Try Again!!!</h4>
            </div>
        </div>
    );
};

export default NotFound;