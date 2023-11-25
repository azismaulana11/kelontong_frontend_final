import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import SweetAlert2 from 'react-sweetalert2'

import Header from '../components/navbar/Header'
import Footer from '../components/navbar/Footer'
import IncrementButton from '../components/IncrementButton'
import { postCart } from '../services'

export default function Details() {
    const [results, setResults] = useState({})
    console.log(results)
    const [swal, setSwal] = useState({})
    const { id } = useParams()
    const [quantity, setQuantity] = useState(1)
    // const [total, setTotal] = useState(0)

    useEffect(() => {
        const fetchDataById = async () => {
            try {
                const response = await axios.get(`http://localhost:7600/api/v1/products?id=${id}`)
                const product = response.data[0]
                setResults(product)
            } catch (error) {
                console.log(error);
            }
        }
        fetchDataById()
    }, [id])

    // useEffect (() => {
    //     setTotal(results.price * quantity)
    // }, [results.price, quantity])

    const customer_id = '655e0bdf95e2be68773e1c1a'
    const store = "Toko Luna"
    const total = 34000
    const addToCart = async () => {
        try {
           const cart1 = await postCart(results._id, customer_id, store, quantity, total);
            setSwal({
                show: true,
                title: 'Ditambahkan ke keranjang!',
                text: 'Produk ini ditambahkan ke keranjang',
                icon: 'success'
            });
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
    }

    const handleQuantityChange = (value) => {
        setQuantity(value);
    }

    return (
        <>
            <Header />
            <section className="container wrapper-product-detail ">
                <div className="detail row">
                    <div className="product-img col-6 mt-3">
                        <img className="w-50" src={results.image} alt={results.name} />
                    </div>

                    <div className="product-detail col-6 mt-3">
                        <h1 className="name fw-bold fs-3 text lh-lg">{results.name}</h1>
                        <h2 className="price fw-normal fs-5 text lh-lg">{results.price}</h2>
                        <h2 className="desc-1 fw-bold fs-5 text lh-lg">Deskripsi produk: </h2>
                        <h5 className="desc-2 fw-normal fs-6 text">{results.description}</h5>
                        <h5 className="stock fw-normal fs-6 text"></h5>
                        <h2 className="toko fw-bold fs-5 text lh-lg mt-4">Pengiriman dari: </h2>
                        <h5 className="toko fw-normal fs-6 text">Toko Luna</h5>
                        <IncrementButton value={quantity} onChange={handleQuantityChange} />
                        <div className="button checkout d-flex mt-5 justify-content-start">
                            <button type="button" className="btn btn-primary" onClick={addToCart}>Masukkan keranjang</button>
                            <SweetAlert2 {...swal} />
                            <button type="button" className="btn btn-outline-primary ms-4">Beli Sekarang</button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
