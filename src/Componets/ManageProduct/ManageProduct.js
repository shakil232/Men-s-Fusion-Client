import React, { useEffect, useState } from 'react';
import './ManageProduct.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Link, useHistory } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';


const ManageProduct = () => {

    const [manages, setManages] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4400/manageProducts')
            .then(res => res.json())
            .then(data => setManages(data))
    }, []);
    
    // EditArea
    const handleEdit = () => {
        
    };
     
    // deleteArea
    const deleteProduct = (id) => {
        fetch(`http://localhost:4400/deleteProduct/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log('delete', data)
            })
    };

    return (
        <div className='container'>
            <div className="manage-product">
                <h4 className="manage"> ManageProduct</h4>
                <table className="table">
                    <tr className="P-descrip">
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </table>

            </div>

            {
                manages.length === 0 &&
                <Spinner className="spinner mt-3" animation="border" variant="success" />
            }

            {
                manages.map(manage => <div>
                    <div className="manage-product">
                        <table className="table">

                            <tr className="d-flex justify-content-around ">
                                <td>{manage.productName}</td>
                                <td>{manage.productQuantity}</td>
                                <td>${manage.productPrice}</td>
                                <td >
                                    <div className="d-flex justify-content-around">
                                        <Link onClick={ handleEdit}><FontAwesomeIcon className=" edit-icon " icon={faEdit} /></Link>

                                        <Link onClick={() => deleteProduct(manage._id)}><FontAwesomeIcon className=" delete-icon" icon={faTrashAlt} /></Link>
                                    </div>
                                </td>
                            </tr>

                        </table>

                    </div>

                </div>)
            }

        </div>
    );
};

export default ManageProduct;