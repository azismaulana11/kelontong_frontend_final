import React, { useEffect, useState } from 'react'
import { fetchCartItems } from '../services/cart'
import IncrementButton from './IncrementButton'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

export const CartContainer = () => {
    const navigate = useNavigate();
    const [apiCartItems, setApiCartItems] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    const [total, setTotal] = useState(0);

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            const allProductIds = apiCartItems.flatMap(item => item.products.map(product => product._id));
            setSelectedItems(allProductIds);
        } else {
            setSelectedItems([]);
        }
    };

    const handleSelectItem = (id, e) => {
        if (e.target.checked) {
            setSelectedItems([...selectedItems, id]);
        } else {
            setSelectedItems(selectedItems.filter(item => item !== id));
        }
    };

    const [productQuantities, setProductQuantities] = useState({});

    const handleIncrement = (id) => {
        setProductQuantities(prevQuantities => ({
            ...prevQuantities,
            [id]: prevQuantities[id] + 1
        }));
    };

    const handleDecrement = (id) => {
        setProductQuantities(prevQuantities => ({
            ...prevQuantities,
            [id]: Math.max(1, prevQuantities[id] - 1)
        }));
    };

    const calculateTotal = () => {
        let total = 0;
        for (let item of apiCartItems) {
            for (let product of item.products) {
                if (selectedItems.includes(product._id)) {
                    total += product.price * productQuantities[product._id];
                }
            }
        }
        setTotal(total);
    };

    useEffect(() => {
        const getApiCartItems = async () => {
            try {
                const cartItems = await fetchCartItems();
                console.log(cartItems)
                setApiCartItems(cartItems);

                const initialQuantities = {};
                for (let item of cartItems) {
                    for (let product of item.products) {
                        initialQuantities[product._id] = product.qty;
                    }
                }
                setProductQuantities(initialQuantities);
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        };
        getApiCartItems();
    }, []);

    useEffect(() => {
        calculateTotal();
    }, [selectedItems, productQuantities]);

    if (apiCartItems.length === 0) {
        return <h1 className='text-center'>Your Cart is Empty</h1>;
    }


    const customer_id = Cookies.get('user_id');
    const customer_name = Cookies.get('name');
    const customer_address = Cookies.get('alamat');
    const handleCheckout = async () => {
        try {
            const selectedProducts = apiCartItems.flatMap(item =>
                item.products.filter(product => selectedItems.includes(product._id))
            );

            const orderData = {
                products: selectedProducts,
                customer: { customer_id: customer_id, name: customer_name, alamat: customer_address },
                total,
                status: 'pending',
                shipping: '',
                shipping_address: '',
            };

            // Send a POST request to your backend to create an order
            const response = await axios.post('https://wild-rose-python-wig.cyclic.app/api/v1/order/create-order-from-cart', orderData);

            if (response.status === 200) {
                const responseData = response.data;
                const orderId = responseData.orderId;
                navigate(`/checkout/${orderId}`);
            } else {
                console.error('Error creating order');
            }
        } catch (error) {
            console.error('Error handling checkout:', error);
        }
    };


    return (
        <section className="wrapper-cart container">
            <div className="form-check px-5 py-3 d-flex border-bottom">
                <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="selectAll"
                    onChange={handleSelectAll}
                />
                <span className="form-text fs-6 fw-bold">keranjang saya</span>
            </div>

            <div className="product-img px-4 py-5 d-flex row border-bottom">
                {apiCartItems.map((item, index) => (
                    item.products.map((product, productIndex) => (
                        <div className="card d-flex m-2 w-100" key={productIndex}>
                            <div className='d-flex align-items-center g-0'>
                                <div className='col-md-1'>
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value={product._id}
                                        checked={selectedItems.includes(product._id)}
                                        onChange={(e) => handleSelectItem(e.target.value, e)}
                                    />
                                </div>
                                <div className='col-md-4'>
                                    <img src={product.image} alt={product.name} style={{ maxHeight: "150px" }} />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h1 className="fw-bold fs-3 text lh-lg">{product.name}</h1>
                                        <h2 className="fw-normal fs-5 text lh-lg">{product.price}</h2>
                                        <div className="qty container mt-5">
                                            Qty: {productQuantities[product._id] || 0}
                                            <div className="row">
                                                <div className="col-md-10">
                                                    <IncrementButton
                                                        handleDecrement={() => handleDecrement(product._id)}
                                                        handleIncrement={() => handleIncrement(product._id)}
                                                        quantity={productQuantities[product._id] || 0}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ))}
            </div>

            <div className="Total-Price container d-flex flex-column align-items-end">
                <div className="row">
                    <div className="col">
                        <h2 className="total-price fw-bold">Total: Rp. {total.toLocaleString()}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <button className="btn btn-primary" onClick={handleCheckout}>Checkout</button>
                    </div>
                </div>
            </div>
            <div className='col-auto'>
                <button className='btn btn-danger m-2'>Clear cart</button>
            </div>
        </section>
    )
}
