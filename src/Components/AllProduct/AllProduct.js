import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import ProductDetails from '../ProductDetails/ProductDetails';


const AllProduct = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('https://fresh-super-market-server.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProduct(data))
        .catch(error => console.log(error))
    }, []);
    

    return (
        <div className="container ">
            <div className="row">
             <Table striped bordered hover className="table-bordered rounded bg-form">
                <thead className='bg-t-head text-white'>
                    <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col" >Weight</th>
                        <th scope="col">Price</th>
                        <th scope="col" className='text-right'>Action</th>
                    </tr>
                </thead>
                <tbody>
                        {
                        product.map(pd => <ProductDetails pd={pd} key={pd._id}></ProductDetails>)
                        
                        }
                
                </tbody>
            </Table>
          </div>
        </div>
    );
};

export default AllProduct;