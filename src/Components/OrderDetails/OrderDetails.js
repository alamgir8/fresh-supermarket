import React from 'react';

const OrderDetails = (props) =>{
    const {name, weight, price} = props.order.product;
    
    return (
            <tr>
                <td >{name}</td>
                <td>{weight}</td>
                <td>${price}</td>
             </tr>
    );
};

export default OrderDetails;