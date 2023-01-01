import React, { useEffect, useState } from 'react';
import Singleproduct from './Singleproduct';

const Products = ({ product }) => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])



    const Handleadd = (id) => {
        const proceed = window.confirm('Do you want to add in cart ?');
        if (proceed) {
            fetch(`http://localhost:5000/${id}`, {
                method: 'POST'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.addCount > 0) {
                        alert("Successfully added");
                    }
                    const remaining = products.filter(pro =>
                        pro._id !== id);
                    setProducts(remaining);
                })
        }
    }
    return (
        <div>
            <div>
                <h1 className='mt-8 text-black font-bold text-7xl text-center p-9'>Clothes Collection</h1>
            </div>
            <div className='mt-8 mx-56 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(product => <Singleproduct
                        key={product._id}
                        product={product}
                        Handleadd={Handleadd}

                    ></Singleproduct>)
                }


            </div>


        </div>
    );
};

export default Products;