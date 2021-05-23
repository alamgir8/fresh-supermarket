import React, { useContext, useEffect, useState } from 'react';
<<<<<<< HEAD
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import { userContext } from '../../App';
=======
import { useParams } from 'react-router';
import { userContext } from '../../App';
import swal from 'sweetalert';
>>>>>>> 033ecf5 (First commit)

const CheckOut = () => {
    const [loggedInUser] = useContext(userContext);
    const {_id} = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch(`https://fresh-super-market-server.herokuapp.com/products`)
        .then(res => res.json())
        .then(data => {
          
            let result = data.find(element => element._id === _id);
            setProduct(result)
           
        })
    }, [_id]);

   
    const handleSubmit = () => {
        const email = loggedInUser.email;
        const name = loggedInUser.displayName;
        
        const orderDetails = {name:name, email:email, product: product, orderTime: new Date()};
        fetch('https://fresh-super-market-server.herokuapp.com/addOrder', {
            method: "POST",
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(orderDetails)
        })
        .then(res => res.json())
        .then(data => {
            if (data) {
<<<<<<< HEAD
                alert('Your Order Placed Successfully')
=======
                swal({
                    title: "Your Order Placed Successfully!",
                    icon: "success",
                  });
>>>>>>> 033ecf5 (First commit)
            }
        })
    }
    return (
        <div className='container'>
<<<<<<< HEAD
            <h3 className='pt-5 pb-3'>CheckOut</h3>
            <Table striped bordered hover className="bg-form">
                <thead className='bg-t-head text-white'>
                    <tr>
                    <th scope="col">Description</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row"><p>{product.name}</p></th>
                    <th>1</th>
                    <th className='fw-bold'>৳{product.price}</th>
                    </tr>    
                </tbody>
            </Table>
            <div className="text-right pt-2">
                <button onClick={handleSubmit} className='btn btn-success'>CheckOut</button> 
=======
            <div className="card p-3 my-5">
                    <div className="table-responsive">
                        <table className="table table-hover table-borderless">
                            <thead className='bg-light'>
                                <tr>
                                    <th className='fw-bolder'>Description</th>
                                    <th className='fw-bolder'>Quantity</th>
                                    <th className='fw-bolder'>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><p>{product.name}</p></td>
                                    <td>1</td>
                                    <td className='fw-bolder'>${product.price}</td>
                                </tr>    
                            </tbody>
                        </table>
                    </div>
                <div className="text-right pt-2">
                    <button onClick={handleSubmit} className='btn btn-success'>CheckOut</button> 
                </div>
>>>>>>> 033ecf5 (First commit)
            </div>
        </div>
    );
};

export default CheckOut;