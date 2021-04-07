import React, { useContext, useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import Nav from '../Nav/Nav';
import './CheckOut.css'

const CheckOut = () => {

    const { productId } = useParams();
    const [LoggedInUser, setLoggedInUser] = useContext(UserContext);
    const [checkProduct, setCheckProduct] = useState({});

    const OrderInfo = () => {
        // toDateString("dd/mm/yyyy")
        // toString("dddd, mmmm dS, yyyy, g:i A TT") 
        const OrderDetails = { product: checkProduct, ...LoggedInUser, Date: (new Date().toString("dddd, mmmm dS, yyyy, g:i A TT")) };

        fetch('https://quiet-chamber-69831.herokuapp.com/orderProduct', {
            method: "POST",
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(OrderDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Please Confirm Your Order')
                }
            })
    };

    useEffect(() => {
        fetch(`https://quiet-chamber-69831.herokuapp.com/checkProduct/${productId}`)
            .then(res => res.json())
            .then(data => setCheckProduct(data))
    }, []);

    return (
        <div className="container">
            <Nav />
            <h4 className="check"> CheckOut </h4>
            <div className="check-out">


                <table className="table">
                    <tr>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                    <tr>
                        <td>{checkProduct.productName}</td>
                        <td>{checkProduct.productQuantity}</td>
                        <td>${checkProduct.productPrice}</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td></td>
                        <td>${checkProduct.productPrice}</td>
                    </tr>
                </table>

            </div>

            <button className="order-btn" onClick={OrderInfo}> Order </button>

        </div>
    );
};

export default CheckOut;