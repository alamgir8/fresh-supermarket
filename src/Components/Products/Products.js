import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css'

const Products = (props) => {
    const {_id, name, price, imageURL} = props.product;
    return (
        
             <div className="col-md-6 col-lg-3 my-3">
<<<<<<< HEAD
                <div className="card shadow-sm border">
=======
                <div className="pd-card card shadow-sm border">
>>>>>>> 033ecf5 (First commit)
                        <img src={imageURL} className="card-img-top img-fluid w-auto h-50 m-auto" alt="product"/>
                    <div className="card-body bg-gray">
                        <h2 className="card-title h5 pt-2 pb-1">{name}</h2>
                        <p className="card-text d-flex align-item-center justify-content-between mt-3">
                            <span className="h4 fw-bold mb-0">${price}</span>
                            <Link to={`/checkout/${_id}`}><button className='btn buy-button'>Buy Now</button></Link>
                        </p>
                    </div>
                </div>
            </div>
           
    );
};

export default Products;