import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

import './AddProduct.css'

const AddProduct = () => {
    
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageUrl, setImageUrl] = useState(null)


    const onSubmit = data => {
        const ProductData = {
            productName: data.productName,
            productPrice: data.productPrice,
            productQuantity: data.productQuantity,
            productUrl: imageUrl
        }

        fetch('https://quiet-chamber-69831.herokuapp.com/addImages', {
            method: "POST",
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(ProductData)
        })
            .then(res => console.log(res, 'added'))
    }

    const handleImageUpload = event => {
        
        const imageData = new FormData();
        imageData.set('key', 'b839ce61a3e8fdd61e1e36759838e3f2');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(res => {
                setImageUrl(res.data.data.display_url)
            })
            .catch(err => {
                console.log(err);
            });
    }



    return (
        <div className="text-center">
            <h5 className='mt-2 header'> Add-Products</h5>
            <form onSubmit={handleSubmit(onSubmit)} className=" mt-4  ">

                <div className="d-flex form  row">
                    <div className=" col-md-6 col-sm-1 ">
                        <label className="label ">Product Name</label> <br />
                        <input className="input " name="productName" ref={register} />
                        <br /><br />
                        <label className="label ">Add Price</label> <br />
                        <input className="input" name="productPrice" ref={register} />
                    </div>

                    <div className=" col-md-6 col-sm-1">
                        <label className="label ">Quantity</label> <br />
                        <input className="input " name="productQuantity" ref={register} />
                        <br /><br />
                        <label className="label ">Add Photo</label> <br />
                        <input className="file" type="file" name="image" onChange={handleImageUpload} />
                    </div>
                </div>

                <input className="save-btn" type="submit" value="Save" />
            </form>
        </div>

    );
};

export default AddProduct;