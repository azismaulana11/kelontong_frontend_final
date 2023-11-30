import { Link } from 'react-router-dom'
import arrowLeft from '../assets/img/chekout/arrow-left.svg'
import tokoImg from '../assets/img/toko.png'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';

export default function Checkout() {
    const [order_id, setOrder_id] = useState("")
    const [customer, setCustomer] = useState({
        name: "",
        phone: "",
        address: ""
    })
    // Produk
    const [products, setProducts] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const getOrderById = async () => {
            try {
                const response = await axios.get(`http://localhost:7600/api/v1/checkout/${id}`)
                setOrder_id(response.data.order._id)
                setCustomer({
                    name: response.data.order.customer.name,
                    phone: response.data.order.customer.phone_number,
                    address: response.data.order.customer.alamat
                })
                setProducts(response.data.order.products)
            } catch (error) {
                console.log(error)
            }
        }
        getOrderById()
    }, [])

    // Produk
    const products = [
        {
            name: "Beras",
            quantity: 1,
            price: 65000,
            image: "https://berashotel.com/wp-content/uploads/BERAS-MERAH-2KG.png"
        },
        {
            name: "Gula",
            quantity: 3,
            price: 15000,
            image: "https://media.monotaro.id/mid01/big/Perlengkapan%20Dapur%20%26%20Horeka/Makanan/Bahan%20Masak/Gulaku%20Gula%20Pasir%20Premium%20Putih/80P101558288-34.jpg"
        },
        {
            name: "Minyak Goreng",
            quantity: 2,
            price: 20000,
            image: "https://o-cdn-cas.sirclocdn.com/parenting/images/Sunco_Minyak.width-800.format-webp.webp"
        },
        {
            name: "Telur",
            quantity: 5,
            price: 34000,
            image: "https://www.astronauts.id/blog/wp-content/uploads/2022/08/Astro-Goods-Farmers-Omega-3-Eggs-2-1024x683.png"
        },
        {
            name: "Susu",
            quantity: 2,
            price: 15000,
            image: "https://www.blibli.com/friends-backend/wp-content/uploads/2023/06/B600252-4-Varian-Rasa-Susu-Zee-Vanilla-Twist.jpg"
        },
        {
            name: "Teh",
            quantity: 3,
            price: 7000,
            image: "https://www.tehsariwangi.com/uploads/product/7/6e27173e5f86c20a033aaeb7284da671.png"
        },
        {
            name: "Kopi",
            quantity: 2,
            price: 15000,
            image: "https://swamediainc.storage.googleapis.com/swa.co.id/wp-content/uploads/2020/07/21141144/Indocofe-Coffeemix.jpg"
        },
        {
            name: "Sabun",
            quantity: 5,
            price: 16000,
            image: "https://images.soco.id/937-soap-bar.jpg.jpeg"
        },
        {
            name: "Shampoo",
            quantity: 2,
            price: 15000,
            image: "https://asset-a.grid.id/crop/0x0:0x0/x/photo/2018/09/25/3603630647.jpg"
        }
    ]

    // Total belanja
    const [totalNoShipping, setTotalNoShipping] = useState(0)
    const [totalAfterShipping, setTotalAfterShipping] = useState(0)
    useEffect(() => {
        const totalPrice = products.reduce((total, product) => {
            return total + product.price * product.qty
        }, 0)
        setTotalNoShipping(totalPrice)
        setTotalAfterShipping(totalPrice)
    }, [totalNoShipping, products])

    // Ongkos kirim
    const [selectedShipping, setSeletectShipping] = useState("")
    const [shippings, setShippings] = useState([])
    useEffect(() => {
        const getShippings = async () => {
            try {
                const response = await axios.get("http://localhost:7600/api/v1/shipping")
                setShippings(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        getShippings()
    }, [])
    const handleShipping = (e) => {
        const shipping = e.target.textContent.split(" - ")
        setSeletectShipping(shipping[0])
        const shippingPrice = shippings.find((item) => item.name === shipping[0])
        const total = shippingPrice.price + products.reduce((total, product) => {
            return total + product.price * product.qty
        }, 0)
        setTotalAfterShipping(total)
    }

    // Midtrans
    const [order_id, setOrder_id] = useState("")
    const [token, setToken] = useState("")
    const CLIENT_KEY_MIDTRANS = import.meta.env.VITE_APP_CLIENT_KEY_MIDTRANS;
    const processPayment = async () => {
        const newOrderId = uuidv4()
        setOrder_id(newOrderId)
        const data = {
            name: customer.name,
            order_id: order_id,
            total: totalAfterShipping,
        }
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        }
        const response = await axios.post(
            "http://localhost:7600/api/v1/payment/process-transactions",
            data,
            config
        )
        setToken(response.data.token)
    }
    useEffect(() => {
        if (token) {
            window.snap.pay(token, {
                onSuccess: async function (result) {
                    console.log("Payment success:", result);
                    try {
                        const response = await axios.put(`http://localhost:7600/api/v1/payment/${id}`, {
                            status: "paid",
                            shipping: selectedShipping,
                            shipping_address: customer.address,
                        });
                        console.log(response);
                    } catch (error) {
                        console.log(error);
                    }
                    setToken("")
                },
                onPending: function (result) {
                    localStorage.setItem("Pembayaran", JSON.stringify(result))
                    setToken("")
                },
                onError: function (error) {
                    console.log(error)
                    setToken("")
                },
                onClose: function () {
                    console.log("Anda belum menyelesaikan pembayaran")
                    setToken("")
                },
            })

            setName("")
            setOrder_id("")
            setTotalAfterShipping("")
        }
    }, [token])
    useEffect(() => {
        const midtransURL = "https://app.sandbox.midtrans.com/snap/snap.js"
        const midtransScript = document.createElement("script")
        midtransScript.setAttribute("src", midtransURL)
        midtransScript.setAttribute("data-client-key", CLIENT_KEY_MIDTRANS)
        document.body.appendChild(midtransScript)
        return () => {
            document.body.removeChild(midtransScript)
        }
    },[])

    return (
        <>
            <nav className="container py-4 nav__bar mb-4">
                <div className="fw-bold" style={{
                    fontSize: "32px",
                    color: "#0376cb"
                }}>Kelontong</div>
            </nav>
            <main className="container">
                <section className="checkout">
                    <div className="mb-5 checkout__address">
                        <div className="d-flex align-items-center column-gap-2 mb-4 checkout_title">
                            <Link to={'/product'}>
                                <img className="img-fluid me-3" src={arrowLeft} alt="" style={{
                                    width: "24px"
                                }} />
                            </Link>
                            <h4 className="fw-bold mb-0">Checkout</h4>
                        </div>
                        <h5 className="fw-semibold position-relative mb-5">
                            Alamat Pengiriman
                            <div className='position-absolute' style={{
                                bottom: "-20px",
                                left: "0",
                                width: "100%",
                                height: "2px",
                                background: "#b3b3b3",
                            }}></div>
                        </h5>
                        <div id="address-content">
                            <h5 className="fw-bolder mb-2">{user.name}</h5>
                            <h5 className="mb-2">{user.phone}</h5>
                            <h6 className="fw-light">
                                {user.address}
                            </h6>
                        </div>
                        <div className="mb-4" style={{
                            width: "100%",
                            height: "2px",
                            background: "#b3b3b3",
                            margin: "16px 0",
                        }}></div>
                        <button className="btn btn-outline-primary ms-3 mb-3">
                            Pilih alamat lain
                        </button>
                        <div className="line-2" style={{
                            width: "100%",
                            height: "10px",
                            background: "#d4d2d2",
                            margin: "16px 0",
                        }}></div>
                    </div>
                    <div className="checkout__products">
                        <div className="mb-4" style={{
                            fontSize: "18px",
                            fontWeight: "600",
                        }}>
                            <img className="me-2" src={tokoImg} alt="" style={{ width: "32px" }} />
                            Toko Luna
                        </div>
                        <div className="checkout__product mb-5" id="product-content">
                            {products.map((product, index) => {
                                return (
                                    <div className="d-flex justify-content-between align-items-center mb-4 product__item border-bottom border-3 border-dark" key={index}>
                                        <div className="d-flex align-items-center column-gap-3">
                                            <img className="img-fluid" src={product.image} alt="" style={{ width: "150px" }} />
                                            <div className="d-flex flex-column">
                                                <h6 className="fw-bold mb-0 fs-4">{product.name}</h6>
                                                <h6 className="fw-light mb-0 fs-5">Rp {product.price.toLocaleString()}</h6>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center column-gap-3">
                                            <h6 className="fw-bold mb-0 fs-4">{product.quantity}x</h6>
                                            <h6 className="fw-bold mb-0 fs-3">Rp {(product.price * product.quantity).toLocaleString()}</h6>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="checkout__result mb-5">
                            <div className="d-flex justify-content-between align-items-center mb-4 address__option">
                                <h5 className="fw-semibold ms-3">
                                    Pilih Pengiriman
                                </h5>
                                <div className="btn-group">
                                    <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false" style={{
                                        background: "#0376cb",
                                    }}>
                                        {
                                            selectedShipping.length > 0 ? selectedShipping : "Pilih Pengiriman"
                                        }
                                    </button>
                                    <ul className="dropdown-menu">
                                        {
                                            shippings.map((shipping, index) => {
                                                return (
                                                    <li role='button' key={index} onClick={handleShipping}>
                                                        <span className="dropdown-item">{shipping.name} - Rp {shipping.price.toLocaleString()}</span>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="line-2 mb-4"></div>
                            <div className="result__summary">
                                <h5 className="fw-bold ms-3 mb-3">
                                    Ringkasan Belanja
                                </h5>
                                <div className="d-flex justify-content-between total__summary">
                                    <h5 className="fw-semibold ms-3">
                                        Total
                                    </h5>
                                    <h5 className="fw-semibold">
                                        <span className="price-from-product">Rp. {totalNoShipping.toLocaleString()}</span>
                                    </h5>
                                </div>
                                <div className="d-flex justify-content-between" id="cost-price">
                                    {
                                        selectedShipping.length > 0 ?
                                            <>
                                                <h5 className="fw-semibold ms-3">
                                                    Ongkos Kirim
                                                </h5>
                                                <h5 className="fw-semibold">
                                                    <span className="price-from-product">Rp. {shippings.find((item) => item.name === selectedShipping).price.toLocaleString()}</span>
                                                </h5>
                                            </>
                                            :
                                            ""
                                    }
                                </div>
                            </div>
                            <div className="line mb-3"></div>
                            <div className="d-flex justify-content-end py-3 fs-1 fw-bolder" id="total">Rp. {totalAfterShipping.toLocaleString()}</div>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button className={`
                                    btn btn-primary ${selectedShipping.length > 0 ? "" : "disabled"}
                                `} type="button" id="pay-button" onClick={processPayment}>Pilih
                                    Pembayaran</button>
                            </div>
                        </div>
                    </div>
                </section >
            </main >
        </>
    )
}