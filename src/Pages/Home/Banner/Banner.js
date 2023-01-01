import React from 'react';


const Banner = () => {
    return (
        <div className='mt-9 flex flex-wrap gap-4'>

            <div className='w-auto'>
                <div className="carousel rounded-box">
                    <div className="carousel-item">
                        <img src="https://img.freepik.com/premium-vector/vector-illustration-winter-holiday-sale_709546-520.jpg?size=626&ext=jpg&ga=GA1.2.89839238.1664401225&semt=ais" alt="sale" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://img.freepik.com/free-vector/gradient-winter-season-sale-webinar-template_23-2149885353.jpg?size=626&ext=jpg&ga=GA1.2.89839238.1664401225&semt=ais" alt="sale" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://img.freepik.com/free-vector/realistic-winter-season-sale-banner-template_23-2149763528.jpg?size=626&ext=jpg&ga=GA1.2.89839238.1664401225&semt=ais" alt="sale" />
                    </div>


                </div>

            </div>


        </div>
    );
};

export default Banner;