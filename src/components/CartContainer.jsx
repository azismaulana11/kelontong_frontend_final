import React, { useEffect, useState } from 'react'

import { fetchCartItems } from '../services/cart'
import IncrementButton from './IncrementButton'

export const CartContainer = () => {
    const [apiCartItems, setApiCartItems] = useState([]);

    useEffect(() => {
        const getApiCartItems = async () => {
            try {
                const cartItems = await fetchCartItems();
                console.log(cartItems)
                setApiCartItems(cartItems);
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        };
        getApiCartItems();
    }, []);

    if (isEmpty && apiCartItems.length === 0) {
        return <h1 className='text-center'>Your Cart is Empty</h1>;
    }

   
    return (
        <section className="wrapper-cart container">
            <div className="form-check px-5 py-3 d-flex border-bottom">
                <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="selectAll"
                />
                <span className="form-text fs-6 fw-bold">keranjang saya</span>
            </div>

            <div className="product-img px-4 py-5 d-flex row border-bottom">
                {combinedItems.map((item, index) => (
                    <div className="card d-flex m-2" key={index}>
                        <div className='row g-0'>
                            <div className='col-md-1'>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value="id" />
                            </div>
                            <div className='col-md-4'>
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h1 className="fw-bold fs-3 text lh-lg">{item.name}</h1>
                                    <h2 className="fw-normal fs-5 text lh-lg">{item.price}</h2>
                                    <div className="qty container mt-5">
                                        Qty: {item.qty}
                                        <div className="row">
                                            <div className="col-md-10">
                                                <IncrementButton
                                                    count={item.qty}
                                                    decreaseCount={() => handleDecreaseQuantity(item._id)}
                                                    increaseCount={() => handleIncreaseQuantity(item._id)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="Total-Price container d-flex justify-content-end">
                <div className="row">
                    <div className="col">
                        <h2 className="total-price fw-bold">subtotal: {selectedCartTotal}</h2>
                    </div>
                </div>
            </div>
            <div className='col-auto' onClick={emptyCart}>
                <button className='btn btn-danger m-2'>Clear cart</button>
            </div>
        </section>
    )
}
