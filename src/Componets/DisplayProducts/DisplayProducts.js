import React from 'react';
import { useHistory } from 'react-router-dom';
import Nav from '../Nav/Nav';
import './DisplayProducts.css'

const DisplayProducts = (props) => {
    const { productName, productPrice, productUrl, _id } = props.product;

    const history = useHistory();

    const handleSingleProduct = (id) => {
          const productId = `/checkOut/${id}`
          history.push(productId)
    }



    return (

        <div className=" col-md-3 col-sm-1" >
            <div className=" product-card mt-4 ml-2 mr-2">
                <img className="product-img" src={productUrl} alt="product image" />
                <p className="product-name">{productName}</p>
                <div className="d-flex justify-content-around ">
                    <p className="product-price"> ${productPrice} </p>
                    <button className="bay-btn" onClick={() => handleSingleProduct(_id)}> Bay Now </button>
                </div>
            </div>
        </div>



    );
};

export default DisplayProducts;