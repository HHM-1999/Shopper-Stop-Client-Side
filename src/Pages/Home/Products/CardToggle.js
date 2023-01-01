import React from 'react';
import { FaMinus, FaPlus } from "react-icons/fa"

const CardToggle = ({ quantity, setDecrease, setIncrease }) => {
    return (
        <div className='cart-button'>
            <div className='amount-toggle flex flex-wrap justify-between'>
                <button onClick={() => setDecrease()}>
                    <FaMinus></FaMinus>
                </button>
                <div className='amount-style'>1</div>

                <button onClick={() => setIncrease()}>
                    <FaPlus></FaPlus>
                </button>
            </div>

        </div>
    );
};

export default CardToggle;