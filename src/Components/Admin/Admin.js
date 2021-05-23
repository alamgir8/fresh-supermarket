import axios from 'axios';
import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import AllProduct from '../AllProduct/AllProduct';
<<<<<<< HEAD
import './Admin.css'
=======
import './Admin.css';
import swal from 'sweetalert';
>>>>>>> 033ecf5 (First commit)


const Admin = () => {
   
    const [imageURL, setImageURL] = useState();

    const {register, handleSubmit} = useForm();
    const onSubmit = data => {
       
        const productData = {
            name : data.product,
            weight : data.weight,
            price: data.price,
            imageURL : imageURL
        }
        const url = `https://fresh-super-market-server.herokuapp.com/addProduct`;
        fetch(url, {
            method: "POST",
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(productData)
        })
<<<<<<< HEAD
        .then(res => 
            alert('Product Added Successfully'))
        

=======
        .then(res => {
            swal({
                title: "Product Added Successfully!",
                icon: "success",
              });
        }
        )
        .catch(error => {
            swal({
                title: "Product Added Error!",
                icon: "error",
              });
        })
>>>>>>> 033ecf5 (First commit)
    };



    const handleImageUpload = (e) => {
       
        const imageData = new FormData();
        imageData.set('key', '12b535c0bab20335db20c56b41e1120a');
        imageData.append('image', e.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', imageData)
        .then(res =>  {
            setImageURL(res.data.data.display_url);
        })
        .catch(error => {
            console.log(error);
        });
  }

    const handleManageProduct = () => {
        const manageProduct = document.getElementById('manage-product');
        const addProduct = document.getElementById('add-product');
        addProduct.style.display = 'none';
        manageProduct.style.display ='block';

    };

    const handleAddProduct = () => {
        const manageProduct = document.getElementById('manage-product');
        const addProduct = document.getElementById('add-product');
        manageProduct.style.display ='none';
        addProduct.style.display = 'block';
    }


    return (
        <div className="admin">
<<<<<<< HEAD
           <div className="container">
               
=======
           <div className="mx-1"> 
>>>>>>> 033ecf5 (First commit)
               <div className="row">
                   <div className="col-lg-3 bg-sidebar py-4">
                        <Nav defaultActiveKey="/home" className="flex-column">
                                <Nav.Link onClick={handleManageProduct} className='sidebar'>
                                    <span className='mx-2'>
                                        <i className="bi bi-grid"></i>
                                    </span>
                                    Manage Product
                                </Nav.Link>
                                <Nav.Link onClick={handleAddProduct} className='sidebar'>
                                    <span className='mx-2'>
                                        <i className="bi bi-plus"></i>
                                    </span>
                                    Add Product
                                </Nav.Link>
                                <Nav.Link className='sidebar'>
                                    <span className='mx-2'>
                                        <i className="bi bi-pencil-square"></i> 
                                    </span> 
                                    Edit Product
                                </Nav.Link>
                        </Nav>
                    </div>        
                     <div className="col-lg-8 p-5 bg-admin">
                       <div id="manage-product">
                       <h3 className='mb-4'>Manage Product</h3>
                            <AllProduct/>
                       </div>
                       
                        <div id='add-product'>
                        <h3 className='mb-4'>Add Product</h3>
                            <form className='row p-3 bg-form' onSubmit={handleSubmit(onSubmit)}>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label h6">Photo</label>
                                        <input type="file" name='file' onChange={handleImageUpload} required className="form-control"/>
                                    </div>
                                    
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label h6">Product Name</label>
                                        <input type="text" name='product' className="form-control" placeholder='Product name' ref={register} required/>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label h6" >Weight</label>
                                        <input type="text" name='weight' className="form-control"  placeholder='Product Weight' ref={register} required/>
                                    </div>
                                    <div className="col-md-6 mb-3"> 
                                        <label className="form-label h6">Price</label>
                                        <input type="number" name='price' className="form-control" placeholder='Product price' ref={register} required/>
                                    </div>
                                    <div className="col-12 text-right my-3">
                                        <button type="submit" className="btn btn-primary">Add Product</button>
                                    </div>
                            </form>
                        </div>
                    </div>
                  
               </div>
               </div>
              
           </div>
    );
};

export default Admin;