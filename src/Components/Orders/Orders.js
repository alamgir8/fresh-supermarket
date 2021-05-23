import React, { useContext, useEffect, useState } from 'react';
<<<<<<< HEAD
import { Spinner, Table } from 'react-bootstrap';
=======
import { Table } from 'react-bootstrap';
import ContentLoader from 'react-content-loader'
>>>>>>> 033ecf5 (First commit)
import { userContext } from '../../App';
import OrderDetails from '../OrderDetails/OrderDetails';
import './Order.css'



const Orders = () => {
    const [loggedInUser] = useContext(userContext);
    const [orders, setOrders] = useState([]);
    

    useEffect(() => {
<<<<<<< HEAD
        loadingSpinner(true)
=======
>>>>>>> 033ecf5 (First commit)
        fetch(`https://fresh-super-market-server.herokuapp.com/order?email=`+loggedInUser.email)
        .then(res => res.json())
        .then(data => {
            setOrders(data);
<<<<<<< HEAD
            loadingSpinner(false)
=======
>>>>>>> 033ecf5 (First commit)
        })
        .catch(error => console.log(error))
    }, [loggedInUser.email]);

    let totalPrice = 0;
    for (let i = 0; i < orders.length; i++) {
        const element = orders[i];
        const price = parseInt(element.product.price);
        totalPrice = price + totalPrice;  
        
    }
  

<<<<<<< HEAD
    const loadingSpinner = (show) => {
        const spinner = document.getElementById('loading-spinner');
       
        if (show) {
            spinner.classList.remove('d-none');
        }
      else{
        spinner.classList.add('d-none');
      }
    }
=======
>>>>>>> 033ecf5 (First commit)

   
    return (
        <div className='container'>
<<<<<<< HEAD
            <div className="d-flex justify-content-center py-5">
                    <Spinner id='loading-spinner' className='d-none' animation="border" role="status" variant="success">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
            </div>
            <div className="bg-checkout p-4">
            <h4 className='pb-4 text-center text-white'>{loggedInUser.displayName} You have {orders.length} Orders</h4>
            <Table striped bordered hover className="bg-form ">
                <thead className='bg-t-head text-white'>
                    <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col" >Weight</th>
                        <th scope="col">Price</th>
=======
            {
                orders.length === 0 ?
                <div className="py-5">
                    <ContentLoader
                            width={1000}
                            height={550}
                            viewBox="0 0 1000 550"
                            backgroundColor="#ababab"
                            foregroundColor="#fafafa"
                            // {...props}
                        >
                            <rect x="51" y="45" rx="3" ry="3" width="906" height="17" />
                            <circle cx="879" cy="123" r="11" />
                            <circle cx="914" cy="123" r="11" />
                            <rect x="104" y="115" rx="3" ry="3" width="141" height="15" />
                            <rect x="305" y="114" rx="3" ry="3" width="299" height="15" />
                            <rect x="661" y="114" rx="3" ry="3" width="141" height="15" />
                            <rect x="55" y="155" rx="3" ry="3" width="897" height="2" />
                            <circle cx="880" cy="184" r="11" />
                            <circle cx="915" cy="184" r="11" />
                            <rect x="105" y="176" rx="3" ry="3" width="141" height="15" />
                            <rect x="306" y="175" rx="3" ry="3" width="299" height="15" />
                            <rect x="662" y="175" rx="3" ry="3" width="141" height="15" />
                            <rect x="56" y="216" rx="3" ry="3" width="897" height="2" />
                            <circle cx="881" cy="242" r="11" />
                            <circle cx="916" cy="242" r="11" />
                            <rect x="106" y="234" rx="3" ry="3" width="141" height="15" />
                            <rect x="307" y="233" rx="3" ry="3" width="299" height="15" />
                            <rect x="663" y="233" rx="3" ry="3" width="141" height="15" />
                            <rect x="57" y="274" rx="3" ry="3" width="897" height="2" />
                            <circle cx="882" cy="303" r="11" />
                            <circle cx="917" cy="303" r="11" />
                            <rect x="107" y="295" rx="3" ry="3" width="141" height="15" />
                            <rect x="308" y="294" rx="3" ry="3" width="299" height="15" />
                            <rect x="664" y="294" rx="3" ry="3" width="141" height="15" />
                            <rect x="58" y="335" rx="3" ry="3" width="897" height="2" />
                            <circle cx="881" cy="363" r="11" />
                            <circle cx="916" cy="363" r="11" />
                            <rect x="106" y="355" rx="3" ry="3" width="141" height="15" />
                            <rect x="307" y="354" rx="3" ry="3" width="299" height="15" />
                            <rect x="663" y="354" rx="3" ry="3" width="141" height="15" />
                            <rect x="57" y="395" rx="3" ry="3" width="897" height="2" />
                            <circle cx="882" cy="424" r="11" />
                            <circle cx="917" cy="424" r="11" />
                            <rect x="107" y="416" rx="3" ry="3" width="141" height="15" />
                            <rect x="308" y="415" rx="3" ry="3" width="299" height="15" />
                            <rect x="664" y="415" rx="3" ry="3" width="141" height="15" />
                            <rect x="55" y="453" rx="3" ry="3" width="897" height="2" />
                            <rect x="51" y="49" rx="3" ry="3" width="2" height="465" />
                            <rect x="955" y="49" rx="3" ry="3" width="2" height="465" />
                            <circle cx="882" cy="484" r="11" />
                            <circle cx="917" cy="484" r="11" />
                            <rect x="107" y="476" rx="3" ry="3" width="141" height="15" />
                            <rect x="308" y="475" rx="3" ry="3" width="299" height="15" />
                            <rect x="664" y="475" rx="3" ry="3" width="141" height="15" />
                            <rect x="55" y="513" rx="3" ry="3" width="897" height="2" />
                            <rect x="52" y="80" rx="3" ry="3" width="906" height="17" />
                            <rect x="53" y="57" rx="3" ry="3" width="68" height="33" />
                            <rect x="222" y="54" rx="3" ry="3" width="149" height="33" />
                            <rect x="544" y="55" rx="3" ry="3" width="137" height="33" />
                            <rect x="782" y="56" rx="3" ry="3" width="72" height="33" />
                            <rect x="933" y="54" rx="3" ry="3" width="24" height="33" />
                    </ContentLoader>
            </div>:
            <div className="p-3 my-3 card">
            <h4 className='pb-4 text-center'>{loggedInUser.displayName} You have {orders.length} Orders</h4>
                <div className="table-responsive">
                <table className="table table-hover table-borderless">
                <thead className='bg-light'>
                    <tr>
                        <th className='fw-bolder'>Product Name</th>
                        <th className='fw-bolder'>Weight</th>
                        <th className='fw-bolder'>Price</th>
>>>>>>> 033ecf5 (First commit)
                    </tr>
                </thead>
                <tbody>
                    {
                      orders.map(order => <OrderDetails order={order} key={order.product._id}></OrderDetails>)
                    }
                    <tr>
<<<<<<< HEAD
                    <td colSpan="2" className='h5'>Total Price</td>
                    <td className='h6'>${totalPrice}</td>
                    </tr>
                </tbody>                
            </Table>
            </div>
=======
                    <td colSpan="2" className='h5 fw-bolder'>Total Price</td>
                    <td className='h6 fw-bolder'>${totalPrice}</td>
                    </tr>
                </tbody>                
                </table>
                </div>
            </div>
            }
>>>>>>> 033ecf5 (First commit)
            
        </div>
    );
};

export default Orders;