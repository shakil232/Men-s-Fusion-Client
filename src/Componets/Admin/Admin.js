import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import AddProduct from '../AddProduct/AddProduct';
import EditProduct from '../EditProduct/EditProduct';
import ManageProduct from '../ManageProduct/ManageProduct';
import './Admin.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTh, faEdit, faHome } from '@fortawesome/free-solid-svg-icons';

const Admin = () => {

    let { path, url } = useRouteMatch();

    return (

        <div className=" d-flex">
            <div className=" side-bar col-md-2 col-sm-1 ">

                <Link  to="/home"> <h5> <FontAwesomeIcon className=" admin-icons " icon={faHome} /> Gents Fusion </h5></Link>
                <div className="side-compo-name">

                    <Link to={`${url}/manageProduct`}> <p><FontAwesomeIcon className=" admin-icons " icon={faTh} /> Manage Product </p></Link>
                  
                    <Link to={`${url}/addProduct`}> <p><FontAwesomeIcon className=" admin-icons " icon={faPlus} /> Add Product</p></Link>

                    <Link to={`${url}/editProduct`}> <p> <FontAwesomeIcon className=" admin-icons " icon={faEdit} /> Edit Product </p></Link>
                  
                </div>
            </div>

            <div className=" side-bar-details col-md-9 col-sm-1">
                <Switch>
                    <Route exact path={path}>
                        
                    </Route>
                    <Route path={`${path}/manageProduct`}>
                        <ManageProduct/>
                    </Route>
                    <Route path={`${path}/addProduct`}>
                        <AddProduct/>
                    </Route>
                    <Route path={`${path}/editProduct`}>
                        <EditProduct/>
                    </Route>

                </Switch>
            </div>

        </div>

    );
};

export default Admin;