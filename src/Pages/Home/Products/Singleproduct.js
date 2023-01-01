import React from 'react';
import { Link } from 'react-router-dom';

const Singleproduct = ({ product }) => {
    const { name, price, _id } = product;

    return (
        <div>

            <div className="card w-80  bg-base-100 shadow-xl p-5 h-full">
                <figure>
                    <img src={product?.image} alt="Cloth" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>

                    <p> Price :<span className='text-primary'> $ <b>{price}</b></span></p>
                    <div className="card-actions  flex flex-nowrap">

                        <div>
                            <Link to={`/addcart/${_id}`}><div className="badge badge-outline btn btn-primary">Add Cart</div></Link>
                        </div>
                        <div>
                            <Link to={`/products/${_id}`}><div className="badge badge-outline btn btn-primary">Details</div></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Singleproduct;