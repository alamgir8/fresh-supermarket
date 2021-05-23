import React from 'react';
import { useHistory, useLocation } from 'react-router';
import swal from 'sweetalert';

const ProductDetails = (props) => {
    const {_id, name, price, weight} = props.pd;
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/login" } };

    const handleDeleteProduct = (id) => {
        fetch(`https://fresh-super-market-server.herokuapp.com/deleteProduct/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            swal({
                title: "Product delete Successfully!",
                icon: "success",
              });
            history.replace(from);
            history.push("/admin");
        })
        
        .catch(error => console.log(error))
      
    }
    return (

            <tr>
                <td >{name}</td>
                <td>{weight}</td>
                <td>${price}</td>
                <td className='text-right'>
                    <span className='btn btn-sm btn-success mr-lg-2 mr-md-2 my-1'>
                        <i className="bi bi-pencil-square"></i>
                    </span>
                    <span onClick={() => handleDeleteProduct(_id)} className='btn btn-sm delete-button text-white'> 
                        <i className="bi bi-trash"></i>
                    </span>
                </td>
            </tr>
        
    );
};

export default ProductDetails;