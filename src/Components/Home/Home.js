import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import { Spinner } from 'react-bootstrap';
=======
import ContentLoader from 'react-content-loader'
>>>>>>> 033ecf5 (First commit)
import Products from '../Products/Products';
import './Home.css'


<<<<<<< HEAD
=======

>>>>>>> 033ecf5 (First commit)
const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
<<<<<<< HEAD
        loadingSpinner(true)
=======
>>>>>>> 033ecf5 (First commit)
        fetch('https://fresh-super-market-server.herokuapp.com/products')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
<<<<<<< HEAD
            loadingSpinner(false)
=======
           
>>>>>>> 033ecf5 (First commit)
        })
        
    }, []);

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
    return (
        <div className='bg-secondary py-5'>
            <div className='container'>
                <div className="d-flex justify-content-center">
                    <Spinner id='loading-spinner' className='d-none' animation="border" role="status" variant="success">
                    </Spinner>
                </div>
            <div className="row row-eq-height">
                {
                    products.map(product => <Products product={product} key={product._id}></Products>)
                   
                }
            </div>
=======
    
    return (
        <div className='py-5'>
            <div className='container'>
               {
                   products.length === 0 ?  
                   <div className="d-flex justify-content-center">
                   <ContentLoader 
                        viewBox="0 0 1360 900" 
                        height={900} 
                        width={1360} 
                        backgroundColor="#ababab"
                        foregroundColor="#fafafa"
                    >
                       <rect x="30" y="20" rx="8" ry="8" width="200" height="200" />
                       <rect x="30" y="250" rx="0" ry="0" width="200" height="18" />
                       <rect x="30" y="275" rx="0" ry="0" width="120" height="20" />
                       <rect x="250" y="20" rx="8" ry="8" width="200" height="200" />
                       <rect x="250" y="250" rx="0" ry="0" width="200" height="18" />
                       <rect x="250" y="275" rx="0" ry="0" width="120" height="20" />
                       <rect x="470" y="20" rx="8" ry="8" width="200" height="200" />
                       <rect x="470" y="250" rx="0" ry="0" width="200" height="18" />
                       <rect x="470" y="275" rx="0" ry="0" width="120" height="20" />
                       <rect x="690" y="20" rx="8" ry="8" width="200" height="200" />
                       <rect x="690" y="250" rx="0" ry="0" width="200" height="18" />
                       <rect x="690" y="275" rx="0" ry="0" width="120" height="20" />
                       <rect x="910" y="20" rx="8" ry="8" width="200" height="200" />
                       <rect x="910" y="250" rx="0" ry="0" width="200" height="18" />
                       <rect x="910" y="275" rx="0" ry="0" width="120" height="20" />
                       <rect x="1130" y="20" rx="8" ry="8" width="200" height="200" />
                       <rect x="1130" y="250" rx="0" ry="0" width="200" height="18" />
                       <rect x="1130" y="275" rx="0" ry="0" width="120" height="20" />
                       <rect x="30" y="340" rx="8" ry="8" width="200" height="200" />
                       <rect x="30" y="570" rx="0" ry="0" width="200" height="18" />
                       <rect x="30" y="595" rx="0" ry="0" width="120" height="20" />
                       <rect x="250" y="340" rx="8" ry="8" width="200" height="200" />
                       <rect x="250" y="570" rx="0" ry="0" width="200" height="18" />
                       <rect x="250" y="595" rx="0" ry="0" width="120" height="20" />
                       <rect x="470" y="340" rx="8" ry="8" width="200" height="200" />
                       <rect x="470" y="570" rx="0" ry="0" width="200" height="18" />
                       <rect x="470" y="595" rx="0" ry="0" width="120" height="20" />
                       <rect x="690" y="340" rx="8" ry="8" width="200" height="200" />
                       <rect x="690" y="570" rx="0" ry="0" width="200" height="18" />
                       <rect x="690" y="595" rx="0" ry="0" width="120" height="20" />
                       <rect x="910" y="340" rx="8" ry="8" width="200" height="200" />
                       <rect x="910" y="570" rx="0" ry="0" width="200" height="18" />
                       <rect x="910" y="595" rx="0" ry="0" width="120" height="20" />
                       <rect x="1130" y="340" rx="8" ry="8" width="200" height="200" />
                       <rect x="1130" y="570" rx="0" ry="0" width="200" height="18" />
                       <rect x="1130" y="595" rx="0" ry="0" width="120" height="20" />
                   </ContentLoader>
                   </div>:
               <div className="row row-eq-height">
                   {
                       products.map(product => <Products product={product} key={product._id}></Products>)
                      
                   }
               </div>
               }
>>>>>>> 033ecf5 (First commit)
            </div>
        </div>
    );
};

export default Home;