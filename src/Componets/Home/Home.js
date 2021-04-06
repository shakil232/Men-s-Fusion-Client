import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import DisplayProducts from '../DisplayProducts/DisplayProducts';
import Nav from '../Nav/Nav';
import './Home.css'

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4400/allProducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='container'>
            <Nav/>
            <div className="row mt-5">

                {
                    products.length === 0 &&
                    <Spinner className="spinner" animation="border" variant="success" />
                }
                {
                    products.map(product => <DisplayProducts product={product} key={product._id}></DisplayProducts>)
                }
            </div>
        </div>
    );
};

export default Home;