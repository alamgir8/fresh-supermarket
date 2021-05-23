import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { userContext } from '../../App';
import swal from 'sweetalert';

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
                swal({
                    title: "Your Order Placed Successfully!",
                    icon: "success",
                  });
            }
        })
    }
    return (
        <div className='container'>
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
            </div>
        </div>
    );
};

export default CheckOut;