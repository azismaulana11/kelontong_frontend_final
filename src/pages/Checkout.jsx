export default function Checkout() {
    const user = {
        name: "Jhon",
        phone: "081234567890",
        address: "Jl. Raya Bogor KM 30"
    }
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
            return total + product.price * product.quantity
        }, 0)
        setTotalNoShipping(totalPrice)
        setTotalAfterShipping(totalPrice)
    }, [])

    // Ongkos kirim
    const [selectedShipping, setSeletectShipping] = useState("")
    const shippings = [
        {
            name: "Instant",
            price: 30000
        },
        {
            name: "Same Day",
            price: 20000
        },
        {
            name: "Express",
            price: 10000
        },
        {
            name: "Economy",
            price: 0
        }
    ]
    const handleShipping = (e) => {
        const shipping = e.target.textContent.split(" - ")
        setSeletectShipping(shipping[0])
        const shippingPrice = shippings.find((item) => item.name === shipping[0])
        const total = shippingPrice.price + products.reduce((total, product) => {
            return total + product.price * product.quantity
        }, 0)
        setTotalAfterShipping(total)
    }

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
                            <Link href="#">
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
                    </div>
                </section >
            </main >
        </>
    )
}