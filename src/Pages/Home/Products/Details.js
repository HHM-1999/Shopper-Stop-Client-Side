import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Details = () => {

    const product = useLoaderData();
    console.log(product);


    return (
        <div className='mx-9 mt-9'>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={product?.image} style={{ width: '250px', height: '200px' }} alt="Movie" /></figure>
                <div className="card-body">
                    <h1 className="card-title text-dark"> Product Name : {product?.name}</h1>
                    <h4 className="card-title text-dark">Details : {product?.details}</h4>
                    <h6 className="card-title text-dark"> <span className='text-secondary'>Price : $ {product?.price}</span></h6>

                </div>
            </div>
        </div>
    );
};

export default Details;